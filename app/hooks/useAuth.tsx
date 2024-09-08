import React, { useState, createContext, useContext } from "react";
import { user } from "../types/types";
import { psychologistUser, userMock } from "../mocks/userMock";

type AuthContextData = {
  state: {
    loading: boolean;
    user: user;
  };
  dispatch: {
    signIn: (
      data: SignInData,
      successCallback: () => void,
      errorCallback: (error: string) => void,
    ) => Promise<void>;
    signUp: (
      data: SignUpData,
      successCallback: () => void,
      errorCallback: (error: string) => void,
    ) => Promise<void>;
  };
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  description: string;
  patientType: "patient" | "family";
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({} as user);

  console.log(user);
  const signIn = async (
    data: SignInData,
    successCallback: () => void,
    errorCallback: (error: string) => void,
  ) => {
    setLoading(true);

    console.log(data);
    try {
      if (
        (data?.email !== "estacio.teste@gmail.com" &&
          data?.email !== "estacio.testeII@gmail.com") ||
        data?.password !== "Teste123@"
      ) {
        errorCallback("E-mail ou senha incorretos");
        setLoading(false);
        return;
      }
      setTimeout(() => {
        if (data?.email === "estacio.teste@gmail.com") {
          setUser(userMock);
        } else {
          setUser(psychologistUser);
        }
        successCallback();
        setLoading(false);
      }, 1000);
    } catch (error) {
      errorCallback(error as string);
    } finally {
    }
  };

  const signUp = async (
    data: SignUpData,
    successCallback: () => void,
    errorCallback: (error: string) => void,
  ) => {
    setLoading(true);
    try {
      //create axios fetch
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      successCallback();
    } catch (error) {
      errorCallback(error as string);
    } finally {
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state: {
          user,
          loading,
        },
        dispatch: {
          signIn,
          signUp,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
