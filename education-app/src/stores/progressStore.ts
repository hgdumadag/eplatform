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

      releaseAssessmentResults: (childId: string, attemptId: string) => {
        set((state) => {
          const childProgress = state.children[childId];
          if (!childProgress) return state;

          const updatedLessons = { ...childProgress.lessons };

          // Find and update the attempt
          Object.keys(updatedLessons).forEach(lessonId => {
            const lesson = updatedLessons[lessonId];
            const attemptIndex = lesson.examAttempts.findIndex(a => a.attemptId === attemptId);

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
          const existing = childProgress?.lessons[lessonId];

          if (!existing) return state;

          return {
            children: {
              ...state.children,
              [activeChildId]: {
                lessons: {
                  ...childProgress?.lessons,
                  [lessonId]: {
                    ...existing,
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

          // Validate structure
          if (!imported.children || typeof imported.children !== 'object') {
            return false;
          }

          // Merge with existing data
          set((state) => ({
            children: {
              ...state.children,
              ...imported.children,
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
      name: 'education-app-progress', // localStorage key
    }
  )
);
