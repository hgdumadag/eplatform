import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ParentAuthState } from '../types';

/**
 * Simple password hashing using Web Crypto API
 * Note: This is client-side only, not enterprise-grade security
 */
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export const useParentAuthStore = create<ParentAuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      passwordHash: null,

      setPassword: async (password: string) => {
        const hash = await hashPassword(password);
        set({ passwordHash: hash, isAuthenticated: true });
      },

      authenticate: async (password: string) => {
        const { passwordHash } = get();

        // If no password set, set it now
        if (!passwordHash) {
          await get().setPassword(password);
          return true;
        }

        // Check password
        const hash = await hashPassword(password);
        const isValid = hash === passwordHash;

        if (isValid) {
          set({ isAuthenticated: true });
        }

        return isValid;
      },

      logout: () => {
        set({ isAuthenticated: false });
      },
    }),
    {
      name: 'education-app-parent-auth',
    }
  )
);
