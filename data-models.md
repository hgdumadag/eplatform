# Data Models Documentation

## Overview

This document defines all data models, schemas, and data structures used throughout the educational platform. These models govern how data is stored, accessed, and manipulated across the application.

---

## 1. Core Data Models

### 1.1 Application State Model

```typescript
interface AppState {
  currentUser: ParentUser | null;
  selectedChild: Child | null;
  settings: AppSettings;
  navigationState: NavigationState;
  uiState: UIState;
}
```

#### AppSettings

```typescript
interface AppSettings {
  theme: 'light' | 'dark';
  autoBackupEnabled: boolean;
  backupFrequency: 'daily' | 'weekly' | 'custom';
  lastBackupDate: string; // ISO 8601
  language: 'en'; // English only initially
  masterPassword: string; // Hashed
}
```

#### NavigationState

```typescript
interface NavigationState {
  currentRoute: string;
  breadcrumbs: Breadcrumb[];
  history: string[];
}

interface Breadcrumb {
  label: string;
  route: string;
}
```

#### UIState

```typescript
interface UIState {
  sidebarOpen: boolean;
  modalStack: Modal[];
  notifications: Notification[];
  loading: boolean;
  error: ErrorState | null;
}

interface Modal {
  id: string;
  type: string;
  props: Record<string, any>;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp: string;
  autoHide: boolean;
  duration?: number;
}

interface ErrorState {
  code: string;
  message: string;
  details?: any;
}
```

---

## 2. User & Profile Models

### 2.1 ParentUser

```typescript
interface ParentUser {
  id: string; // UUID
  username: string;
  passwordHash: string; // Hashed password
  email?: string; // Optional
  createdAt: string; // ISO 8601
  lastLogin: string; // ISO 8601
}
```

### 2.2 Child

```typescript
interface Child {
  id: string; // UUID
  name: string;
  avatar?: string; // Path or URL to avatar image
  grade: number; // 1-12
  dateOfBirth?: string; // ISO 8601 date (optional)
  preferences: ChildPreferences;
  goals?: string; // Parent-set goals/notes
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}
```

#### ChildPreferences

```typescript
interface ChildPreferences {
  theme: 'light' | 'dark';
  favoriteSubjects: Subject[];
  assignedSubjects: Subject[]; // Subjects child has access to
  subjectSettings: SubjectSettings[];
}

interface SubjectSettings {
  subject: Subject;
  accessMode: 'sequential' | 'free'; // Sequential requires completing previous topics
  allowedQuarters: number[]; // [1, 2, 3, 4] or subset
}

type Subject = 'math' | 'science' | 'english' | 'music' | 'coding';
```

---

## 3. Content Models

### 3.1 TopicMetadata

```typescript
interface TopicMetadata {
  id: string; // Unique identifier (e.g., 'grade-3-math-q1-fractions')
  grade: number; // 1-12
  subject: Subject;
  quarter: number; // 1-4
  topicName: string; // Display name
  description: string;
  learningObjectives: string[];
  prerequisites: string[]; // Topic IDs (non-enforced suggestions)
  estimatedDuration: number; // Minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  lastUpdated: string; // ISO 8601 date
  version: string; // Semantic versioning (e.g., '1.0.0')
  resources: TopicResources;
}
```

#### TopicResources

```typescript
interface TopicResources {
  contentFile: string; // Path to content.md
  practiceExam?: string; // Path to practice.json
  assessmentExam?: string; // Path to assessment.json
  images: string[]; // Relative paths to images
  audio: string[]; // Relative paths to audio files
  externalLinks: ExternalLink[];
}

interface ExternalLink {
  title: string;
  url: string;
  description?: string;
}
```

### 3.2 LessonContent

```typescript
interface LessonContent {
  topicId: string;
  sections: LessonSection[];
  rawMarkdown: string; // Full markdown content
}

interface LessonSection {
  type: 'introduction' | 'main-content' | 'formulas' | 'examples' | 'key-takeaways';
  title: string;
  content: string; // Rendered HTML
  rawMarkdown: string;
}
```

---

## 4. Examination Models

### 4.1 Exam

```typescript
interface Exam {
  id: string; // Unique exam ID
  topicId: string; // Associated topic
  examType: 'practice' | 'assessment';
  title: string;
  description?: string;
  instructions: string;
  timeLimit?: number; // Minutes, null for untimed
  passingScore: number; // Percentage (e.g., 70)
  randomizeQuestions: boolean;
  randomizeOptions: boolean;
  showCorrectAnswers: boolean;
  allowReview: boolean;
  retakeAllowed: boolean; // For assessments
  retakeDelay?: number; // Hours to wait before retake
  questions: Question[];
}
```

