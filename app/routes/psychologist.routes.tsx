import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../pages/Psychologist/Home";
import { Profile } from "../pages/Psychologist/Profile";

const Stack = createNativeStackNavigator();

export function PsychologistRoutes() {
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
