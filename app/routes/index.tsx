import * as Linking from "expo-linking";
import React from "react";

import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./auth.routes";
import { PatientRoutes } from "./patient.routes";
import { PsychologistRoutes } from "./psychologist.routes";

export function Routes() {
  const prefix = Linking.createURL("/");

  const {
    state: { user },
  } = useAuth();

  return (
    <>
      {user.email ? (
        <>{user?.psychologist ? <PsychologistRoutes /> : <PatientRoutes />}</>
      ) : (
        <AuthRoutes />
      )}
    </>
  );
}