### 4.2 Question (Base)

```typescript
interface BaseQuestion {
  id: string; // Unique within exam
  type: QuestionType;
  question: string; // Supports LaTeX
  points: number;
  explanation: string;
  hint?: string;
}

type QuestionType = 
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'short-answer'
  | 'essay'
  | 'coding'
  | 'math';
```

### 4.3 Question Type Variants

#### MultipleChoiceQuestion

```typescript
interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  multipleCorrect: boolean; // Allow selecting multiple answers
  options: MultipleChoiceOption[];
  correctAnswer: string | string[]; // Single ID or array of IDs
}

interface MultipleChoiceOption {
  id: string; // e.g., 'a', 'b', 'c', 'd'
  text: string; // Supports LaTeX
  isCorrect: boolean;
}
```

#### TrueFalseQuestion

```typescript
interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}
```

#### FillBlankQuestion

```typescript
interface FillBlankQuestion extends BaseQuestion {
  type: 'fill-blank';
  correctAnswer: string;
  caseSensitive: boolean;
  acceptableAnswers: string[]; // Alternative correct answers
}
```

#### ShortAnswerQuestion

```typescript
interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  correctAnswer: string; // Sample answer for parent reference
  maxLength?: number; // Character limit (optional)
}
```

#### EssayQuestion

```typescript
interface EssayQuestion extends BaseQuestion {
  type: 'essay';
  correctAnswer: string; // Sample answer/rubric for parent
  minLength?: number; // Minimum word count (optional)
  maxLength?: number; // Maximum word count (optional)
}
```

#### CodingQuestion

```typescript
interface CodingQuestion extends BaseQuestion {
  type: 'coding';
  codeLanguage: 'python' | 'javascript' | 'html' | 'css' | 'java';
  starterCode?: string;
  correctAnswer: string; // Sample solution
}
```

#### MathQuestion

```typescript
interface MathQuestion extends BaseQuestion {
  type: 'math';
  correctAnswer: string;
  acceptableAnswers: string[]; // Different valid formats
}
```

### 4.4 Union Type for All Questions

```typescript
type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | ShortAnswerQuestion
  | EssayQuestion
  | CodingQuestion
  | MathQuestion;
```

---

## 5. Progress Tracking Models

### 5.1 LessonProgress

```typescript
interface LessonProgress {
  childId: string;
  topicId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  startedAt?: string; // ISO 8601, null if not started
  completedAt?: string; // ISO 8601, null if not completed
  timeSpent: number; // Total minutes spent
  lastAccessedAt?: string; // ISO 8601
  notes?: string; // Parent notes
}
```

### 5.2 ExamAttempt

```typescript
interface ExamAttempt {
  id: string; // UUID for this attempt
  childId: string;
  topicId: string;
  examType: 'practice' | 'assessment';
  attemptNumber: number; // 1, 2, 3, etc.
  status: 'in-progress' | 'submitted' | 'graded' | 'released';
  startedAt: string; // ISO 8601
  submittedAt?: string; // ISO 8601
  gradedAt?: string; // ISO 8601 (for assessments)
  releasedAt?: string; // ISO 8601 (for assessments)
  timeSpent: number; // Minutes
  score?: number; // Percentage (calculated after grading)
  pointsEarned?: number;
  pointsPossible: number;
  passed?: boolean; // Based on passing score
  answers: ExamAnswer[];
  parentFeedback?: string; // Overall feedback for assessments
}
```

#### ExamAnswer

```typescript
interface ExamAnswer {
  questionId: string;
  questionType: QuestionType;
  studentAnswer: string | string[] | boolean | null;
  isCorrect?: boolean; // Null for manual grading questions
  pointsEarned: number;
  pointsPossible: number;
  timeSpent?: number; // Seconds spent on this question (optional)
  flaggedForReview?: boolean;
  parentFeedback?: string; // For manual grading
}
```

### 5.3 ProgressSummary

```typescript
interface ProgressSummary {
  childId: string;
  grade: number;
  subject: Subject;
  quarter?: number; // Null for overall subject summary
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  notStartedTopics: number;
  completionPercentage: number;
  totalTimeSpent: number; // Minutes
  averagePracticeScore?: number;
  averageAssessmentScore?: number;
  lastActivityDate?: string; // ISO 8601
}
```

---

## 6. Gamification Models

