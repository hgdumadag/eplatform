import type { FreeTextGradingRequest } from '../src/types';
import { loadCanonicalExamDefinition } from './_lib/examLoader';
import { FreeTextGradingError, gradeFreeTextAnswers } from './_lib/freeTextGrader';

interface VercelLikeRequest {
  method?: string;
  body?: unknown;
}

interface VercelLikeResponse {
  status: (statusCode: number) => VercelLikeResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

function parseRequestBody(body: unknown): FreeTextGradingRequest {
  let parsedBody = body;
  if (typeof body === 'string') {
    try {
      parsedBody = JSON.parse(body);
    } catch {
      throw new FreeTextGradingError('invalid_request', 'Request body must be valid JSON.', false, 400);
    }
  }

  if (!parsedBody || typeof parsedBody !== 'object') {
    throw new FreeTextGradingError('invalid_request', 'Request body must be a JSON object.', false, 400);
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
    throw new FreeTextGradingError('invalid_request', 'Request payload is invalid.', false, 400);
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
    const request = parseRequestBody(req.body);
    const exam = await loadCanonicalExamDefinition(request);

    if (!exam) {
      throw new FreeTextGradingError(
        'missing_exam',
        'The requested exam could not be loaded for grading.',
        false,
        404,
      );
    }

    const freeTextQuestions = exam.questions
      .filter((question) => question.type === 'short-answer')
      .map((question) => ({
        questionId: String(question.id),
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
    if (error instanceof FreeTextGradingError) {
      res.status(error.statusCode).json({
        error: {
          code: error.code,
          message: error.message,
          retryable: error.retryable,
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
