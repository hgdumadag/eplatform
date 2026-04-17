import { buildLessonKey } from './lessonKey.js';

type ExamType = 'practice' | 'assessment';

type RawExamQuestion = {
  id?: string | number;
  type?: string;
  question?: string;
  correctAnswer?: string | number;
  answer?: string | number;
  acceptableAnswers?: string[];
  explanation?: string;
  points?: number;
};

export interface ServerExamQuestion {
  id: string | number;
  type: string;
  question: string;
  correctAnswer?: string | number;
  explanation?: string;
  points: number;
}

export interface ServerExamDefinition {
  title?: string;
  description?: string;
  passingScore?: number;
  timeLimit?: number;
  questions: ServerExamQuestion[];
}

interface LoadExamParams {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  examType: ExamType;
}

interface OriginContext {
  requestOrigin?: string;
}

function getExamFilename(examType: ExamType): string {
  return examType === 'assessment' ? 'assessment.json' : 'practice.json';
}

function isServerExamDefinition(value: unknown): value is ServerExamDefinition {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<ServerExamDefinition>;
  return Array.isArray(candidate.questions);
}

function getBuiltInExamPath(params: LoadExamParams): string {
  return `/content/grade-${params.grade}/${params.subject}/quarter-${params.quarter}/${params.topicName}/${getExamFilename(params.examType)}`;
}

function normalizeQuestionType(questionType: unknown): 'multiple-choice' | 'true-false' | 'fill-in' | 'short-answer' {
  if (questionType === 'fill-in-blank') {
    return 'fill-in';
  }

  if (
    questionType === 'multiple-choice' ||
    questionType === 'true-false' ||
    questionType === 'fill-in' ||
    questionType === 'short-answer'
  ) {
    return questionType;
  }

  throw new Error(`Unsupported question type "${String(questionType)}".`);
}

function normalizeCorrectAnswer(question: RawExamQuestion, questionId: string): string | number {
  if (question.correctAnswer !== undefined) {
    return question.correctAnswer;
  }

  if (question.answer !== undefined) {
    return question.answer;
  }

  if (Array.isArray(question.acceptableAnswers) && question.acceptableAnswers.length > 0) {
    return question.acceptableAnswers.join(' or ');
  }

  throw new Error(`Question "${questionId}" is missing a correct answer.`);
}

function normalizeExamDefinition(
  params: LoadExamParams,
  definition: unknown,
): ServerExamDefinition {
  if (!definition || typeof definition !== 'object') {
    throw new Error('Exam data must be a JSON object.');
  }

  const candidate = definition as {
    title?: string;
    description?: string;
    instructions?: string;
    passingScore?: number;
    timeLimit?: number;
    estimatedTime?: number;
    questions?: RawExamQuestion[];
  };

  if (!Array.isArray(candidate.questions)) {
    throw new Error('Exam data must include a questions array.');
  }

  const questions = candidate.questions.map((question, index) => {
    if (!question || typeof question !== 'object' || Array.isArray(question)) {
      throw new Error(`Question ${index + 1} is malformed.`);
    }

    const questionId = String(question.id ?? `q${index + 1}`);
    const prompt = typeof question.question === 'string' ? question.question : '';
    if (!prompt) {
      throw new Error(`Question "${questionId}" is missing a question prompt.`);
    }

    const points = typeof question.points === 'number' ? question.points : NaN;
    if (Number.isNaN(points)) {
      throw new Error(`Question "${questionId}" is missing points.`);
    }

    return {
      id: questionId,
      type: normalizeQuestionType(question.type),
      question: prompt,
      correctAnswer: normalizeCorrectAnswer(question, questionId),
      explanation: question.explanation,
      points,
    };
  });

  return {
    title: typeof candidate.title === 'string' && candidate.title.trim()
      ? candidate.title
      : `${params.topicName} ${params.examType} exam`,
    description:
      typeof candidate.description === 'string'
        ? candidate.description
        : typeof candidate.instructions === 'string'
          ? candidate.instructions
          : '',
    passingScore: typeof candidate.passingScore === 'number' ? candidate.passingScore : 0,
    timeLimit:
      typeof candidate.timeLimit === 'number'
        ? candidate.timeLimit
        : typeof candidate.estimatedTime === 'number'
          ? candidate.estimatedTime
          : undefined,
    questions,
  };
}

async function loadBuiltInExam(
  params: LoadExamParams,
  context: OriginContext,
): Promise<ServerExamDefinition | null> {
  if (!context.requestOrigin) {
    return null;
  }

  try {
    const response = await fetch(new URL(getBuiltInExamPath(params), context.requestOrigin));
    if (!response.ok) {
      return null;
    }

    const parsed = await response.json();
    return isServerExamDefinition(parsed) ? normalizeExamDefinition(params, parsed) : null;
  } catch {
    return null;
  }
}

async function loadUploadedExam(params: LoadExamParams): Promise<ServerExamDefinition | null> {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  const { createClient } = await import('@supabase/supabase-js');
  const lessonKey = buildLessonKey({
    grade: params.grade,
    subject: params.subject,
    quarter: params.quarter,
    topicName: params.topicName,
  });

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const catalogResult = await supabase
    .from('lesson_catalog')
    .select('id')
    .eq('lesson_key', lessonKey)
    .eq('source', 'uploaded')
    .maybeSingle();

  if (catalogResult.error || !catalogResult.data) {
    return null;
  }

  const fileName = getExamFilename(params.examType);
  const fileResult = await supabase
    .from('lesson_files')
    .select('path')
    .eq('lesson_id', catalogResult.data.id)
    .eq('path', fileName)
    .maybeSingle();

  if (fileResult.error || !fileResult.data) {
    return null;
  }

  const storagePath = `lessons/${lessonKey}/${fileName}`;
  const downloadResult = await supabase.storage.from('lesson-assets').download(storagePath);
  if (downloadResult.error || !downloadResult.data) {
    return null;
  }

  const parsed = JSON.parse(await downloadResult.data.text());
  return isServerExamDefinition(parsed) ? normalizeExamDefinition(params, parsed) : null;
}

export async function loadCanonicalExamDefinition(
  params: LoadExamParams,
  context: OriginContext = {},
): Promise<ServerExamDefinition | null> {
  const builtInExam = await loadBuiltInExam(params, context);
  if (builtInExam) {
    return builtInExam;
  }

  return loadUploadedExam(params);
}
