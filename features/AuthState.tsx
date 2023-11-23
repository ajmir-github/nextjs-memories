"use client";
import { User } from "@prisma/client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext<any>(null);

// --- useAuth
export function useAuth() {
  const auth = useContext(AuthContext);
  return auth as [User | null, Dispatch<User | null>];
}

// --- AuthProvider
export default function AuthProvider({
  children,
  auth: serverAuth,
}: {
  children: ReactNode;
  auth: User | null;
}) {
  const state = useState(serverAuth);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
