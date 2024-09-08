import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "../pages/Patient/Home";
import { Profile } from "../pages/Patient/Profile";

const Stack = createNativeStackNavigator();

export function PatientRoutes() {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}
