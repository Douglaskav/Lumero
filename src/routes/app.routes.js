import React from "react";

import HomeTabs from "../components/ScreensWithBottomTab";
import BookProfile from "../view/BookProfile";
import BookReader from "../view/BookReader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeTabs} />
      <AppStack.Screen name="BookProfile" component={BookProfile} />
      <AppStack.Screen name="BookReader" component={BookReader} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
