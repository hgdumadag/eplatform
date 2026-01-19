// Core data types for the education platform

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
  markComplete: (lessonId: string) => void;
  markStarted: (lessonId: string) => void;
  getProgress: (lessonId: string) => LessonProgress | undefined;
  saveExamAttempt: (attempt: ExamAttempt) => void;
  getExamAttempts: (lessonId: string) => ExamAttempt[];
}

// Child management state
export interface ChildState {
  children: Child[];
  activeChild: Child | null;
  selectChild: (childId: string) => void;
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
