import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthContext from "../context/auth";

import Onboarding from "../view/Onboarding";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { showOnboarding, loading, user } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  if (showOnboarding) return <Onboarding />;

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
