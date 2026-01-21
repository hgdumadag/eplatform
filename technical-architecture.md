# Technical Architecture Document

## Overview

This document defines the technical architecture, system design, component structure, and implementation details for the educational platform. It serves as the authoritative guide for developers building the system and ensures all components work together cohesively.

---

## 1. Architecture Overview

### 1.1 System Architecture

The platform follows a **client-side Progressive Web App (PWA)** architecture with offline-first capabilities.

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Environment                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              React Application Layer                    │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │   UI     │  │  State   │  │ Business │            │ │
│  │  │Components│  │Management│  │  Logic   │            │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↕                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Service Layer                              │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │ Content  │  │ Progress │  │   Auth   │            │ │
│  │  │ Service  │  │ Service  │  │ Service  │            │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↕                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Data Layer                                 │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │ │
│  │  │IndexedDB │  │LocalStore│  │  File    │            │ │
│  │  │          │  │          │  │  System  │            │ │
│  │  └──────────┘  └──────────┘  └──────────┘            │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↕                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         Service Worker (PWA/Offline Cache)             │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Core Architectural Principles

1. **Offline-First**: All functionality available without internet connection
2. **Client-Side Only**: No backend server dependency
3. **Progressive Enhancement**: Works on basic browsers, enhanced on modern browsers
4. **Component-Based**: Modular, reusable UI components
5. **Separation of Concerns**: Clear boundaries between UI, business logic, and data
6. **Type Safety**: TypeScript for compile-time error detection
7. **Performance**: Optimized loading, rendering, and data access
8. **Accessibility**: WCAG AA compliance throughout

### 1.3 Technology Stack

#### Core Framework
- **React 18+**: Component-based UI library
- **TypeScript 5+**: Type-safe JavaScript
- **React Router v6**: Client-side routing
- **Vite**: Build tool and dev server

#### State Management
- **React Context API**: Global state (auth, theme, child selection)
- **React Query / TanStack Query**: Async state and caching
- **Zustand** (optional): Lightweight state management alternative

#### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Dynamic theming
- **clsx / classnames**: Conditional class management

#### Data Storage
- **IndexedDB**: Primary data storage (via Dexie.js)
- **LocalStorage**: Settings and lightweight data
- **File System API** (future): Direct file access on supported browsers

#### Content Rendering
- **react-markdown**: Markdown parsing and rendering
- **KaTeX**: LaTeX formula rendering
- **Prism.js** / **rehype-highlight**: Code syntax highlighting

#### PWA & Offline
- **Workbox**: Service worker tooling
- **Web App Manifest**: PWA configuration
- **Cache API**: Asset caching

#### Utilities
- **date-fns**: Date manipulation
- **zod**: Runtime validation
- **immer**: Immutable state updates
- **lodash-es**: Utility functions (tree-shakeable)

#### Development
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Vitest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright** (optional): E2E testing

---

## 2. Application Architecture

### 2.1 Directory Structure

```
/src
├── /assets                 # Static assets
│   ├── /icons             # Icon files
│   ├── /images            # Images
│   └── /fonts             # Custom fonts (if any)
│
├── /components            # Reusable UI components
│   ├── /common            # Shared components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── /layout            # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── AppShell.tsx
│   ├── /lesson            # Lesson-specific components
│   │   ├── LessonViewer.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   ├── LatexRenderer.tsx
│   │   ├── CodeBlock.tsx
│   │   └── ImageLightbox.tsx
│   ├── /exam              # Exam components
│   │   ├── ExamInterface.tsx
│   │   ├── QuestionRenderer.tsx
│   │   ├── MultipleChoice.tsx
│   │   ├── TrueFalse.tsx
│   │   ├── FillBlank.tsx
│   │   ├── ShortAnswer.tsx
│   │   ├── CodingQuestion.tsx
│   │   └── ExamReview.tsx
│   ├── /dashboard         # Dashboard components
│   │   ├── ChildDashboard.tsx
│   │   ├── ParentDashboard.tsx
│   │   ├── ProgressCard.tsx
│   │   ├── SubjectCard.tsx
│   │   └── StatsCard.tsx
│   ├── /gamification      # Gamification components
│   │   ├── BadgeDisplay.tsx
│   │   ├── StreakCounter.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── AchievementNotification.tsx
│   └── /auth              # Authentication components
│       ├── LoginForm.tsx
│       ├── ChildSelector.tsx
│       └── PasswordPrompt.tsx
│
├── /pages                 # Page-level components (routes)
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── ChildSelectionPage.tsx
│   ├── DashboardPage.tsx
│   ├── SubjectBrowserPage.tsx
│   ├── LessonPage.tsx
│   ├── ExamPage.tsx
│   ├── ProgressPage.tsx
│   ├── AchievementsPage.tsx
│   ├── ParentDashboardPage.tsx
│   ├── ChildManagementPage.tsx
│   └── NotFoundPage.tsx
│
├── /services              # Business logic and API services
│   ├── contentService.ts  # Content loading and management
│   ├── progressService.ts # Progress tracking
│   ├── authService.ts     # Authentication
│   ├── examService.ts     # Exam logic
│   ├── gamificationService.ts # Points, badges, achievements
│   ├── exportService.ts   # Data export/import
│   └── validationService.ts # Content validation
│
├── /hooks                 # Custom React hooks
│   ├── useAuth.ts
│   ├── useChild.ts
│   ├── useContent.ts
│   ├── useProgress.ts
│   ├── useExam.ts
│   ├── useTheme.ts
│   ├── useLocalStorage.ts
│   └── useOfflineStatus.ts
│
├── /context               # React Context providers
│   ├── AuthContext.tsx
│   ├── ChildContext.tsx
│   ├── ThemeContext.tsx
│   └── AppContext.tsx
│
├── /store                 # State management (if using Zustand)
│   ├── authStore.ts
│   ├── childStore.ts
│   ├── contentStore.ts
│   └── progressStore.ts
│
├── /lib                   # Utilities and helpers
│   ├── /db                # Database layer
│   │   ├── database.ts    # Dexie.js setup
│   │   ├── migrations.ts  # DB migrations
│   │   └── queries.ts     # Common queries
│   ├── /utils             # Utility functions
│   │   ├── dateUtils.ts
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── calculators.ts
│   │   └── helpers.ts
│   ├── /constants         # App constants
│   │   ├── subjects.ts
│   │   ├── grades.ts
│   │   ├── routes.ts
│   │   └── config.ts
│   └── /types             # TypeScript type definitions
│       ├── models.ts      # Data models
│       ├── api.ts         # API types
│       ├── components.ts  # Component prop types
│       └── index.ts       # Type exports
│
├── /styles                # Global styles
│   ├── globals.css        # Global CSS
│   ├── tailwind.css       # Tailwind imports
│   └── themes.css         # Theme variables
│
├── /config                # Configuration files
│   ├── routes.tsx         # Route configuration
│   ├── subjects.ts        # Subject configuration
│   └── content.ts         # Content path configuration
│
├── App.tsx                # Root application component
├── main.tsx               # Application entry point
├── vite-env.d.ts          # Vite type definitions
└── service-worker.ts      # Service worker for PWA

/public
├── /content               # Lesson content (served statically)
│   ├── /grade-1
│   │   ├── /math
│   │   ├── /science
│   │   ├── /english
│   │   ├── /music
│   │   └── /coding
│   ├── /grade-2
│   └── ...
├── manifest.json          # PWA manifest
├── robots.txt
└── favicon.ico

/scripts                   # Build and utility scripts
├── generateContentIndex.ts
├── validateContent.ts
└── buildPWA.ts
```

