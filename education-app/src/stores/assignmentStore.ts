import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { normalizeLessonKey } from '../utils/lessonKey';

interface AssignedTopic {
  childId: string;
  lessonId: string;  // Format: "grade-5-math-q1-topic-name"
  assignedAt: string;  // ISO timestamp
  assignedBy: string;  // User ID of parent who assigned
}

interface AssignmentState {
  assignments: Record<string, AssignedTopic[]>;  // Keyed by childId
  assignTopic: (childId: string, lessonId: string, parentUserId: string) => void;
  unassignTopic: (childId: string, lessonId: string) => void;
  getAssignments: (childId: string) => AssignedTopic[];
  isAssigned: (childId: string, lessonId: string) => boolean;
}

export const useAssignmentStore = create<AssignmentState>()(
  persist(
    (set, get) => ({
      assignments: {},

      assignTopic: (childId: string, lessonId: string, parentUserId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);

        set((state) => {
          const childAssignments = state.assignments[childId] || [];

          // Check if already assigned
          const alreadyAssigned = childAssignments.some(
            (assignment) => assignment.lessonId === canonicalLessonId
          );

          if (alreadyAssigned) {
            return state; // No change if already assigned
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
      },

      unassignTopic: (childId: string, lessonId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);

        set((state) => {
          const childAssignments = state.assignments[childId] || [];

          const updatedAssignments = childAssignments.filter(
            (assignment) => assignment.lessonId !== canonicalLessonId
          );

          // If no assignments left for this child, remove the key
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
      },

      getAssignments: (childId: string) => {
        const state = get();
        return state.assignments[childId] || [];
      },

      isAssigned: (childId: string, lessonId: string) => {
        const canonicalLessonId = normalizeLessonKey(lessonId);
        const state = get();
        const childAssignments = state.assignments[childId] || [];
        return childAssignments.some(
          (assignment) => assignment.lessonId === canonicalLessonId
        );
      },
    }),
    {
      name: 'education-app-assignments',
      version: 1,
      migrate: (persistedState) => {
        if (!persistedState || typeof persistedState !== 'object') {
          return { assignments: {} };
        }

        const state = persistedState as Partial<AssignmentState>;
        const rawAssignments = state.assignments && typeof state.assignments === 'object'
          ? state.assignments
          : {};

        const assignments: Record<string, AssignedTopic[]> = {};

        for (const [childId, childAssignments] of Object.entries(rawAssignments)) {
          if (!Array.isArray(childAssignments)) {
            assignments[childId] = [];
            continue;
          }

          assignments[childId] = childAssignments.map((assignment) => ({
            ...assignment,
            lessonId: normalizeLessonKey(assignment.lessonId),
          }));
        }

        return {
          assignments,
        };
      },
    }
  )
);
