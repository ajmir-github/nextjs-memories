"use client";
import { User } from "@prisma/client";
import { ReactNode, createContext, useContext } from "react";

const AuthContext = createContext<User | null>(null);

// --- useAuth
export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

// --- AuthProvider
export default function AuthProvider({
  children,
  auth,
}: {
  children: ReactNode;
  auth: User | null;
}) {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