### 2.2 Component Architecture

#### Component Hierarchy

```
App
├── Router
│   ├── PublicRoutes
│   │   └── LoginPage
│   └── ProtectedRoutes
│       ├── ChildSelectionPage
│       └── AppShell (Authenticated Layout)
│           ├── Header
│           │   ├── Breadcrumbs
│           │   ├── ChildAvatar
│           │   ├── ThemeToggle
│           │   └── SettingsMenu
│           ├── Sidebar
│           │   ├── NavMenu
│           │   └── SubjectList
│           └── MainContent (Route Outlet)
│               ├── DashboardPage
│               ├── SubjectBrowserPage
│               ├── LessonPage
│               ├── ExamPage
│               ├── ProgressPage
│               ├── AchievementsPage
│               └── ParentDashboardPage
```

#### Component Design Patterns

1. **Container/Presentational Pattern**
   - Container components: Handle logic and state
   - Presentational components: Receive props, render UI

2. **Compound Components**
   - Components that work together (e.g., Modal, Card)
   - Shared context between related components

3. **Render Props / Higher-Order Components**
   - Code reuse across components
   - Minimal use; prefer hooks

4. **Custom Hooks**
   - Extract reusable stateful logic
   - Composable, testable

---

## 3. Data Layer

### 3.1 Database Schema (IndexedDB via Dexie.js)

```typescript
// Database definition
import Dexie, { Table } from 'dexie';

export class AppDatabase extends Dexie {
  // Tables
  children!: Table<Child>;
  lessonProgress!: Table<LessonProgress>;
  examAttempts!: Table<ExamAttempt>;
  gamificationData!: Table<GamificationData>;
  settings!: Table<AppSettings>;

  constructor() {
    super('EducationalPlatformDB');
    
    this.version(1).stores({
      children: 'id, name, grade',
      lessonProgress: 'id, childId, topicId, [childId+topicId], status',
      examAttempts: 'id, childId, topicId, examType, [childId+topicId+examType], submittedAt',
      gamificationData: 'childId, totalPoints, currentStreak',
      settings: 'key'
    });
  }
}

export const db = new AppDatabase();
```

#### Indexes Strategy

**Primary Indexes:**
- `children`: `id` (primary key)
- `lessonProgress`: `id` (UUID), `childId`, `topicId`, `[childId+topicId]` (compound)
- `examAttempts`: `id` (UUID), `childId`, `topicId`, `examType`
- `gamificationData`: `childId` (primary key)

**Compound Indexes:**
- `lessonProgress`: `[childId+topicId]` for quick lookups
- `examAttempts`: `[childId+topicId+examType]` for filtering

**Query Patterns:**
```typescript
// Get all progress for a child
db.lessonProgress.where('childId').equals(childId).toArray()

// Get progress for specific topic and child
db.lessonProgress.where('[childId+topicId]').equals([childId, topicId]).first()

// Get all exam attempts for a child
db.examAttempts.where('childId').equals(childId).sortBy('submittedAt')

// Get latest attempt for specific exam
db.examAttempts
  .where('[childId+topicId+examType]')
  .equals([childId, topicId, 'assessment'])
  .reverse()
  .first()
```

### 3.2 Local Storage Usage

**Use Cases:**
- Theme preference (light/dark)
- Last selected child ID
- Master password hash
- Session token
- UI preferences (sidebar collapsed state)

**Storage Keys Convention:**
```typescript
const STORAGE_KEYS = {
  THEME: 'app_theme',
  SELECTED_CHILD: 'app_selected_child',
  MASTER_PASSWORD_HASH: 'app_master_password',
  SESSION_TOKEN: 'app_session_token',
  SIDEBAR_COLLAPSED: 'app_sidebar_collapsed',
  LAST_LOGIN: 'app_last_login'
} as const;
```

### 3.3 Content File System

**Content Location:**
- Static files in `/public/content/`
- Accessed via `fetch()` API
- Cached by service worker

**Content Loading Strategy:**
```typescript
// ContentService.ts
async function loadTopicMetadata(topicPath: string): Promise<TopicMetadata> {
  const response = await fetch(`/content/${topicPath}/metadata.json`);
  if (!response.ok) throw new Error('Failed to load metadata');
  return response.json();
}

async function loadLessonContent(topicPath: string): Promise<string> {
  const response = await fetch(`/content/${topicPath}/content.md`);
  if (!response.ok) throw new Error('Failed to load content');
  return response.text();
}

async function loadExam(topicPath: string, examType: 'practice' | 'assessment'): Promise<Exam> {
  const filename = examType === 'practice' ? 'practice.json' : 'assessment.json';
  const response = await fetch(`/content/${topicPath}/${filename}`);
  if (!response.ok) throw new Error('Failed to load exam');
  return response.json();
}
```

