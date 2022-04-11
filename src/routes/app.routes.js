import React from "react";

import HomeTabs from "../components/ScreensWithBottomTab";
import BookProfile from "../view/BookProfile";
import BookPlayer from "../view/BookPlayer";
import BookReader from "../view/BookReader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PlayerProvider } from "../contexts/MusicPlayer";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <PlayerProvider>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={HomeTabs} />
        <AppStack.Screen name="BookProfile" component={BookProfile} />
        <AppStack.Screen name="BookPlayer" component={BookPlayer} />
        <AppStack.Screen name="BookReader" component={BookReader} />
      </AppStack.Navigator>
    </PlayerProvider>
  );
};

export default AppRoutes;
