import React, { useContext, createContext, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

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
  signInWithGoogle: () => Promise<void>;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
    type: string;
  };
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "1234",
    name: "Luiz",
    email: "cjeh@sjdf",
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "52311146787-82t8m4f37q91vb0k5fgr8k5fu0iq2ugr.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@luiztimboalcantara/gofinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = AuthSession.startAsync({ authUrl });

      console.log(response);
    } catch (error) {
      throw new Error(error as any);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
