import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressState, ExamAttempt } from '../types';

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
        // Initialize child progress if not exists
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

      markStarted: (lessonId: string) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const existing = childProgress?.lessons[lessonId];

          if (existing && existing.startedAt) {
            // Already started, don't overwrite
            return state;
          }

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [lessonId]: {
                    lessonId,
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
          const existing = childProgress?.lessons[lessonId];
          const now = new Date().toISOString();

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [lessonId]: {
                    lessonId,
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
        return children[activeChildId]?.lessons[lessonId];
      },

      saveExamAttempt: (attempt: ExamAttempt) => {
        const { activeChildId } = get();
        if (!activeChildId) return;

        set((state) => {
          const childProgress = state.children[activeChildId];
          const lessonProgress = childProgress?.lessons[attempt.lessonId] || {
            lessonId: attempt.lessonId,
            completed: false,
            timeSpent: 0,
            examAttempts: [],
          };

          const attempts = [...lessonProgress.examAttempts, attempt];
          const scores = attempts
            .filter(a => a.score !== undefined)
            .map(a => a.score!);
          const bestScore = scores.length > 0 ? Math.max(...scores) : undefined;

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [attempt.lessonId]: {
                    ...lessonProgress,
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
    }),
    {
      name: 'education-app-progress', // localStorage key
    }
  )
);