**Content Caching:**
- Service worker caches all content files
- Cache-first strategy for content
- Network-first for metadata (with cache fallback)

---

## 4. Service Layer

### 4.1 Content Service

**Responsibilities:**
- Load and parse content files
- Validate content structure
- Generate content indexes
- Handle images and media

```typescript
// services/contentService.ts

class ContentService {
  private contentIndex: Map<string, TopicMetadata> = new Map();
  
  /**
   * Initialize content index
   * Scans all content directories and builds index
   */
  async initialize(): Promise<void> {
    // Load pre-generated content index
    const response = await fetch('/content/index.json');
    const index = await response.json();
    
    index.forEach((metadata: TopicMetadata) => {
      this.contentIndex.set(metadata.id, metadata);
    });
  }
  
  /**
   * Get all topics for a grade and subject
   */
  getTopicsBySubject(grade: number, subject: Subject): TopicMetadata[] {
    return Array.from(this.contentIndex.values())
      .filter(topic => topic.grade === grade && topic.subject === subject);
  }
  
  /**
   * Get single topic metadata
   */
  getTopicMetadata(topicId: string): TopicMetadata | null {
    return this.contentIndex.get(topicId) || null;
  }
  
  /**
   * Load lesson content
   */
  async loadLesson(topicId: string): Promise<LessonContent> {
    const metadata = this.getTopicMetadata(topicId);
    if (!metadata) throw new Error('Topic not found');
    
    const contentPath = this.getContentPath(metadata);
    const markdownText = await this.fetchContent(`${contentPath}/content.md`);
    
    return {
      topicId,
      rawMarkdown: markdownText,
      sections: this.parseMarkdownSections(markdownText)
    };
  }
  
  /**
   * Load exam
   */
  async loadExam(topicId: string, examType: 'practice' | 'assessment'): Promise<Exam> {
    const metadata = this.getTopicMetadata(topicId);
    if (!metadata) throw new Error('Topic not found');
    
    const contentPath = this.getContentPath(metadata);
    const filename = examType === 'practice' ? 'practice.json' : 'assessment.json';
    
    const exam = await this.fetchContent(`${contentPath}/${filename}`);
    return this.validateExam(exam);
  }
  
  /**
   * Validate content structure
   */
  validateContent(content: any): ValidationResult {
    // Use Zod schemas for validation
    // Return validation errors if any
  }
  
  private getContentPath(metadata: TopicMetadata): string {
    return `/content/grade-${metadata.grade}/${metadata.subject}/quarter-${metadata.quarter}/${metadata.id}`;
  }
  
  private async fetchContent(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
    
    if (url.endsWith('.json')) {
      return response.json();
    }
    return response.text();
  }
  
  private parseMarkdownSections(markdown: string): LessonSection[] {
    // Parse markdown into sections
    // Return structured sections
  }
}

export const contentService = new ContentService();
```

### 4.2 Progress Service

**Responsibilities:**
- Track lesson progress
- Record exam attempts
- Calculate statistics
- Manage completion status

```typescript
// services/progressService.ts

class ProgressService {
  /**
   * Get or create lesson progress
   */
  async getLessonProgress(childId: string, topicId: string): Promise<LessonProgress> {
    const existing = await db.lessonProgress
      .where('[childId+topicId]')
      .equals([childId, topicId])
      .first();
    
    if (existing) return existing;
    
    // Create new progress entry
    const newProgress: LessonProgress = {
      childId,
      topicId,
      status: 'not-started',
      timeSpent: 0
    };
    
    await db.lessonProgress.add(newProgress);
    return newProgress;
  }
  
  /**
   * Update lesson progress
   */
  async updateLessonProgress(
    childId: string, 
    topicId: string, 
    updates: Partial<LessonProgress>
  ): Promise<void> {
    await db.lessonProgress
      .where('[childId+topicId]')
      .equals([childId, topicId])
      .modify(updates);
  }
  
  /**
   * Mark lesson as started
   */
  async startLesson(childId: string, topicId: string): Promise<void> {
    await this.updateLessonProgress(childId, topicId, {
      status: 'in-progress',
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString()
    });
  }
  
  /**
   * Mark lesson as completed
   */
  async completeLesson(childId: string, topicId: string): Promise<void> {
    await this.updateLessonProgress(childId, topicId, {
      status: 'completed',
      completedAt: new Date().toISOString()
    });
    
    // Award points
    await gamificationService.awardPoints(childId, 'lesson', topicId, 10);
  }
  
  /**
   * Track time spent
   */
  async addTimeSpent(childId: string, topicId: string, minutes: number): Promise<void> {
    const progress = await this.getLessonProgress(childId, topicId);
    
    await this.updateLessonProgress(childId, topicId, {
      timeSpent: progress.timeSpent + minutes,
      lastAccessedAt: new Date().toISOString()
    });
  }
  
  /**
   * Submit exam attempt
   */
  async submitExam(attempt: ExamAttempt): Promise<ExamAttempt> {
    // Calculate score
    const scored = this.calculateExamScore(attempt);
    
    // Save to database
    const id = await db.examAttempts.add(scored);
    
    // Award points based on score
    const points = Math.round(scored.score! / 10);
    await gamificationService.awardPoints(
      attempt.childId, 
      attempt.examType === 'practice' ? 'practice-exam' : 'assessment-exam',
      attempt.topicId,
      points
    );
    
    // Check for badges
    await gamificationService.checkBadges(attempt.childId);
    
    return { ...scored, id: id as string };
  }
  
  /**
   * Calculate exam score
   */
  private calculateExamScore(attempt: ExamAttempt): ExamAttempt {
    let pointsEarned = 0;
    let totalPoints = attempt.pointsPossible;
    
    attempt.answers.forEach(answer => {
      pointsEarned += answer.pointsEarned;
    });
    
    const score = (pointsEarned / totalPoints) * 100;
    
    return {
      ...attempt,
      pointsEarned,
      score,
      passed: score >= 70 // Default passing score
    };
  }
  
  /**
   * Get progress summary
   */
  async getProgressSummary(
    childId: string, 
    grade: number, 
    subject: Subject
  ): Promise<ProgressSummary> {
    // Get all topics for subject
    const topics = contentService.getTopicsBySubject(grade, subject);
    
    // Get progress for all topics
    const progressRecords = await db.lessonProgress
      .where('childId')
      .equals(childId)
      .toArray();
    
    // Calculate statistics
    const completed = progressRecords.filter(p => p.status === 'completed').length;
    const inProgress = progressRecords.filter(p => p.status === 'in-progress').length;
    const notStarted = topics.length - completed - inProgress;
    
    return {
      childId,
      grade,
      subject,
      totalTopics: topics.length,
      completedTopics: completed,
      inProgressTopics: inProgress,
      notStartedTopics: notStarted,
      completionPercentage: (completed / topics.length) * 100,
      totalTimeSpent: progressRecords.reduce((sum, p) => sum + p.timeSpent, 0)
    };
  }
}

export const progressService = new ProgressService();
```

