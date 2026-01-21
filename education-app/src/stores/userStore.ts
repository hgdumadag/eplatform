import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useChildStore } from './childStore';

// User role type
export type UserRole = 'parent' | 'child';

// User interface
export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  passwordHash?: string;  // Only for parents
  assignedChildId?: string;  // Only for children
}

// Store state interface
interface UserState {
  users: User[];
  currentUser: User | null;
  login: (username: string, password?: string) => Promise<boolean>;
  logout: () => void;
  canSwitchChildren: () => boolean;
  getCurrentChildId: () => string | undefined;
}

// Password hashing function using SHA-256
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Initial hardcoded users
const INITIAL_USERS: User[] = [
  // Parents
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
  // Children
  {
    id: 'user-child-yanthy',
    username: 'yanthy',
    name: 'Yanthy',
    role: 'child',
    assignedChildId: 'child-1',  // Grade 11
  },
  {
    id: 'user-child-mateo',
    username: 'mateo',
    name: 'Mateo',
    role: 'child',
    assignedChildId: 'child-2',  // Grade 8
  },
  {
    id: 'user-child-geordan',
    username: 'geordan',
    name: 'Geordan',
    role: 'child',
    assignedChildId: 'child-3',  // Grade 5
  },
];

// Create user store
export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: INITIAL_USERS,
      currentUser: null,

      login: async (username: string, password?: string) => {
        const { users } = get();
        const user = users.find(
          u => u.username.toLowerCase() === username.toLowerCase()
        );

        if (!user) {
          return false;
        }

        // Parent authentication
        if (user.role === 'parent') {
          if (!password) {
            return false;
          }

          // First parent login - set password for all parent users
          const hasPasswordSet = users.some(
            u => u.role === 'parent' && u.passwordHash
          );

          if (!hasPasswordSet) {
            // Set password for all parent users (shared password)
            const hash = await hashPassword(password);
            const updatedUsers = users.map(u =>
              u.role === 'parent' ? { ...u, passwordHash: hash } : u
            );
            set({ users: updatedUsers, currentUser: user });
            return true;
          }

          // Validate password
          const hash = await hashPassword(password);
          const parentUser = users.find(u => u.role === 'parent' && u.passwordHash);

          if (!parentUser || hash !== parentUser.passwordHash) {
            return false;
          }
        }

        // Set current user
        set({ currentUser: user });

        // Auto-select child for child users
        if (user.role === 'child' && user.assignedChildId) {
          const { selectChild } = useChildStore.getState();
          selectChild(user.assignedChildId);
        }

        return true;
      },

      logout: () => {
        set({ currentUser: null });
        // Clear active child on logout
        const { selectChild } = useChildStore.getState();
        selectChild('');
      },

      canSwitchChildren: () => {
        const { currentUser } = get();
        return currentUser?.role === 'parent';
      },

      getCurrentChildId: () => {
        const { currentUser } = get();
        if (currentUser?.role === 'child') {
          return currentUser.assignedChildId;
        }
        return undefined;
      },
    }),
    {
      name: 'education-app-users',
    }
  )
);