### 6.1 GamificationData

```typescript
interface GamificationData {
  childId: string;
  totalPoints: number;
  pointsHistory: PointsTransaction[];
  currentStreak: number; // Consecutive days
  longestStreak: number;
  lastActivityDate: string; // ISO 8601 date (YYYY-MM-DD)
  streakHistory: StreakRecord[];
  achievements: Achievement[];
  badges: Badge[];
  certificates: Certificate[];
}
```

#### PointsTransaction

```typescript
interface PointsTransaction {
  id: string;
  amount: number;
  reason: string; // e.g., "Completed lesson: Fractions"
  source: 'lesson' | 'practice-exam' | 'assessment-exam' | 'achievement';
  sourceId: string; // Topic ID or exam ID
  timestamp: string; // ISO 8601
}
```

#### StreakRecord

```typescript
interface StreakRecord {
  startDate: string; // ISO 8601 date
  endDate?: string; // ISO 8601 date, null if current streak
  days: number;
  isCurrent: boolean;
}
```

#### Achievement

```typescript
interface Achievement {
  id: string;
  name: string;
  description: string;
  icon?: string; // Icon identifier or path
  earnedAt: string; // ISO 8601
  points: number; // Points awarded for achievement
  category: 'lesson' | 'exam' | 'streak' | 'subject' | 'custom';
}
```

#### Badge

```typescript
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // Icon identifier or path
  earnedAt: string; // ISO 8601
  criteria: BadgeCriteria;
  isCustom: boolean; // Parent-created badge
}

interface BadgeCriteria {
  type: 'lesson-count' | 'exam-score' | 'streak' | 'subject-completion' | 'custom';
  parameters: Record<string, any>;
  // Examples:
  // { lessonCount: 10 }
  // { minScore: 90, examType: 'assessment' }
  // { streakDays: 7 }
  // { subject: 'math', quarter: 1 }
}
```

#### Certificate

```typescript
interface Certificate {
  id: string;
  childId: string;
  title: string;
  description: string;
  issuedDate: string; // ISO 8601
  reason: string; // e.g., "Completing Quarter 1 Math"
  signedBy: string; // Parent name
  pdfPath?: string; // Path to generated PDF
}
```

### 6.2 Leaderboard

```typescript
interface Leaderboard {
  period: 'weekly' | 'monthly' | 'quarterly' | 'all-time';
  startDate?: string; // ISO 8601 date
  endDate?: string; // ISO 8601 date
  entries: LeaderboardEntry[];
  generatedAt: string; // ISO 8601
}

interface LeaderboardEntry {
  rank: number;
  childId: string;
  childName: string;
  avatar?: string;
  points: number;
  lessonsCompleted: number;
  examsPassed: number;
}
```

---

## 7. Data Persistence Models

### 7.1 ProgressData (Root Storage Model)

```typescript
interface ProgressData {
  version: string; // Data schema version
  lastUpdated: string; // ISO 8601
  parent: ParentUser;
  settings: AppSettings;
  children: ChildData[];
}
```

### 7.2 ChildData

```typescript
interface ChildData {
  profile: Child;
  lessonProgress: LessonProgress[];
  examAttempts: ExamAttempt[];
  gamification: GamificationData;
  progressSummaries: ProgressSummary[]; // Cached summaries for performance
}
```

### 7.3 BackupMetadata

```typescript
interface BackupMetadata {
  backupId: string;
  timestamp: string; // ISO 8601
  version: string; // Data schema version
  childrenCount: number;
  totalLessons: number;
  totalExams: number;
  fileSize: number; // Bytes
  checksum?: string; // For data integrity verification
}
```

---

## 8. UI-Specific Models

### 8.1 DashboardData

```typescript
interface DashboardData {
  childId: string;
  overviewStats: OverviewStats;
  recentActivity: Activity[];
  upcomingTasks: Task[];
  progressCharts: ChartData[];
}

interface OverviewStats {
  totalLessonsCompleted: number;
  totalExamsTaken: number;
  averageScore: number;
  currentStreak: number;
  totalPoints: number;
  recentBadges: Badge[];
}

interface Activity {
  id: string;
  type: 'lesson-completed' | 'exam-submitted' | 'badge-earned' | 'achievement-unlocked';
  description: string;
  timestamp: string; // ISO 8601
  icon?: string;
  linkTo?: string; // Route to related content
}

interface Task {
  id: string;
  type: 'pending-exam' | 'incomplete-lesson' | 'suggested-topic';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  linkTo: string;
}

interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'progress';
  title: string;
  data: any; // Chart-specific data format
  config?: Record<string, any>;
}
```