### 4.3 Authentication Service

**Responsibilities:**
- Parent login/logout
- Session management
- Password validation
- Master password verification

```typescript
// services/authService.ts

class AuthService {
  private readonly SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days
  
  /**
   * Parent login
   */
  async login(username: string, password: string): Promise<ParentUser> {
    // Get stored credentials
    const storedHash = localStorage.getItem(STORAGE_KEYS.MASTER_PASSWORD_HASH);
    
    // Hash provided password
    const providedHash = await this.hashPassword(password);
    
    if (storedHash !== providedHash) {
      throw new Error('Invalid credentials');
    }
    
    // Create session
    const sessionToken = this.generateSessionToken();
    const expiresAt = Date.now() + this.SESSION_DURATION;
    
    localStorage.setItem(STORAGE_KEYS.SESSION_TOKEN, sessionToken);
    localStorage.setItem(STORAGE_KEYS.LAST_LOGIN, new Date().toISOString());
    
    return {
      id: 'parent-1', // Single parent
      username,
      passwordHash: storedHash,
      lastLogin: new Date().toISOString()
    };
  }
  
  /**
   * Logout
   */
  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.SESSION_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.SELECTED_CHILD);
  }
  
  /**
   * Check if session is valid
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem(STORAGE_KEYS.SESSION_TOKEN);
    return !!token;
  }
  
  /**
   * Verify master password
   */
  async verifyMasterPassword(password: string): Promise<boolean> {
    const storedHash = localStorage.getItem(STORAGE_KEYS.MASTER_PASSWORD_HASH);
    const providedHash = await this.hashPassword(password);
    return storedHash === providedHash;
  }
  
  /**
   * Hash password
   */
  private async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  /**
   * Generate session token
   */
  private generateSessionToken(): string {
    return crypto.randomUUID();
  }
}

export const authService = new AuthService();
```

### 4.4 Gamification Service

**Responsibilities:**
- Award points
- Track streaks
- Manage badges
- Generate certificates
- Calculate leaderboard

```typescript
// services/gamificationService.ts

class GamificationService {
  /**
   * Award points
   */
  async awardPoints(
    childId: string, 
    source: 'lesson' | 'practice-exam' | 'assessment-exam',
    sourceId: string,
    amount: number
  ): Promise<void> {
    const gamification = await this.getGamificationData(childId);
    
    const transaction: PointsTransaction = {
      id: crypto.randomUUID(),
      amount,
      reason: this.getPointsReason(source, sourceId),
      source,
      sourceId,
      timestamp: new Date().toISOString()
    };
    
    await db.gamificationData.update(childId, {
      totalPoints: gamification.totalPoints + amount,
      pointsHistory: [...gamification.pointsHistory, transaction]
    });
  }
  
  /**
   * Update streak
   */
  async updateStreak(childId: string): Promise<void> {
    const gamification = await this.getGamificationData(childId);
    const today = new Date().toISOString().split('T')[0];
    const lastActivity = gamification.lastActivityDate;
    
    if (lastActivity === today) {
      // Already updated today
      return;
    }
    
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    
    let newStreak: number;
    
    if (lastActivity === yesterday) {
      // Continue streak
      newStreak = gamification.currentStreak + 1;
    } else {
      // Streak broken, start new
      newStreak = 1;
    }
    
    const longestStreak = Math.max(gamification.longestStreak, newStreak);
    
    await db.gamificationData.update(childId, {
      currentStreak: newStreak,
      longestStreak,
      lastActivityDate: today
    });
    
    // Check for streak badges
    await this.checkStreakBadges(childId, newStreak);
  }
  
  /**
   * Check and award badges
   */
  async checkBadges(childId: string): Promise<void> {
    // Check lesson completion badges
    await this.checkLessonBadges(childId);
    
    // Check exam performance badges
    await this.checkExamBadges(childId);
    
    // Check subject mastery badges
    await this.checkSubjectBadges(childId);
  }
  
  /**
   * Award badge
   */
  private async awardBadge(childId: string, badge: Badge): Promise<void> {
    const gamification = await this.getGamificationData(childId);
    
    // Check if already earned
    const alreadyEarned = gamification.badges.some(b => b.id === badge.id);
    if (alreadyEarned) return;
    
    await db.gamificationData.update(childId, {
      badges: [...gamification.badges, badge]
    });
    
    // Show notification
    this.showBadgeNotification(badge);
  }
  
  /**
   * Generate leaderboard
   */
  async generateLeaderboard(period: 'weekly' | 'monthly' | 'all-time'): Promise<Leaderboard> {
    const children = await db.children.toArray();
    const entries: LeaderboardEntry[] = [];
    
    for (const child of children) {
      const gamification = await this.getGamificationData(child.id);
      const progress = await db.lessonProgress.where('childId').equals(child.id).toArray();
      const exams = await db.examAttempts.where('childId').equals(child.id).toArray();
      
      // Filter by period
      const filteredTransactions = this.filterByPeriod(gamification.pointsHistory, period);
      const points = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
      
      entries.push({
        rank: 0, // Will be calculated after sorting
        childId: child.id,
        childName: child.name,
        avatar: child.avatar,
        points,
        lessonsCompleted: progress.filter(p => p.status === 'completed').length,
        examsPassed: exams.filter(e => e.passed).length
      });
    }
    
    // Sort by points
    entries.sort((a, b) => b.points - a.points);
    
    // Assign ranks
    entries.forEach((entry, index) => {
      entry.rank = index + 1;
    });
    
    return {
      period,
      entries,
      generatedAt: new Date().toISOString()
    };
  }
  
  private async getGamificationData(childId: string): Promise<GamificationData> {
    let data = await db.gamificationData.get(childId);
    
    if (!data) {
      // Initialize new gamification data
      data = {
        childId,
        totalPoints: 0,
        pointsHistory: [],
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: new Date().toISOString().split('T')[0],
        streakHistory: [],
        achievements: [],
        badges: [],
        certificates: []
      };
      
      await db.gamificationData.add(data);
    }
    
    return data;
  }
}

export const gamificationService = new GamificationService();
```

