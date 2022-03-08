import React from "react";

import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';

import Routes from "./routes";
import FontLoader from "./helpers/FontLoader";
import { AuthProvider } from "./context/auth";

const AppRegistry = () => {
  const fontsLoaded = FontLoader();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#666" />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#fff" />
 
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppRegistry;
