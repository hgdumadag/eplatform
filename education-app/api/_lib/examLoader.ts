import { buildLessonKey } from './lessonKey';

type ExamType = 'practice' | 'assessment';

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
  passingScore?: number;
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
    return isServerExamDefinition(parsed) ? parsed : null;
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
  return isServerExamDefinition(parsed) ? parsed : null;
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
