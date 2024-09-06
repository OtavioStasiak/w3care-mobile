import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import React, { useState, createContext, useContext, useCallback, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';


type AuthContextData = {
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  
  validateCode: (email: string, otpCode: string, deviceId: string) => Promise<any>;
  sendForgotPasswordMail: (email: string) => Promise<any>;
  changePassword: (password: string, token: string) => Promise<any>;
  user: any;
  token: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
  initialToken: string | null;
  initialUserId: string | null;
  initialPsychologistId: string | null;
  initialUsername: string | null;
  initialScheduleId: string | null;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({
  children,
  initialToken,
  initialUserId,
  initialUsername,
  initialScheduleId,
  initialPsychologistId,
}: AuthProviderProps) {

     

  return (
    <AuthContext.Provider
      value={{
       
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };