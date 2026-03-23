import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';
import { useChildStore } from './childStore';
import { useProgressStore } from './progressStore';
import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';

export type UserRole = 'parent' | 'child' | 'admin';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  passwordHash?: string;
  assignedChildId?: string;
}

interface UserState {
  users: User[];
  currentUser: User | null;
  isAuthReady: boolean;
  initializeAuth: () => Promise<void>;
  login: (username: string, password?: string) => Promise<boolean>;
  logout: () => void;
  canSwitchChildren: () => boolean;
  getCurrentChildId: () => string | undefined;
}

type SupabaseProfileRow = {
  id: string;
  full_name: string;
  role: UserRole;
};

const LOCAL_INITIAL_USERS: User[] = [
  {
    id: 'user-parent-george',
    username: 'george',
    name: 'George',
    role: 'parent',
    passwordHash: undefined,
  },
  {
    id: 'user-parent-teresa',
    username: 'teresa',
    name: 'Teresa',
    role: 'parent',
    passwordHash: undefined,
  },
  {
    id: 'user-child-yanthy',
    username: 'yanthy',
    name: 'Yanthy',
    role: 'child',
    assignedChildId: 'child-1',
  },
  {
    id: 'user-child-mateo',
    username: 'mateo',
    name: 'Mateo',
    role: 'child',
    assignedChildId: 'child-2',
  },
  {
    id: 'user-child-geordan',
    username: 'geordan',
    name: 'Geordan',
    role: 'child',
    assignedChildId: 'child-3',
  },
];

let authListenerRegistered = false;
const AUTH_INIT_TIMEOUT_MS = 8000;

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function loadSupabaseUser(authUserId: string, email: string | undefined): Promise<User | null> {
  const supabase = requireSupabase();

  const [profileResult, childAccountResult] = await Promise.all([
    supabase
      .from('profiles')
      .select('id, full_name, role')
      .eq('id', authUserId)
      .maybeSingle(),
    supabase
      .from('child_accounts')
      .select('child_id')
      .eq('child_user_id', authUserId)
      .maybeSingle(),
  ]);

  const profile = profileResult.data as SupabaseProfileRow | null;
  if (profileResult.error || !profile) {
    return null;
  }

  return {
    id: profile.id,
    username: email || profile.id,
    name: profile.full_name || email || 'User',
    role: profile.role,
    assignedChildId: childAccountResult.data?.child_id,
  };
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      reject(new Error(`${label} timed out after ${timeoutMs}ms.`));
    }, timeoutMs);

    promise
      .then((value) => {
        window.clearTimeout(timeoutId);
        resolve(value);
      })
      .catch((error) => {
        window.clearTimeout(timeoutId);
        reject(error);
      });
  });
}

export const useUserStore = create<UserState>()((set, get) => ({
  users: LOCAL_INITIAL_USERS,
  currentUser: null,
  isAuthReady: false,

  initializeAuth: async () => {
    const applyResolvedUser = (resolvedUser: User | null) => {
      set({ currentUser: resolvedUser, isAuthReady: true });

      if (resolvedUser?.role === 'child' && resolvedUser.assignedChildId) {
        useChildStore.getState().selectChild(resolvedUser.assignedChildId);
        useProgressStore.getState().setActiveChild(resolvedUser.assignedChildId);
        return;
      }

      if (!resolvedUser) {
        useChildStore.getState().clearActiveChild();
        useProgressStore.getState().clearActiveChild();
      }
    };

    const resolveSessionUser = async (session: Session | null | undefined): Promise<User | null> => {
      if (!session?.user) {
        return null;
      }

      try {
        return await withTimeout(
          loadSupabaseUser(session.user.id, session.user.email),
          AUTH_INIT_TIMEOUT_MS,
          'Loading Supabase user profile',
        );
      } catch (error) {
        console.error('Failed to load authenticated user profile.', error);
        return null;
      }
    };

    if (!isSupabaseConfigured) {
      set({ isAuthReady: true });
      return;
    }

    const supabase = requireSupabase();

    if (!authListenerRegistered) {
      supabase.auth.onAuthStateChange((_event, session) => {
        // Supabase warns against awaiting other Supabase calls inside this callback
        // because it can deadlock session initialization. Defer the async work
        // until after the callback returns so startup cannot get stuck on
        // "Loading session...".
        setTimeout(() => {
          void resolveSessionUser(session).then((resolvedUser) => {
            applyResolvedUser(resolvedUser);
          });
        }, 0);
      });

      authListenerRegistered = true;
    }

    try {
      const { data, error } = await withTimeout(
        supabase.auth.getSession(),
        AUTH_INIT_TIMEOUT_MS,
        'Restoring Supabase session',
      );

      if (error) {
        console.error('Failed to restore Supabase session.', error);
        applyResolvedUser(null);
        return;
      }

      const resolvedUser = await resolveSessionUser(data.session);
      applyResolvedUser(resolvedUser);
    } catch (error) {
      console.error('Unexpected error while initializing authentication.', error);
      applyResolvedUser(null);
    }
  },

  login: async (username: string, password?: string) => {
    if (isSupabaseConfigured) {
      if (!password) {
        return false;
      }

      const email = username.trim();
      const supabase = requireSupabase();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.user) {
        return false;
      }

      const resolvedUser = await loadSupabaseUser(data.user.id, data.user.email);
      if (!resolvedUser) {
        await supabase.auth.signOut();
        return false;
      }

      set({ currentUser: resolvedUser, isAuthReady: true });

      if (resolvedUser.role === 'child' && resolvedUser.assignedChildId) {
        useChildStore.getState().selectChild(resolvedUser.assignedChildId);
        useProgressStore.getState().setActiveChild(resolvedUser.assignedChildId);
      }

      return true;
    }

    const { users } = get();
    const user = users.find((candidate) => candidate.username.toLowerCase() === username.toLowerCase());
    if (!user) {
      return false;
    }

    if (user.role === 'parent') {
      if (!password) {
        return false;
      }

      const hasPasswordSet = users.some(
        (candidate) => candidate.role === 'parent' && candidate.passwordHash,
      );

      if (!hasPasswordSet) {
        const hash = await hashPassword(password);
        const updatedUsers = users.map((candidate) =>
          candidate.role === 'parent' ? { ...candidate, passwordHash: hash } : candidate,
        );
        set({ users: updatedUsers, currentUser: user, isAuthReady: true });
        return true;
      }

      const hash = await hashPassword(password);
      const parentUser = users.find((candidate) => candidate.role === 'parent' && candidate.passwordHash);
      if (!parentUser || hash !== parentUser.passwordHash) {
        return false;
      }
    }

    set({ currentUser: user, isAuthReady: true });

    if (user.role === 'child' && user.assignedChildId) {
      useChildStore.getState().selectChild(user.assignedChildId);
      useProgressStore.getState().setActiveChild(user.assignedChildId);
    }

    return true;
  },

  logout: () => {
    if (isSupabaseConfigured) {
      void requireSupabase().auth.signOut();
    }

    set({ currentUser: null, isAuthReady: true });
    useChildStore.getState().clearActiveChild();
    useProgressStore.getState().clearActiveChild();
  },

  canSwitchChildren: () => {
    const { currentUser } = get();
    return currentUser?.role === 'parent' || currentUser?.role === 'admin';
  },

  getCurrentChildId: () => {
    const { currentUser } = get();
    if (currentUser?.role === 'child') {
      return currentUser.assignedChildId;
    }
    return undefined;
  },
}));
