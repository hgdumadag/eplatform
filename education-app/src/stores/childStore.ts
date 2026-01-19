import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Child, ChildState } from '../types';

// Initial children - Grades 5, 8, 11
const initialChildren: Child[] = [
  {
    id: 'child-1',
    name: 'Child 1',
    grade: 5,
  },
  {
    id: 'child-2',
    name: 'Child 2',
    grade: 8,
  },
  {
    id: 'child-3',
    name: 'Child 3',
    grade: 11,
  },
];

export const useChildStore = create<ChildState>()(
  persist(
    (set, get) => ({
      children: initialChildren,
      activeChild: null,

      selectChild: (childId: string) => {
        const child = get().children.find(c => c.id === childId);
        if (child) {
          set({ activeChild: child });
        }
      },

      getChild: (childId: string) => {
        return get().children.find(c => c.id === childId);
      },
    }),
    {
      name: 'education-app-children',
    }
  )
);