### 4.5 Export/Import Service

**Responsibilities:**
- Export progress data
- Import progress data
- Create backups
- Validate imported data

```typescript
// services/exportService.ts

class ExportService {
  /**
   * Export all data to JSON
   */
  async exportData(options?: ExportOptions): Promise<string> {
    const children = await db.children.toArray();
    const filteredChildren = options?.includeChildren?.length 
      ? children.filter(c => options.includeChildren!.includes(c.id))
      : children;
    
    const data: ProgressData = {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      parent: await this.getParentData(),
      settings: await this.getSettings(),
      children: []
    };
    
    for (const child of filteredChildren) {
      const childData = await this.exportChildData(child.id, options);
      data.children.push(childData);
    }
    
    return JSON.stringify(data, null, 2);
  }
  
  /**
   * Import data from JSON
   */
  async importData(jsonData: string, options?: ImportOptions): Promise<ImportResult> {
    const data: ProgressData = JSON.parse(jsonData);
    
    // Validate schema
    if (options?.validateSchema) {
      const validation = this.validateImportData(data);
      if (!validation.valid) {
        throw new Error('Invalid data format');
      }
    }
    
    // Create backup before import
    if (options?.backupBeforeImport) {
      const backup = await this.exportData();
      // Save backup to downloads
      this.downloadFile(backup, `backup-${Date.now()}.json`);
    }
    
    const result: ImportResult = {
      success: true,
      summary: {
        childrenImported: 0,
        lessonsImported: 0,
        examsImported: 0,
        achievementsImported: 0
      },
      warnings: [],
      errors: []
    };
    
    // Import data based on strategy
    for (const childData of data.children) {
      try {
        await this.importChildData(childData, options);
        result.summary.childrenImported++;
      } catch (error) {
        result.errors.push({
          code: 'IMPORT_ERROR',
          message: `Failed to import child: ${childData.profile.name}`,
          details: error
        });
      }
    }
    
    return result;
  }
  
  /**
   * Download file
   */
  private downloadFile(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  
  /**
   * Export child data
   */
  private async exportChildData(childId: string, options?: ExportOptions): Promise<ChildData> {
    const profile = await db.children.get(childId);
    const lessonProgress = await db.lessonProgress.where('childId').equals(childId).toArray();
    const examAttempts = await db.examAttempts.where('childId').equals(childId).toArray();
    const gamification = await db.gamificationData.get(childId);
    
    return {
      profile: profile!,
      lessonProgress,
      examAttempts: options?.includeExamAnswers ? examAttempts : this.stripAnswers(examAttempts),
      gamification: gamification!,
      progressSummaries: [] // Can calculate on import
    };
  }
}

export const exportService = new ExportService();
```

---

## 5. State Management

### 5.1 Context Architecture

```typescript
// context/AuthContext.tsx

interface AuthContextValue {
  isAuthenticated: boolean;
  user: ParentUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  verifyMasterPassword: (password: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<ParentUser | null>(null);
  
  useEffect(() => {
    // Check session on mount
    const authenticated = authService.isAuthenticated();
    setIsAuthenticated(authenticated);
  }, []);
  
  const login = async (username: string, password: string) => {
    const user = await authService.login(username, password);
    setUser(user);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };
  
  const verifyMasterPassword = async (password: string) => {
    return authService.verifyMasterPassword(password);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, verifyMasterPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

```typescript
// context/ChildContext.tsx

interface ChildContextValue {
  selectedChild: Child | null;
  children: Child[];
  selectChild: (childId: string) => Promise<void>;
  addChild: (child: Omit<Child, 'id'>) => Promise<void>;
  updateChild: (childId: string, updates: Partial<Child>) => Promise<void>;
  deleteChild: (childId: string) => Promise<void>;
}

export const ChildContext = createContext<ChildContextValue | null>(null);

