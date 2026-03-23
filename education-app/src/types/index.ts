// Core data types for the education platform

export type OpenAITransport = 'sdk' | 'http';
export type QuestionResultSource = 'local' | 'openai' | 'unanswered';
export type RichContentContext =
  | 'lesson'
  | 'exam-question'
  | 'exam-option'
  | 'exam-explanation';
export type InteractiveMode = 'interactive' | 'readonly' | 'fallback';
export type InteractiveRuntime = 'native' | 'sandbox-local';

export interface ExamQuestionResult {
  questionId: string;
  isCorrect: boolean;
  feedback?: string;
  source: QuestionResultSource;
  provider?: 'local' | 'openai';
  model?: string;
  transport?: OpenAITransport;
  errorCode?: string;
}

export interface FreeTextGradingResult {
  questionId: string;
  isCorrect: boolean;
  feedback: string;
}

export interface FreeTextGradingRequest {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  examType: 'practice' | 'assessment';
  answers: Record<string, string | number>;
}

export interface FreeTextGradingResponse {
  provider: 'openai';
  model: string;
  transport: OpenAITransport;
  results: FreeTextGradingResult[];
}

export interface TopicMetadata {
  id: string;
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  description: string;
  learningObjectives: string[];
  prerequisites?: string[];
  estimatedDuration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  lastUpdated: string;
  version: string;
  resources: {
    contentFile: string;
    practiceExam?: string;
    assessmentExam?: string;
    images?: string[];
    audio?: string[];
  };
}

export interface InteractiveFallback {
  markdown: string;
  image?: string;
}

export interface InteractiveCheckpoint {
  id: string;
  label?: string;
  description?: string;
}

export interface InteractiveSpec {
  id: string;
  version: string;
  runtime: InteractiveRuntime;
  widget: string;
  title: string;
  prompt?: string;
  props: Record<string, unknown>;
  checkpoints?: InteractiveCheckpoint[];
  fallback: InteractiveFallback;
}

export interface InteractiveEmbedConfig {
  spec: string;
  mode?: 'auto' | InteractiveMode;
  height?: number;
  title?: string;
}

// Child profile
export interface Child {
  id: string;
  name: string;
  grade: number;
  avatar?: string;
}

// Exam question types
export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in' | 'short-answer';
  question: string;
  options?: string[]; // For MC and T/F
  correctAnswer: string | number; // Index for MC, "true"/"false" for T/F, string for others
  explanation?: string;
  points: number;
}

export interface LessonExamData {
  examId: string;
  examType: 'practice' | 'assessment';
  title: string;
  description: string;
  passingScore: number;
  timeLimit?: number;
  questions: ExamQuestion[];
}

export interface ExamAttempt {
  attemptId: string;
  lessonId: string;
  examType: 'practice' | 'assessment';
  startedAt: string;
  completedAt?: string;
  answers: Record<string, string | number>; // questionId -> answer
  score?: number;
  totalPoints?: number;
  passed?: boolean;
  timeSpent?: number; // in minutes
  released?: boolean; // For assessments - has parent released results?
  releasedAt?: string; // When parent released results
  questionResults?: Record<string, ExamQuestionResult>;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  startedAt?: string;
  completedAt?: string;
  timeSpent: number; // in minutes
  examAttempts: ExamAttempt[];
  bestScore?: number;
}

// Progress state - now per child
export interface ProgressState {
  activeChildId: string | null;
  children: Record<string, {
    lessons: Record<string, LessonProgress>;
  }>;
  setActiveChild: (childId: string) => void;
  loadChildProgress: (childId: string) => Promise<void>;
  clearActiveChild: () => void;
  markComplete: (lessonId: string) => void;
  markStarted: (lessonId: string) => void;
  getProgress: (lessonId: string) => LessonProgress | undefined;
  saveExamAttempt: (attempt: ExamAttempt) => void;
  getExamAttempts: (lessonId: string) => ExamAttempt[];
  releaseAssessmentResults: (childId: string, attemptId: string) => void;
  updateLessonTime: (lessonId: string, minutes: number) => void;
  exportProgress: () => string;
  importProgress: (data: string) => boolean;
}

// Child management state
export interface ChildState {
  children: Child[];
  activeChild: Child | null;
  loadChildren: (userId: string, role: 'parent' | 'child' | 'admin') => Promise<void>;
  selectChild: (childId: string) => void;
  clearActiveChild: () => void;
  getChild: (childId: string) => Child | undefined;
}

// Parent authentication state
export interface ParentAuthState {
  isAuthenticated: boolean;
  passwordHash: string | null;
  setPassword: (password: string) => Promise<void>;
  authenticate: (password: string) => Promise<boolean>;
  logout: () => void;
}
