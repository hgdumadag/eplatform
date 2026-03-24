interface FreeTextGradingRequest {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  examType: 'practice' | 'assessment';
  answers: Record<string, string | number>;
}

interface VercelLikeRequest {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
}

interface VercelLikeResponse {
  status: (statusCode: number) => VercelLikeResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface GradingModule {
  FreeTextGradingError: new (
    code: string,
    message: string,
    retryable: boolean,
    statusCode: number,
  ) => {
    code: string;
    message: string;
    retryable: boolean;
    statusCode: number;
  };
  gradeFreeTextAnswers: (params: {
    questions: Array<{
      questionId: string;
      questionType: 'fill-in' | 'short-answer';
      question: string;
      correctAnswer: string;
      studentAnswer: string;
    }>;
  }) => Promise<{
    provider: 'openai';
    model: string;
    transport: 'sdk' | 'http';
    results: Array<{
      questionId: string;
      isCorrect: boolean;
      feedback: string;
    }>;
  }>;
}

interface ExamLoaderModule {
  loadCanonicalExamDefinition: (
    params: FreeTextGradingRequest,
    context: { requestOrigin?: string },
  ) => Promise<{
    questions: Array<{
      id: string | number;
      type: string;
      question: string;
      correctAnswer?: string | number;
    }>;
  } | null>;
}

function resolveHeaderValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function getRequestOrigin(req: VercelLikeRequest): string | undefined {
  const forwardedProto = resolveHeaderValue(req.headers?.['x-forwarded-proto']);
  const forwardedHost = resolveHeaderValue(req.headers?.['x-forwarded-host']);
  const host = resolveHeaderValue(req.headers?.host);

  if (forwardedProto && forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  if (host) {
    return `https://${host}`;
  }

  return undefined;
}

function parseRequestBody(body: unknown, GradingError: GradingModule['FreeTextGradingError']): FreeTextGradingRequest {
  let parsedBody = body;
  if (typeof body === 'string') {
    try {
      parsedBody = JSON.parse(body);
    } catch {
      throw new GradingError('invalid_request', 'Request body must be valid JSON.', false, 400);
    }
  }

  if (!parsedBody || typeof parsedBody !== 'object') {
    throw new GradingError('invalid_request', 'Request body must be a JSON object.', false, 400);
  }

  const request = parsedBody as Partial<FreeTextGradingRequest>;
  if (
    typeof request.grade !== 'number' ||
    typeof request.subject !== 'string' ||
    typeof request.quarter !== 'number' ||
    typeof request.topicName !== 'string' ||
    (request.examType !== 'practice' && request.examType !== 'assessment') ||
    !request.answers ||
    typeof request.answers !== 'object'
  ) {
    throw new GradingError('invalid_request', 'Request payload is invalid.', false, 400);
  }

  return request as FreeTextGradingRequest;
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({
      error: {
        code: 'method_not_allowed',
        message: 'Only POST is supported.',
        retryable: false,
      },
    });
    return;
  }

  try {
    const gradingModule = (await import('./_lib/freeTextGrader.js')) as GradingModule;
    const examLoaderModule = (await import('./_lib/examLoader.js')) as ExamLoaderModule;
    const { FreeTextGradingError, gradeFreeTextAnswers } = gradingModule;
    const request = parseRequestBody(req.body, FreeTextGradingError);
    const exam = await examLoaderModule.loadCanonicalExamDefinition(request, {
      requestOrigin: getRequestOrigin(req),
    });

    if (!exam) {
      throw new FreeTextGradingError(
        'missing_exam',
        'The requested exam could not be loaded for grading.',
        false,
        404,
      );
    }

    const freeTextQuestions = exam.questions
      .filter((question) => question.type === 'short-answer' || question.type === 'fill-in')
      .map((question) => ({
        questionId: String(question.id),
        questionType: question.type as 'fill-in' | 'short-answer',
        question: question.question,
        correctAnswer: String(question.correctAnswer ?? ''),
        studentAnswer: String(request.answers[String(question.id)] ?? '').trim(),
      }))
      .filter((question) => question.studentAnswer.length > 0);

    if (freeTextQuestions.length === 0) {
      res.status(200).json({
        provider: 'openai',
        model: process.env.OPENAI_MODEL || 'gpt-5.4-nano',
        transport: process.env.OPENAI_TRANSPORT === 'http' ? 'http' : 'sdk',
        results: [],
      });
      return;
    }

    const gradingResponse = await gradeFreeTextAnswers({ questions: freeTextQuestions });
    res.status(200).json(gradingResponse);
  } catch (error) {
    const maybeGradingError = error as {
      code?: string;
      message?: string;
      retryable?: boolean;
      statusCode?: number;
    };

    if (
      typeof maybeGradingError.code === 'string' &&
      typeof maybeGradingError.statusCode === 'number'
    ) {
      res.status(maybeGradingError.statusCode).json({
        error: {
          code: maybeGradingError.code,
          message: maybeGradingError.message || 'Grading failed.',
          retryable: maybeGradingError.retryable ?? false,
        },
      });
      return;
    }

    const unexpectedError = error as Error;
    res.status(500).json({
      error: {
        code: 'unexpected_error',
        message: unexpectedError.message || 'Unexpected grading error.',
        retryable: true,
      },
    });
  }
}
