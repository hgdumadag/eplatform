import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressState, ExamAttempt, LessonProgress } from '../types';
import { normalizeLessonKey, tryTopicPrefixedVariant } from '../utils/lessonKey';

const PROGRESS_STORE_VERSION = 2;

function mergeLessonProgress(primary: LessonProgress, secondary: LessonProgress): LessonProgress {
  const mergedAttempts = [...(primary.examAttempts || []), ...(secondary.examAttempts || [])];
  const mergedScores = mergedAttempts
    .filter((attempt) => attempt.score !== undefined)
    .map((attempt) => attempt.score as number);

  const startedAt = [primary.startedAt, secondary.startedAt]
    .filter(Boolean)
    .sort()[0];
  const completedAt = [primary.completedAt, secondary.completedAt]
    .filter(Boolean)
    .sort()
    .pop();

  return {
    lessonId: primary.lessonId,
    completed: primary.completed || secondary.completed,
    startedAt,
    completedAt,
    timeSpent: (primary.timeSpent || 0) + (secondary.timeSpent || 0),
    examAttempts: mergedAttempts,
    bestScore: mergedScores.length > 0 ? Math.max(...mergedScores) : undefined,
  };
}

function normalizeChildLessons(lessons: Record<string, LessonProgress>): Record<string, LessonProgress> {
  const normalizedLessons: Record<string, LessonProgress> = {};

  for (const [rawLessonId, progress] of Object.entries(lessons || {})) {
    const canonicalLessonId = normalizeLessonKey(rawLessonId);
    const normalizedProgress: LessonProgress = {
      ...progress,
      lessonId: canonicalLessonId,
      examAttempts: Array.isArray(progress.examAttempts) ? progress.examAttempts : [],
      timeSpent: progress.timeSpent || 0,
    };

    if (!normalizedLessons[canonicalLessonId]) {
      normalizedLessons[canonicalLessonId] = normalizedProgress;
    } else {
      normalizedLessons[canonicalLessonId] = mergeLessonProgress(
        normalizedLessons[canonicalLessonId],
        normalizedProgress,
      );
    }
  }

  for (const lessonId of Object.keys(normalizedLessons)) {
    const prefixedVariant = tryTopicPrefixedVariant(lessonId);

    if (prefixedVariant && normalizedLessons[prefixedVariant]) {
      normalizedLessons[prefixedVariant] = mergeLessonProgress(
        normalizedLessons[prefixedVariant],
        normalizedLessons[lessonId],
      );
      delete normalizedLessons[lessonId];
    }
  }

  for (const [lessonId, progress] of Object.entries(normalizedLessons)) {
    progress.lessonId = lessonId;
    progress.examAttempts = progress.examAttempts.map((attempt) => ({
      ...attempt,
      lessonId,
    }));
  }

  return normalizedLessons;
}

function normalizePersistedState(state: unknown): Pick<ProgressState, 'activeChildId' | 'children'> {
  if (!state || typeof state !== 'object') {
    return { activeChildId: null, children: {} };
  }

  const typedState = state as Partial<ProgressState>;
  const rawChildren = typedState.children && typeof typedState.children === 'object'
    ? typedState.children
    : {};

  const children: ProgressState['children'] = {};

  for (const [childId, childProgress] of Object.entries(rawChildren)) {
    const lessons = childProgress?.lessons && typeof childProgress.lessons === 'object'
      ? childProgress.lessons
      : {};

    children[childId] = {
      lessons: normalizeChildLessons(lessons),
    };
  }

  return {
    activeChildId: typeof typedState.activeChildId === 'string' ? typedState.activeChildId : null,
    children,
  };
}

function resolveLessonIdForChild(
  lessons: Record<string, LessonProgress>,
  lessonId: string,
): string {
  const canonicalLessonId = normalizeLessonKey(lessonId);
  if (lessons[canonicalLessonId]) {
    return canonicalLessonId;
  }

  const prefixedVariant = tryTopicPrefixedVariant(canonicalLessonId);
  if (prefixedVariant && lessons[prefixedVariant]) {
    return prefixedVariant;
  }

  return canonicalLessonId;
}

/**
 * Progress tracking store using Zustand
 * Tracks progress per child, persists to localStorage automatically
 */
