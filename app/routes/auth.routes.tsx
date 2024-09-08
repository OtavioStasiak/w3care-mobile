import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../pages/Auth/SignIn";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName={"SignIn"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ResetPassword"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
}