export function ChildProvider({ children }: { children: ReactNode }) {
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);
  const [childrenList, setChildrenList] = useState<Child[]>([]);
  
  useEffect(() => {
    loadChildren();
  }, []);
  
  const loadChildren = async () => {
    const children = await db.children.toArray();
    setChildrenList(children);
    
    // Auto-select if only one child
    if (children.length === 1) {
      setSelectedChild(children[0]);
    } else {
      // Load last selected
      const lastSelected = localStorage.getItem(STORAGE_KEYS.SELECTED_CHILD);
      if (lastSelected) {
        const child = children.find(c => c.id === lastSelected);
        if (child) setSelectedChild(child);
      }
    }
  };
  
  const selectChild = async (childId: string) => {
    const child = await db.children.get(childId);
    if (child) {
      setSelectedChild(child);
      localStorage.setItem(STORAGE_KEYS.SELECTED_CHILD, childId);
    }
  };
  
  const addChild = async (childData: Omit<Child, 'id'>) => {
    const id = crypto.randomUUID();
    const child: Child = {
      ...childData,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await db.children.add(child);
    await loadChildren();
  };
  
  const updateChild = async (childId: string, updates: Partial<Child>) => {
    await db.children.update(childId, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    
    await loadChildren();
    
    // Update selected child if it was updated
    if (selectedChild?.id === childId) {
      const updated = await db.children.get(childId);
      setSelectedChild(updated || null);
    }
  };
  
  const deleteChild = async (childId: string) => {
    await db.children.delete(childId);
    
    // Delete all associated data
    await db.lessonProgress.where('childId').equals(childId).delete();
    await db.examAttempts.where('childId').equals(childId).delete();
    await db.gamificationData.delete(childId);
    
    await loadChildren();
    
    // Clear selection if deleted child was selected
    if (selectedChild?.id === childId) {
      setSelectedChild(null);
    }
  };
  
  return (
    <ChildContext.Provider value={{
      selectedChild,
      children: childrenList,
      selectChild,
      addChild,
      updateChild,
      deleteChild
    }}>
      {children}
    </ChildContext.Provider>
  );
}
```

### 5.2 Custom Hooks

```typescript
// hooks/useContent.ts

export function useContent() {
  const [contentIndex, setContentIndex] = useState<Map<string, TopicMetadata>>(new Map());
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function init() {
      await contentService.initialize();
      setContentIndex(contentService.contentIndex);
      setLoading(false);
    }
    init();
  }, []);
  
  const getTopicsBySubject = (grade: number, subject: Subject) => {
    return contentService.getTopicsBySubject(grade, subject);
  };
  
  const loadLesson = async (topicId: string) => {
    return contentService.loadLesson(topicId);
  };
  
  const loadExam = async (topicId: string, examType: 'practice' | 'assessment') => {
    return contentService.loadExam(topicId, examType);
  };
  
  return {
    contentIndex,
    loading,
    getTopicsBySubject,
    loadLesson,
    loadExam
  };
}
```

```typescript
// hooks/useProgress.ts

export function useProgress(childId: string, topicId: string) {
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadProgress();
  }, [childId, topicId]);
  
  const loadProgress = async () => {
    const p = await progressService.getLessonProgress(childId, topicId);
    setProgress(p);
    setLoading(false);
  };
  
  const startLesson = async () => {
    await progressService.startLesson(childId, topicId);
    await loadProgress();
  };
  
  const completeLesson = async () => {
    await progressService.completeLesson(childId, topicId);
    await loadProgress();
  };
  
  const addTime = async (minutes: number) => {
    await progressService.addTimeSpent(childId, topicId, minutes);
    await loadProgress();
  };
  
  return {
    progress,
    loading,
    startLesson,
    completeLesson,
    addTime
  };
}
```

```typescript
// hooks/useExam.ts

export function useExam(topicId: string, examType: 'practice' | 'assessment') {
  const { selectedChild } = useChild();
  const [exam, setExam] = useState<Exam | null>(null);
  const [session, setSession] = useState<ExamSession | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadExam();
  }, [topicId, examType]);
  
  const loadExam = async () => {
    const examData = await contentService.loadExam(topicId, examType);
    setExam(examData);
    
    // Initialize session
    const newSession: ExamSession = {
      sessionId: crypto.randomUUID(),
      childId: selectedChild!.id,
      exam: examData,
      attemptNumber: await getNextAttemptNumber(),
      startTime: new Date().toISOString(),
      currentQuestionIndex: 0,
      answers: new Map(),
      flaggedQuestions: new Set(),
      status: 'active',
      autoSaveInterval: 30000, // 30 seconds
      lastAutoSave: new Date().toISOString()
    };
    
    setSession(newSession);
    setLoading(false);
  };
  
  const answerQuestion = (questionId: string, answer: ExamAnswer) => {
    if (!session) return;
    
    const newAnswers = new Map(session.answers);
    newAnswers.set(questionId, answer);
    
    setSession({
      ...session,
      answers: newAnswers
    });
  };
  
  const submitExam = async () => {
    if (!session) return;
    
    const attempt: ExamAttempt = {
      id: crypto.randomUUID(),
      childId: session.childId,
      topicId,
      examType,
      attemptNumber: session.attemptNumber,
      status: 'submitted',
      startedAt: session.startTime,
      submittedAt: new Date().toISOString(),
      timeSpent: calculateTimeSpent(session.startTime),
      pointsPossible: calculateTotalPoints(exam!),
      answers: Array.from(session.answers.values())
    };
    
    const result = await progressService.submitExam(attempt);
    return result;
  };
  
  return {
    exam,
    session,
    loading,
    answerQuestion,
    submitExam
  };
}
```

---

## 6. Routing Architecture

### 6.1 Route Configuration

```typescript
// config/routes.tsx

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public routes
      {
        path: 'login',
        element: <LoginPage />
      },
      
      // Protected routes
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'child-selection',
            element: <ChildSelectionPage />
          },
          {
            path: '/',
            element: <AppShell />,
            children: [
              {
                index: true,
                element: <Navigate to="/dashboard" replace />
              },
              {
                path: 'dashboard',
                element: <DashboardPage />
              },
              {
                path: 'subjects/:subject',
                element: <SubjectBrowserPage />
              },
              {
                path: 'lesson/:topicId',
                element: <LessonPage />
              },
              {
                path: 'exam/:topicId/:examType',
                element: <ExamPage />
              },
              {
                path: 'progress',
                element: <ProgressPage />
              },
              {
                path: 'achievements',
                element: <AchievementsPage />
              },
              {
                path: 'parent',
                element: <ParentRoute />,
                children: [
                  {
                    index: true,
                    element: <ParentDashboardPage />
                  },
                  {
                    path: 'children',
                    element: <ChildManagementPage />
                  },
                  {
                    path: 'children/:childId',
                    element: <ChildDetailPage />
                  },
                  {
                    path: 'settings',
                    element: <SettingsPage />
                  }
                ]
              }
            ]
          }
        ]
      },
      
      // 404
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
```

### 6.2 Route Guards

```typescript
// components/ProtectedRoute.tsx

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <Outlet />;
}
```

```typescript
// components/ParentRoute.tsx