export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      activeChildId: null,
      children: {},

      setActiveChild: (childId: string) => {
        set({ activeChildId: childId });
        set((state) => {
          if (!state.children[childId]) {
            return {
              children: {
                ...state.children,
                [childId]: { lessons: {} },
              },
            };
          }
          return state;
        });
      },

      clearActiveChild: () => {
        set({ activeChildId: null });
      },

      markStarted: (lessonId: string) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const resolvedLessonId = resolveLessonIdForChild(childProgress?.lessons || {}, lessonId);
          const existing = childProgress?.lessons[resolvedLessonId];

          if (existing && existing.startedAt) {
            return state;
          }

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [resolvedLessonId]: {
                    lessonId: resolvedLessonId,
                    completed: false,
                    startedAt: new Date().toISOString(),
                    timeSpent: 0,
                    examAttempts: [],
                  },
                },
              },
            },
          };
        });
      },

      markComplete: (lessonId: string) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const resolvedLessonId = resolveLessonIdForChild(childProgress?.lessons || {}, lessonId);
          const existing = childProgress?.lessons[resolvedLessonId];
          const now = new Date().toISOString();

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [resolvedLessonId]: {
                    lessonId: resolvedLessonId,
                    completed: true,
                    startedAt: existing?.startedAt || now,
                    completedAt: now,
                    timeSpent: existing?.timeSpent || 0,
                    examAttempts: existing?.examAttempts || [],
                    bestScore: existing?.bestScore,
                  },
                },
              },
            },
          };
        });
      },

      getProgress: (lessonId: string) => {
        const { activeChildId, children } = get();
        if (!activeChildId) return undefined;

        const lessons = children[activeChildId]?.lessons || {};
        const resolvedLessonId = resolveLessonIdForChild(lessons, lessonId);
        return lessons[resolvedLessonId];
      },

      saveExamAttempt: (attempt: ExamAttempt) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const lessons = childProgress?.lessons || {};
          const resolvedLessonId = resolveLessonIdForChild(lessons, attempt.lessonId);
          const normalizedAttempt = {
            ...attempt,
            lessonId: resolvedLessonId,
          };

          const lessonProgress = lessons[resolvedLessonId] || {
            lessonId: resolvedLessonId,
            completed: false,
            timeSpent: 0,
            examAttempts: [],
          };

          const attempts = [...lessonProgress.examAttempts, normalizedAttempt];
          const scores = attempts
            .filter((savedAttempt) => savedAttempt.score !== undefined)
            .map((savedAttempt) => savedAttempt.score as number);
          const bestScore = scores.length > 0 ? Math.max(...scores) : undefined;

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...lessons,
                  [resolvedLessonId]: {
                    ...lessonProgress,
                    lessonId: resolvedLessonId,
                    examAttempts: attempts,
                    bestScore,
                  },
                },
              },
            },
          };
        });
      },

      getExamAttempts: (lessonId: string) => {
        const progress = get().getProgress(lessonId);
        return progress?.examAttempts || [];
      },

      releaseAssessmentResults: (childId: string, attemptId: string) => {
        set((state) => {
          const childProgress = state.children[childId];
          if (!childProgress) return state;

          const updatedLessons = { ...childProgress.lessons };

          Object.keys(updatedLessons).forEach((lessonId) => {
            const lesson = updatedLessons[lessonId];
            const attemptIndex = lesson.examAttempts.findIndex((attempt) => attempt.attemptId === attemptId);

            if (attemptIndex !== -1) {
              const updatedAttempts = [...lesson.examAttempts];
              updatedAttempts[attemptIndex] = {
                ...updatedAttempts[attemptIndex],
                released: true,
                releasedAt: new Date().toISOString(),
              };

              updatedLessons[lessonId] = {
                ...lesson,
                examAttempts: updatedAttempts,
              };
            }
          });

          return {
            children: {
              ...state.children,
              [childId]: {
                lessons: updatedLessons,
              },
            },
          };
        });
      },

      updateLessonTime: (lessonId: string, minutes: number) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const lessons = childProgress?.lessons || {};
          const resolvedLessonId = resolveLessonIdForChild(lessons, lessonId);
          const existing = lessons[resolvedLessonId];

          if (!existing) return state;

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...lessons,
                  [resolvedLessonId]: {
                    ...existing,
                    lessonId: resolvedLessonId,
                    timeSpent: existing.timeSpent + minutes,
                  },
                },
              },
            },
          };
        });
      },

      exportProgress: () => {
        const state = get();
        const exportData = {
          version: '2.0',
          exportDate: new Date().toISOString(),
          children: state.children,
        };
        return JSON.stringify(exportData, null, 2);
      },

      importProgress: (data: string) => {
        try {
          const imported = JSON.parse(data);

          if (!imported.children || typeof imported.children !== 'object') {
            return false;
          }

          const normalizedImport = normalizePersistedState({
            activeChildId: imported.activeChildId,
            children: imported.children,
          });

          set((state) => ({
            children: {
              ...state.children,
              ...normalizedImport.children,
            },
          }));

          return true;
        } catch (error) {
          console.error('Import failed:', error);
          return false;
        }
      },
    }),
    {
      name: 'education-app-progress',
      version: PROGRESS_STORE_VERSION,
      migrate: (persistedState) => {
        return normalizePersistedState(persistedState);
      },
    },
  ),
);
