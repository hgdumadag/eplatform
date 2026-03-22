import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressState, ExamAttempt, LessonProgress } from '../types';
import { normalizeLessonKey, tryTopicPrefixedVariant } from '../utils/lessonKey';
import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';
import { ensureLessonIdByKey, getLessonKeysByIds } from '../services/lessonCatalogService';

const PROGRESS_STORE_VERSION = 2;

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

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

  Object.entries(lessons || {}).forEach(([rawLessonId, progress]) => {
    const canonicalLessonId = normalizeLessonKey(rawLessonId);
    const normalizedProgress: LessonProgress = {
      ...progress,
      lessonId: canonicalLessonId,
      examAttempts: Array.isArray(progress.examAttempts)
        ? progress.examAttempts.map((attempt) => ({
            ...attempt,
            questionResults:
              attempt.questionResults && typeof attempt.questionResults === 'object'
                ? attempt.questionResults
                : undefined,
          }))
        : [],
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
  });

  Object.keys(normalizedLessons).forEach((lessonId) => {
    const prefixedVariant = tryTopicPrefixedVariant(lessonId);
    if (prefixedVariant && normalizedLessons[prefixedVariant]) {
      normalizedLessons[prefixedVariant] = mergeLessonProgress(
        normalizedLessons[prefixedVariant],
        normalizedLessons[lessonId],
      );
      delete normalizedLessons[lessonId];
    }
  });

  Object.entries(normalizedLessons).forEach(([lessonId, progress]) => {
    progress.lessonId = lessonId;
    progress.examAttempts = progress.examAttempts.map((attempt) => ({
      ...attempt,
      lessonId,
    }));
  });

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

  Object.entries(rawChildren).forEach(([childId, childProgress]) => {
    const lessons = childProgress?.lessons && typeof childProgress.lessons === 'object'
      ? childProgress.lessons
      : {};

    children[childId] = {
      lessons: normalizeChildLessons(lessons),
    };
  });

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

async function saveLessonProgressToSupabase(childId: string, progress: LessonProgress): Promise<void> {
  if (!isSupabaseConfigured) {
    return;
  }

  const lessonDbId = await ensureLessonIdByKey(progress.lessonId);
  if (!lessonDbId) {
    return;
  }

  const supabase = requireSupabase();
  await supabase
    .from('lesson_progress')
    .upsert(
      {
        child_id: childId,
        lesson_id: lessonDbId,
        started_at: progress.startedAt || null,
        completed_at: progress.completedAt || null,
        completed: progress.completed,
        time_spent_minutes: progress.timeSpent || 0,
        best_score: progress.bestScore ?? null,
      },
      { onConflict: 'child_id,lesson_id' },
    );
}

async function saveExamAttemptToSupabase(childId: string, attempt: ExamAttempt): Promise<void> {
  if (!isSupabaseConfigured) {
    return;
  }

  const lessonDbId = await ensureLessonIdByKey(attempt.lessonId);
  if (!lessonDbId) {
    return;
  }

  const supabase = requireSupabase();
  const payload: Record<string, unknown> = {
    child_id: childId,
    lesson_id: lessonDbId,
    exam_type: attempt.examType,
    started_at: attempt.startedAt,
    completed_at: attempt.completedAt || null,
    score: attempt.score ?? null,
    total_points: attempt.totalPoints ?? null,
    passed: attempt.passed ?? null,
    time_spent_minutes: attempt.timeSpent ?? 0,
    answers: attempt.answers,
    question_results: attempt.questionResults ?? {},
    released: attempt.released ?? false,
    released_at: attempt.releasedAt ?? null,
  };

  if (isUuid(attempt.attemptId)) {
    payload.id = attempt.attemptId;
  }

  await supabase.from('exam_attempts').insert(payload);
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      activeChildId: null,
      children: {},

      setActiveChild: (childId: string) => {
        set((state) => ({
          activeChildId: childId,
          children: state.children[childId]
            ? state.children
            : {
                ...state.children,
                [childId]: { lessons: {} },
              },
        }));

        void get().loadChildProgress(childId);
      },

      loadChildProgress: async (childId: string) => {
        if (!childId) {
          return;
        }

        if (!isSupabaseConfigured) {
          set((state) => ({
            children: state.children[childId]
              ? state.children
              : {
                  ...state.children,
                  [childId]: { lessons: {} },
                },
          }));
          return;
        }

        const supabase = requireSupabase();
        const lessonProgressResult = await supabase
          .from('lesson_progress')
          .select('lesson_id, started_at, completed_at, completed, time_spent_minutes, best_score')
          .eq('child_id', childId);

        if (lessonProgressResult.error) {
          return;
        }

        const progressRows = lessonProgressResult.data || [];
        const lessonIds = progressRows.map((row) => row.lesson_id);
        const lessonKeyMap = await getLessonKeysByIds(lessonIds);

        const attemptResult = await supabase
          .from('exam_attempts')
          .select(
            'id, lesson_id, exam_type, started_at, completed_at, answers, question_results, score, total_points, passed, time_spent_minutes, released, released_at',
          )
          .eq('child_id', childId)
          .order('created_at', { ascending: false });

        const attemptsByLesson: Record<string, ExamAttempt[]> = {};

        if (!attemptResult.error && attemptResult.data) {
          const attemptLessonIds = attemptResult.data.map((row) => row.lesson_id);
          const attemptLessonKeyMap = await getLessonKeysByIds(attemptLessonIds);

          attemptResult.data.forEach((row) => {
            const lessonKey = attemptLessonKeyMap[row.lesson_id];
            if (!lessonKey) {
              return;
            }

            const answers = row.answers && typeof row.answers === 'object'
              ? (row.answers as Record<string, string | number>)
              : {};
            const questionResults = row.question_results && typeof row.question_results === 'object'
              ? row.question_results
              : undefined;

            const mappedAttempt: ExamAttempt = {
              attemptId: row.id,
              lessonId: lessonKey,
              examType: row.exam_type,
              startedAt: row.started_at,
              completedAt: row.completed_at || undefined,
              answers,
              score: row.score ?? undefined,
              totalPoints: row.total_points ?? undefined,
              passed: row.passed ?? undefined,
              timeSpent: row.time_spent_minutes ?? undefined,
              released: row.released ?? undefined,
              releasedAt: row.released_at ?? undefined,
              questionResults: questionResults as ExamAttempt['questionResults'],
            };

            if (!attemptsByLesson[lessonKey]) {
              attemptsByLesson[lessonKey] = [];
            }
            attemptsByLesson[lessonKey].push(mappedAttempt);
          });
        }

        const loadedLessons: Record<string, LessonProgress> = {};

        progressRows.forEach((row) => {
          const lessonKey = lessonKeyMap[row.lesson_id];
          if (!lessonKey) {
            return;
          }

          loadedLessons[lessonKey] = {
            lessonId: lessonKey,
            completed: row.completed,
            startedAt: row.started_at || undefined,
            completedAt: row.completed_at || undefined,
            timeSpent: row.time_spent_minutes || 0,
            examAttempts: attemptsByLesson[lessonKey] || [],
            bestScore: row.best_score ?? undefined,
          };
        });

        Object.entries(attemptsByLesson).forEach(([lessonKey, attempts]) => {
          if (loadedLessons[lessonKey]) {
            return;
          }

          const scores = attempts
            .map((attempt) => attempt.score)
            .filter((score): score is number => score !== undefined);

          loadedLessons[lessonKey] = {
            lessonId: lessonKey,
            completed: false,
            timeSpent: 0,
            examAttempts: attempts,
            bestScore: scores.length > 0 ? Math.max(...scores) : undefined,
          };
        });

        set((state) => ({
          children: {
            ...state.children,
            [childId]: {
              lessons: normalizeChildLessons(loadedLessons),
            },
          },
        }));
      },

      clearActiveChild: () => {
        set({ activeChildId: null });
      },

      markStarted: (lessonId: string) => {
        const { activeChildId } = get();
        if (!activeChildId) {
          return;
        }

        let updatedProgress: LessonProgress | null = null;
        set((state) => {
          const childProgress = state.children[activeChildId];
          const resolvedLessonId = resolveLessonIdForChild(childProgress?.lessons || {}, lessonId);
          const existing = childProgress?.lessons[resolvedLessonId];

          if (existing && existing.startedAt) {
            updatedProgress = existing;
            return state;
          }

          updatedProgress = {
            lessonId: resolvedLessonId,
            completed: false,
            startedAt: new Date().toISOString(),
            timeSpent: existing?.timeSpent || 0,
            examAttempts: existing?.examAttempts || [],
            bestScore: existing?.bestScore,
          };

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [resolvedLessonId]: updatedProgress,
                },
              },
            },
          };
        });

        if (updatedProgress) {
          void saveLessonProgressToSupabase(activeChildId, updatedProgress);
        }
      },

      markComplete: (lessonId: string) => {
        const { activeChildId } = get();
        if (!activeChildId) {
          return;
        }

        let updatedProgress: LessonProgress | null = null;
        set((state) => {
          const childProgress = state.children[activeChildId];
          const resolvedLessonId = resolveLessonIdForChild(childProgress?.lessons || {}, lessonId);
          const existing = childProgress?.lessons[resolvedLessonId];
          const now = new Date().toISOString();

          updatedProgress = {
            lessonId: resolvedLessonId,
            completed: true,
            startedAt: existing?.startedAt || now,
            completedAt: now,
            timeSpent: existing?.timeSpent || 0,
            examAttempts: existing?.examAttempts || [],
            bestScore: existing?.bestScore,
          };

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [resolvedLessonId]: updatedProgress,
                },
              },
            },
          };
        });

        if (updatedProgress) {
          void saveLessonProgressToSupabase(activeChildId, updatedProgress);
        }
      },

      getProgress: (lessonId: string) => {
        const { activeChildId, children } = get();
        if (!activeChildId) {
          return undefined;
        }

        const lessons = children[activeChildId]?.lessons || {};
        const resolvedLessonId = resolveLessonIdForChild(lessons, lessonId);
        return lessons[resolvedLessonId];
      },

      saveExamAttempt: (attempt: ExamAttempt) => {
        const { activeChildId } = get();
        if (!activeChildId) {
          return;
        }

        let updatedProgress: LessonProgress | null = null;
        let normalizedAttempt: ExamAttempt | null = null;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const lessons = childProgress?.lessons || {};
          const resolvedLessonId = resolveLessonIdForChild(lessons, attempt.lessonId);
          const safeAttemptId = isUuid(attempt.attemptId) ? attempt.attemptId : crypto.randomUUID();

          normalizedAttempt = {
            ...attempt,
            attemptId: safeAttemptId,
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

          updatedProgress = {
            ...lessonProgress,
            lessonId: resolvedLessonId,
            examAttempts: attempts,
            bestScore,
          };

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...lessons,
                  [resolvedLessonId]: updatedProgress,
                },
              },
            },
          };
        });

        if (normalizedAttempt) {
          void saveExamAttemptToSupabase(activeChildId, normalizedAttempt);
        }
        if (updatedProgress) {
          void saveLessonProgressToSupabase(activeChildId, updatedProgress);
        }
      },

      getExamAttempts: (lessonId: string) => {
        const progress = get().getProgress(lessonId);
        return progress?.examAttempts || [];
      },

      releaseAssessmentResults: (childId: string, attemptId: string) => {
        set((state) => {
          const childProgress = state.children[childId];
          if (!childProgress) {
            return state;
          }

          const updatedLessons = { ...childProgress.lessons };

          Object.keys(updatedLessons).forEach((lessonId) => {
            const lesson = updatedLessons[lessonId];
            const attemptIndex = lesson.examAttempts.findIndex((attempt) => attempt.attemptId === attemptId);

            if (attemptIndex === -1) {
              return;
            }

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

        if (isSupabaseConfigured && isUuid(attemptId)) {
          void requireSupabase()
            .from('exam_attempts')
            .update({ released: true, released_at: new Date().toISOString() })
            .eq('id', attemptId);
        }
      },

      updateLessonTime: (lessonId: string, minutes: number) => {
        const { activeChildId } = get();
        if (!activeChildId) {
          return;
        }

        let updatedProgress: LessonProgress | null = null;
        set((state) => {
          const childProgress = state.children[activeChildId];
          const lessons = childProgress?.lessons || {};
          const resolvedLessonId = resolveLessonIdForChild(lessons, lessonId);
          const existing = lessons[resolvedLessonId];

          if (!existing) {
            return state;
          }

          updatedProgress = {
            ...existing,
            lessonId: resolvedLessonId,
            timeSpent: existing.timeSpent + minutes,
          };

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...lessons,
                  [resolvedLessonId]: updatedProgress,
                },
              },
            },
          };
        });

        if (updatedProgress) {
          void saveLessonProgressToSupabase(activeChildId, updatedProgress);
        }
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
      migrate: (persistedState) => normalizePersistedState(persistedState),
    },
  ),
);