export function ParentRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  // In this app, any authenticated user is a parent
  // This could be extended for role-based access
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <Outlet />;
}
```

---

## 7. PWA & Offline Strategy

### 7.1 Service Worker Configuration

```typescript
// service-worker.ts

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache all build assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache content files (lessons, images, etc.)
registerRoute(
  ({ url }) => url.pathname.startsWith('/content/'),
  new CacheFirst({
    cacheName: 'content-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// Cache metadata with network-first strategy
registerRoute(
  ({ url }) => url.pathname.endsWith('metadata.json'),
  new NetworkFirst({
    cacheName: 'metadata-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
      }),
    ],
  })
);

// Stale-while-revalidate for app shell
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'app-shell',
  })
);
```

### 7.2 Offline Detection

```typescript
// hooks/useOfflineStatus.ts

export function useOfflineStatus() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  
  useEffect(() => {
    function handleOnline() {
      setIsOffline(false);
    }
    
    function handleOffline() {
      setIsOffline(true);
    }
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return { isOffline };
}
```

### 7.3 Background Sync

```typescript
// Background sync for exam submissions and progress updates

// In service worker
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  // Get pending progress updates from IndexedDB
  // Sync with any cloud backup (if implemented)
  // Mark as synced
}

// In app
if ('serviceWorker' in navigator && 'sync' in registration) {
  await registration.sync.register('sync-progress');
}
```

---

## 8. Performance Optimization

### 8.1 Code Splitting

```typescript
// Lazy load route components
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const ExamPage = lazy(() => import('./pages/ExamPage'));

// Lazy load heavy components
const ChartComponent = lazy(() => import('./components/Chart'));
const MarkdownEditor = lazy(() => import('./components/MarkdownEditor'));
```

### 8.2 Memoization

```typescript
// components/SubjectCard.tsx

export const SubjectCard = memo(function SubjectCard({ subject, progress }: Props) {
  const progressPercentage = useMemo(
    () => calculateProgress(progress),
    [progress]
  );
  
  return (
    <Card>
      <h3>{subject}</h3>
      <ProgressBar value={progressPercentage} />
    </Card>
  );
});
```

### 8.3 Virtual Scrolling

```typescript
// For long lists (e.g., exam questions, lesson lists)
import { useVirtualizer } from '@tanstack/react-virtual';

export function LessonList({ lessons }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: lessons.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
  });
  
  return (
    <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <LessonCard lesson={lessons[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 8.4 Debouncing & Throttling

```typescript
// hooks/useDebounce.ts

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage in search
export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearch) {
      performSearch(debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />;
}
```

---

## 9. Testing Strategy

### 9.1 Unit Tests

```typescript
// Example: Testing ContentService

describe('ContentService', () => {
  beforeEach(() => {
    // Setup
  });
  
  it('should load topic metadata', async () => {
    const metadata = await contentService.getTopicMetadata('grade-3-math-q1-fractions');
    
    expect(metadata).toBeDefined();
    expect(metadata?.grade).toBe(3);
    expect(metadata?.subject).toBe('math');
  });
  
  it('should load lesson content', async () => {
    const lesson = await contentService.loadLesson('grade-3-math-q1-fractions');
    
    expect(lesson.rawMarkdown).toBeDefined();
    expect(lesson.sections).toHaveLength(5); // 5 required sections
  });
  
  it('should filter topics by subject', () => {
    const topics = contentService.getTopicsBySubject(3, 'math');
    
    expect(topics.every(t => t.grade === 3 && t.subject === 'math')).toBe(true);
  });
});
```

### 9.2 Component Tests

```typescript
// Example: Testing LessonViewer component

import { render, screen } from '@testing-library/react';
import { LessonViewer } from './LessonViewer';

describe('LessonViewer', () => {
  const mockLesson = {
    topicId: 'test-topic',
    rawMarkdown: '# Test Lesson\n\nContent here',
    sections: []
  };
  
  it('should render lesson content', () => {
    render(<LessonViewer lesson={mockLesson} />);
    
    expect(screen.getByText('Test Lesson')).toBeInTheDocument();
  });
  
  it('should show LaTeX formulas', () => {
    const lessonWithFormula = {
      ...mockLesson,
      rawMarkdown: '# Test\n\n$x = y^2$'
    };
    
    render(<LessonViewer lesson={lessonWithFormula} />);
    
    // Check if KaTeX rendered
    expect(document.querySelector('.katex')).toBeInTheDocument();
  });
});
```

### 9.3 Integration Tests

```typescript
// Example: Testing exam flow

describe('Exam Flow', () => {
  it('should complete full exam workflow', async () => {
    const { user } = await setupTestEnvironment();
    
    // Start exam
    await user.click(screen.getByText('Start Practice Exam'));
    
    // Answer questions
    await user.click(screen.getByLabelText('Option A'));
    await user.click(screen.getByText('Next'));
    
    // Submit exam
    await user.click(screen.getByText('Submit'));
    
    // Verify score is shown
    expect(screen.getByText(/Your Score:/)).toBeInTheDocument();
  });
});
```

---

## 10. Build & Deployment

### 10.1 Build Configuration

```typescript
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Educational Platform',
        short_name: 'EduPlatform',
        description: 'Homeschool educational platform',
        theme_color: '#4A90E2',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,md}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      }
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown': ['react-markdown', 'remark-gfm'],
          'math': ['katex'],
          'db': ['dexie']
        }
      }
    }
  }
});
```

### 10.2 Content Index Generation

```typescript
// scripts/generateContentIndex.ts

import fs from 'fs/promises';
import path from 'path';

async function generateContentIndex() {
  const contentDir = path.join(process.cwd(), 'public/content');
  const index: TopicMetadata[] = [];
  
  // Scan all grade directories
  const grades = await fs.readdir(contentDir);
  
  for (const grade of grades) {
    if (!grade.startsWith('grade-')) continue;
    
    const subjects = await fs.readdir(path.join(contentDir, grade));
    
    for (const subject of subjects) {
      const quarters = await fs.readdir(path.join(contentDir, grade, subject));
      
      for (const quarter of quarters) {
        if (!quarter.startsWith('quarter-')) continue;
        
        const topics = await fs.readdir(path.join(contentDir, grade, subject, quarter));
        
        for (const topic of topics) {
          const metadataPath = path.join(contentDir, grade, subject, quarter, topic, 'metadata.json');
          
          try {
            const metadataContent = await fs.readFile(metadataPath, 'utf-8');
            const metadata = JSON.parse(metadataContent);
            index.push(metadata);
          } catch (error) {
            console.error(`Failed to load metadata for ${topic}:`, error);
          }
        }
      }
    }
  }
  
  // Write index file
  await fs.writeFile(
    path.join(contentDir, 'index.json'),
    JSON.stringify(index, null, 2)
  );
  
  console.log(`Generated content index with ${index.length} topics`);
}

generateContentIndex();
```

### 10.3 Deployment Checklist

- [ ] Build production bundle: `npm run build`
- [ ] Generate content index: `npm run generate-index`
- [ ] Validate all content: `npm run validate-content`
- [ ] Run tests: `npm run test`
- [ ] Check bundle size: `npm run analyze`
- [ ] Test PWA offline functionality
- [ ] Verify service worker registration
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Validate accessibility (Lighthouse audit)
- [ ] Deploy to static hosting (Netlify, Vercel, GitHub Pages)

---

## 11. Security Considerations

### 11.1 Data Security

1. **Password Hashing**
   - Use SHA-256 for password hashing
   - Store only hashed passwords
   - Never transmit passwords in plain text

2. **Local Storage Security**
   - Encrypt sensitive data before storing
   - Use secure random tokens
   - Clear sensitive data on logout

3. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  script-src 'self' 'unsafe-inline'; 
                  style-src 'self' 'unsafe-inline'; 
                  img-src 'self' data: https:; 
                  font-src 'self' data:;">
   ```

4. **XSS Prevention**
   - Sanitize all markdown content
   - Use React's built-in XSS protection
   - Validate all user inputs

### 11.2 Privacy

1. **No External Tracking**
   - No analytics or tracking scripts
   - No third-party cookies
   - All data stored locally

2. **Data Ownership**
   - Users own all data
   - Easy export/import
   - Complete data deletion

---

## 12. Monitoring & Debugging

### 12.1 Error Boundary

```typescript
// components/ErrorBoundary.tsx

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service if implemented
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error} 
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }
    
    return this.props.children;
  }
}
```

### 12.2 Logging

```typescript
// lib/logger.ts