### 8.2 ContentBrowser

```typescript
interface ContentBrowserState {
  currentGrade: number;
  currentSubject?: Subject;
  currentQuarter?: number;
  topics: TopicMetadata[];
  filteredTopics: TopicMetadata[];
  searchQuery: string;
  filters: ContentFilters;
  sortBy: 'name' | 'difficulty' | 'duration' | 'completion';
  sortOrder: 'asc' | 'desc';
}

interface ContentFilters {
  subjects: Subject[];
  quarters: number[];
  difficulty: ('beginner' | 'intermediate' | 'advanced')[];
  status: ('not-started' | 'in-progress' | 'completed')[];
  tags: string[];
}
```

### 8.3 ExamSession

```typescript
interface ExamSession {
  sessionId: string;
  childId: string;
  exam: Exam;
  attemptNumber: number;
  startTime: string; // ISO 8601
  currentQuestionIndex: number;
  answers: Map<string, ExamAnswer>; // questionId -> ExamAnswer
  flaggedQuestions: Set<string>; // questionId
  timeRemaining?: number; // Seconds (for timed exams)
  status: 'active' | 'paused' | 'reviewing' | 'submitted';
  autoSaveInterval: number; // Milliseconds
  lastAutoSave: string; // ISO 8601
}
```

---

## 9. Validation Schemas

### 9.1 Metadata Validation Rules

```typescript
interface MetadataValidationRules {
  id: {
    required: true;
    pattern: /^grade-\d+-[a-z]+-q\d+-[a-z-]+$/;
    unique: true;
  };
  grade: {
    required: true;
    min: 1;
    max: 12;
    type: 'integer';
  };
  subject: {
    required: true;
    enum: ['math', 'science', 'english', 'music', 'coding'];
  };
  quarter: {
    required: true;
    min: 1;
    max: 4;
    type: 'integer';
  };
  topicName: {
    required: true;
    maxLength: 100;
  };
  estimatedDuration: {
    required: true;
    min: 1;
    type: 'integer';
  };
  // ... additional validation rules
}
```

### 9.2 Exam Validation Rules

```typescript
interface ExamValidationRules {
  questions: {
    required: true;
    minItems: 1;
    uniqueIds: true;
  };
  passingScore: {
    required: true;
    min: 0;
    max: 100;
    type: 'number';
  };
  timeLimit: {
    required: false;
    min: 1;
    type: 'integer';
  };
  // ... additional validation rules
}
```

---

## 10. API/Service Response Models

### 10.1 ContentService Responses

```typescript
interface LoadTopicResponse {
  success: boolean;
  data?: {
    metadata: TopicMetadata;
    content: LessonContent;
  };
  error?: ErrorResponse;
}

interface LoadExamResponse {
  success: boolean;
  data?: Exam;
  error?: ErrorResponse;
}

interface ErrorResponse {
  code: string;
  message: string;
  details?: any;
}
```

### 10.2 ProgressService Responses

```typescript
interface SaveProgressResponse {
  success: boolean;
  data?: {
    lessonProgress: LessonProgress;
    updatedAt: string;
  };
  error?: ErrorResponse;
}

interface SubmitExamResponse {
  success: boolean;
  data?: {
    attempt: ExamAttempt;
    pointsEarned?: number;
    achievementsUnlocked?: Achievement[];
    badgesEarned?: Badge[];
  };
  error?: ErrorResponse;
}
```

---

## 11. Computed/Derived Models

### 11.1 ComputedProgress

```typescript
interface ComputedProgress {
  childId: string;
  topicId: string;
  
  // Derived from LessonProgress
  isStarted: boolean;
  isCompleted: boolean;
  progressPercentage: number;
  timeSpentFormatted: string; // e.g., "1h 30m"
  
  // Derived from ExamAttempts
  practiceAttempts: number;
  assessmentAttempts: number;
  bestPracticeScore?: number;
  bestAssessmentScore?: number;
  
  // Combined status
  overallStatus: 'locked' | 'available' | 'in-progress' | 'completed' | 'mastered';
}
```

### 11.2 SubjectStatistics

```typescript
interface SubjectStatistics {
  subject: Subject;
  grade: number;
  childId: string;
  
  totalTopics: number;
  completedTopics: number;
  averageCompletionTime: number; // Minutes
  totalTimeSpent: number; // Minutes
  
  practiceExamStats: {
    attempted: number;
    averageScore: number;
    perfectScores: number;
  };
  
  assessmentExamStats: {
    attempted: number;
    passed: number;
    failed: number;
    averageScore: number;
  };
  
  recentActivity: Activity[];
  trending: 'up' | 'down' | 'stable';
}
```

