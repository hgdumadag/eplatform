import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Child, ChildState } from '../types';

// Initial children - Yanthy (Grade 11), Mateo (Grade 8), Geordan (Grade 5)
const initialChildren: Child[] = [
  {
    id: 'child-1',
    name: 'Yanthy',
    grade: 11,
  },
  {
    id: 'child-2',
    name: 'Mateo',
    grade: 8,
  },
  {
    id: 'child-3',
    name: 'Geordan',
    grade: 5,
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
