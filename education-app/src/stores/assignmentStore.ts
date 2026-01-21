import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AssignedTopic {
  childId: string;
  lessonId: string;  // Format: "grade-5-math-1-fractions"
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
        set((state) => {
          const childAssignments = state.assignments[childId] || [];

          // Check if already assigned
          const alreadyAssigned = childAssignments.some(
            (assignment) => assignment.lessonId === lessonId
          );

          if (alreadyAssigned) {
            return state; // No change if already assigned
          }

          const newAssignment: AssignedTopic = {
            childId,
            lessonId,
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
        set((state) => {
          const childAssignments = state.assignments[childId] || [];

          const updatedAssignments = childAssignments.filter(
            (assignment) => assignment.lessonId !== lessonId
          );

          // If no assignments left for this child, remove the key
          if (updatedAssignments.length === 0) {
            const { [childId]: _, ...remainingAssignments } = state.assignments;
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
        const state = get();
        const childAssignments = state.assignments[childId] || [];
        return childAssignments.some(
          (assignment) => assignment.lessonId === lessonId
        );
      },
    }),
    {
      name: 'education-app-assignments',
    }
  )
);
