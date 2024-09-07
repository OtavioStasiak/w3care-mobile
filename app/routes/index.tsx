import * as Linking from 'expo-linking';
import React from 'react';

import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './auth.routes';
import { NavigationContainer } from '@react-navigation/native';


export function Routes() {
  const prefix = Linking.createURL('/');

  const {  } = useAuth();

  return (
    <AuthRoutes />
  );
}