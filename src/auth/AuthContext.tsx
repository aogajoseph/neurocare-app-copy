// src/auth/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from './auth.api';
import { ProfileMenuItem, AuthUser } from './types';

type AuthState = {
  user: AuthUser | null;
  menu: ProfileMenuItem[];
  loading: boolean;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [menu, setMenu] = useState<ProfileMenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const res = await fetchProfile();
      setUser(res.user);
      setMenu(res.menu);
      setLoading(false);
    }

    loadProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, menu, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