class Logger {
  private enabled = import.meta.env.DEV;
  
  log(message: string, data?: any) {
    if (this.enabled) {
      console.log(`[LOG] ${message}`, data);
    }
  }
  
  error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error);
    // Send to error tracking in production
  }
  
  warn(message: string, data?: any) {
    if (this.enabled) {
      console.warn(`[WARN] ${message}`, data);
    }
  }
  
  debug(message: string, data?: any) {
    if (this.enabled) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }
}

export const logger = new Logger();
```

---

## 13. Future Enhancements

### 13.1 Planned Features

1. **Cloud Sync (Optional)**
   - Backend API for data synchronization
   - Multi-device support
   - Conflict resolution

2. **Advanced Analytics**
   - Learning patterns analysis
   - Personalized recommendations
   - Performance insights

3. **Content Creation Tools**
   - In-app content editor
   - Template system
   - Media upload

4. **Collaboration Features**
   - Multiple parent accounts
   - Teacher/tutor access
   - Shared progress reports

5. **Mobile Native Apps**
   - iOS app (React Native or native)
   - Android app (React Native or native)
   - Native features (notifications, widgets)

### 13.2 Scalability Considerations

1. **Performance at Scale**
   - IndexedDB limits (~50MB typical)
   - Virtual scrolling for large datasets
   - Pagination for long lists

2. **Content Management**
   - Lazy loading of content
   - Progressive content downloads
   - Content versioning

3. **Data Migration**
   - Versioned schemas
   - Migration scripts
   - Backward compatibility

---

## 14. Development Workflow

### 14.1 Development Environment Setup

```bash
# Clone repository
git clone <repository-url>
cd educational-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

### 14.2 Code Quality Tools

```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext ts,tsx",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "type-check": "tsc --noEmit",
    "generate-index": "tsx scripts/generateContentIndex.ts",
    "validate-content": "tsx scripts/validateContent.ts"
  }
}
```

### 14.3 Git Workflow

1. **Branch Strategy**
   - `main`: Production-ready code
   - `develop`: Integration branch
   - `feature/*`: Feature development
   - `bugfix/*`: Bug fixes
   - `release/*`: Release preparation

2. **Commit Convention**
   ```
   feat: Add new exam type
   fix: Correct score calculation
   docs: Update architecture document
   style: Format code
   refactor: Restructure service layer
   test: Add unit tests for progress service
   chore: Update dependencies
   ```

---

## 15. Conclusion

This technical architecture document provides a comprehensive blueprint for building the educational platform. Key architectural decisions include:

1. **Client-Side Architecture**: Fully functional without backend
2. **Offline-First**: Complete functionality without internet
3. **Component-Based**: Modular, reusable React components
4. **Type-Safe**: TypeScript for reliability
5. **Performance-Optimized**: Code splitting, lazy loading, memoization
6. **PWA**: Installable, app-like experience
7. **Accessible**: WCAG AA compliance
8. **Testable**: Comprehensive testing strategy

The architecture prioritizes:
- **Developer Experience**: Clear structure, good tooling
- **User Experience**: Fast, responsive, intuitive
- **Maintainability**: Well-organized, documented code
- **Scalability**: Room for growth and new features
- **Reliability**: Error handling, data integrity

By following this architecture, developers can build a robust, performant, and user-friendly educational platform that serves families effectively for years to come.

---

*This document should be used alongside the Project Overview, Content Structure, Feature Requirements, Data Models, and UI/UX Specifications for complete system understanding.*
