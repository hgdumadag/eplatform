import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { normalizeLessonKey } from '../utils/lessonKey';
import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';
import {
  ensureLessonIdByKey,
  getLessonIdByKey,
  getLessonKeysByIds,
} from '../services/lessonCatalogService';

interface AssignedTopic {
  childId: string;
  lessonId: string;
  assignedAt: string;
  assignedBy: string;
}

interface AssignmentState {
  assignments: Record<string, AssignedTopic[]>;
  loadAssignments: (childIds: string[]) => Promise<void>;
  assignTopic: (childId: string, lessonId: string, parentUserId: string) => void;
  unassignTopic: (childId: string, lessonId: string) => void;
  getAssignments: (childId: string) => AssignedTopic[];
  isAssigned: (childId: string, lessonId: string) => boolean;
}

async function resolveAssignedBy(parentUserId: string): Promise<string | null> {
  if (parentUserId) {
    return parentUserId;
  }

  if (!isSupabaseConfigured) {
    return null;
  }

  const supabase = requireSupabase();
  const { data } = await supabase.auth.getUser();
  return data.user?.id || null;
}

export const useAssignmentStore = create<AssignmentState>()(
  persist(
    (set, get) => ({
      assignments: {},

      loadAssignments: async (childIds: string[]) => {
        if (!isSupabaseConfigured || childIds.length === 0) {
          return;
        }

        const supabase = requireSupabase();
        const { data, error } = await supabase
          .from('topic_assignments')
          .select('child_id, lesson_id, assigned_at, assigned_by')
          .in('child_id', childIds);

        if (error || !data) {
          return;
        }

        const lessonKeyMap = await getLessonKeysByIds(data.map((row) => row.lesson_id));
        const nextAssignments: Record<string, AssignedTopic[]> = {};

        data.forEach((row) => {
          const lessonKey = lessonKeyMap[row.lesson_id];
          if (!lessonKey) {
            return;
          }

          if (!nextAssignments[row.child_id]) {
            nextAssignments[row.child_id] = [];
          }

          nextAssignments[row.child_id].push({
            childId: row.child_id,
            lessonId: lessonKey,
            assignedAt: row.assigned_at,
            assignedBy: row.assigned_by,
          });
        });

        set({ assignments: nextAssignments });
      },

      assignTopic: (childId: string, lessonId: string, parentUserId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);

        set((state) => {
          const childAssignments = state.assignments[childId] || [];
          const alreadyAssigned = childAssignments.some(
            (assignment) => assignment.lessonId === canonicalLessonId,
          );

          if (alreadyAssigned) {
            return state;
          }

          const newAssignment: AssignedTopic = {
            childId,
            lessonId: canonicalLessonId,
            assignedAt: new Date().toISOString(),
            assignedBy: parentUserId,
          };

          return {
            assignments: {
              ...state.assignments,
              [childId]: [...childAssignments, newAssignment],
            },
          };
        });

        if (!isSupabaseConfigured) {
          return;
        }

        void (async () => {
          const lessonDbId = await ensureLessonIdByKey(canonicalLessonId);
          const assignedBy = await resolveAssignedBy(parentUserId);
          if (!lessonDbId || !assignedBy) {
            return;
          }

          await requireSupabase()
            .from('topic_assignments')
            .upsert(
              {
                child_id: childId,
                lesson_id: lessonDbId,
                assigned_by: assignedBy,
              },
              { onConflict: 'child_id,lesson_id' },
            );
        })();
      },

      unassignTopic: (childId: string, lessonId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);

        set((state) => {
          const childAssignments = state.assignments[childId] || [];
          const updatedAssignments = childAssignments.filter(
            (assignment) => assignment.lessonId !== canonicalLessonId,
          );

          if (updatedAssignments.length === 0) {
            const remainingAssignments = { ...state.assignments };
            delete remainingAssignments[childId];
            return { assignments: remainingAssignments };
          }

          return {
            assignments: {
              ...state.assignments,
              [childId]: updatedAssignments,
            },
          };
        });

        if (!isSupabaseConfigured) {
          return;
        }

        void (async () => {
          const lessonDbId = await getLessonIdByKey(canonicalLessonId);
          if (!lessonDbId) {
            return;
          }

          await requireSupabase()
            .from('topic_assignments')
            .delete()
            .eq('child_id', childId)
            .eq('lesson_id', lessonDbId);
        })();
      },

      getAssignments: (childId: string) => {
        return get().assignments[childId] || [];
      },

      isAssigned: (childId: string, lessonId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);
        const childAssignments = get().assignments[childId] || [];
        return childAssignments.some(
          (assignment) => assignment.lessonId === canonicalLessonId,
        );
      },
    }),
    {
      name: 'education-app-assignments',
      version: 1,
    },
  ),
);
