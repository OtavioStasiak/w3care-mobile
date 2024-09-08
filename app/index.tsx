import React from "react";
import { Routes } from "./routes";
import { AuthRoutes } from "./routes/auth.routes";
import { AuthProvider } from "./hooks/useAuth";
import Toast from "react-native-toast-message";
import { Home } from "./pages/Patient/Home";

export default function Page() {
  return (
    <AuthProvider>
      <Routes />
      <Toast />
    </AuthProvider>
  );
}
