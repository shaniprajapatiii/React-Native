import React, { createContext, useContext, useState } from "react";
import { router } from "expo-router";

type AuthContextType = {
  token: string | null;
  user: { email: string } | null;
  signIn: (email: string) => void;
  signUp: (email: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ email: string } | null>(null);

  const signIn = (email: string) => {
    const jwt = `eyJhbGciOiJIUzI1NiJ9.${btoa(JSON.stringify({ email }))}.signature`;
    setToken(jwt);
    setUser({ email });
    router.replace("/(root)/(tabs)");
  };

  const signUp = (email: string) => {
    const jwt = `eyJhbGciOiJIUzI1NiJ9.${btoa(JSON.stringify({ email }))}.signature`;
    setToken(jwt);
    setUser({ email });
    router.replace("/(root)/(tabs)");
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
    router.replace("/(auth)/sign-in");
  };

  return (
    <AuthContext.Provider value={{ token, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
