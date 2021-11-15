import React, { useContext, createContext, ReactNode } from "react";
import { Photo } from "../scenes/Dashboard/styles";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "1234",
    name: "Luiz",
    email: "cjeh@sjdf",
  };

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
