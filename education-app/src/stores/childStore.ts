import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Child, ChildState } from '../types';
import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';

const localInitialChildren: Child[] = [
  { id: 'child-1', name: 'Yanthy', grade: 11 },
  { id: 'child-2', name: 'Mateo', grade: 8 },
  { id: 'child-3', name: 'Geordan', grade: 5 },
];

export const useChildStore = create<ChildState>()(
  persist(
    (set, get) => ({
      children: localInitialChildren,
      activeChild: null,

      loadChildren: async (userId: string, role: 'parent' | 'child' | 'admin') => {
        if (!isSupabaseConfigured) {
          set((state) => ({
            children: localInitialChildren,
            activeChild: state.activeChild || localInitialChildren[0] || null,
          }));
          return;
        }

        const supabase = requireSupabase();
        let children: Child[] = [];

        if (role === 'admin') {
          const { data, error } = await supabase
            .from('children')
            .select('id, name, grade')
            .order('name', { ascending: true });

          if (!error && data) {
            children = data;
          }
        } else if (role === 'parent') {
          const relationResult = await supabase
            .from('parent_children')
            .select('child_id')
            .eq('parent_user_id', userId);

          const childIds = (relationResult.data || []).map((row) => row.child_id);
          if (relationResult.error || childIds.length === 0) {
            set({ children: [], activeChild: null });
            return;
          }

          const childrenResult = await supabase
            .from('children')
            .select('id, name, grade')
            .in('id', childIds)
            .order('name', { ascending: true });

          if (!childrenResult.error && childrenResult.data) {
            children = childrenResult.data;
          }
        } else {
          const childAccountResult = await supabase
            .from('child_accounts')
            .select('child_id')
            .eq('child_user_id', userId)
            .maybeSingle();

          const childId = childAccountResult.data?.child_id;
          if (childAccountResult.error || !childId) {
            set({ children: [], activeChild: null });
            return;
          }

          const childResult = await supabase
            .from('children')
            .select('id, name, grade')
            .eq('id', childId)
            .maybeSingle();

          if (!childResult.error && childResult.data) {
            children = [childResult.data];
          }
        }

        set((state) => {
          const activeChildExists = state.activeChild && children.some((child) => child.id === state.activeChild?.id);
          const fallbackActiveChild = role === 'child' ? children[0] || null : state.activeChild || children[0] || null;

          return {
            children,
            activeChild: activeChildExists ? state.activeChild : fallbackActiveChild,
          };
        });
      },

      selectChild: (childId: string) => {
        const child = get().children.find((candidate) => candidate.id === childId);
        if (child) {
          set({ activeChild: child });
        }
      },

      clearActiveChild: () => {
        set({ activeChild: null });
      },

      getChild: (childId: string) => {
        return get().children.find((child) => child.id === childId);
      },
    }),
    {
      name: 'education-app-children',
    },
  ),
);