---

## 12. Import/Export Models

### 12.1 ExportOptions

```typescript
interface ExportOptions {
  includeChildren: string[]; // Child IDs, empty for all
  dateRange?: {
    start: string; // ISO 8601 date
    end: string; // ISO 8601 date
  };
  includeExamAnswers: boolean;
  includeParentNotes: boolean;
  format: 'json' | 'csv';
  compression: boolean;
}
```

### 12.2 ImportOptions

```typescript
interface ImportOptions {
  strategy: 'overwrite' | 'merge' | 'skip-existing';
  validateSchema: boolean;
  backupBeforeImport: boolean;
  preserveIds: boolean;
}
```

### 12.3 ImportResult

```typescript
interface ImportResult {
  success: boolean;
  summary: {
    childrenImported: number;
    lessonsImported: number;
    examsImported: number;
    achievementsImported: number;
  };
  warnings: string[];
  errors: ErrorResponse[];
  backupCreated?: string; // Path to backup file
}
```

---

## 13. Type Utilities

### 13.1 Helper Types

```typescript
// Make all properties optional recursively
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Make specific properties required
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Omit multiple properties
type OmitMultiple<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Extract question types by type property
type QuestionByType<T extends QuestionType> = Extract<Question, { type: T }>;
```

### 13.2 Constants

```typescript
const SUBJECTS: readonly Subject[] = ['math', 'science', 'english', 'music', 'coding'];

const GRADE_LEVELS: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const QUARTERS: readonly number[] = [1, 2, 3, 4];

const QUESTION_TYPES: readonly QuestionType[] = [
  'multiple-choice',
  'true-false',
  'fill-blank',
  'short-answer',
  'essay',
  'coding',
  'math'
];

const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
```

---

## 14. Index Structures (for Performance)

### 14.1 Content Indexes

```typescript
interface ContentIndex {
  byId: Map<string, TopicMetadata>; // topicId -> metadata
  byGrade: Map<number, string[]>; // grade -> topicIds
  bySubject: Map<Subject, string[]>; // subject -> topicIds
  byQuarter: Map<string, string[]>; // "grade-subject-quarter" -> topicIds
  byTag: Map<string, string[]>; // tag -> topicIds
}
```

### 14.2 Progress Indexes

```typescript
interface ProgressIndex {
  byChild: Map<string, ChildProgressIndex>; // childId -> child progress
  byTopic: Map<string, ChildProgressMap>; // topicId -> childId -> progress
}

interface ChildProgressIndex {
  lessons: Map<string, LessonProgress>; // topicId -> progress
  exams: Map<string, ExamAttempt[]>; // topicId -> attempts
  summaries: Map<string, ProgressSummary>; // "subject-quarter" -> summary
}

type ChildProgressMap = Map<string, LessonProgress>; // childId -> progress
```

---

## 15. Migration Models

### 15.1 SchemaMigration

```typescript
interface SchemaMigration {
  fromVersion: string;
  toVersion: string;
  migrateData: (oldData: any) => ProgressData;
  validateMigration: (newData: ProgressData) => boolean;
  rollback?: (newData: ProgressData) => any;
}
```

### 15.2 DataVersionInfo

```typescript
interface DataVersionInfo {
  currentVersion: string;
  requiredVersion: string;
  isCompatible: boolean;
  needsMigration: boolean;
  availableMigrations: SchemaMigration[];
}
```

---

## Summary

This data models documentation defines all structured data used throughout the educational platform:

- **Core Models**: Application state, settings, navigation
- **User Models**: Parent and child profiles with preferences
- **Content Models**: Topics, lessons, exams with full metadata
- **Progress Models**: Lesson tracking, exam attempts, comprehensive statistics
- **Gamification Models**: Points, streaks, badges, achievements, certificates
- **Persistence Models**: Storage structure, backups, import/export
- **UI Models**: Dashboard data, content browsing, exam sessions
- **Validation Models**: Schema rules and constraints
- **Utility Types**: Helper types, constants, indexes

All models are designed to be:
- **Type-safe** with full TypeScript definitions
- **Extensible** for future enhancements
- **Performant** with appropriate indexing
- **Maintainable** with clear structure and documentation

These models serve as the single source of truth for data structure across the entire application.
