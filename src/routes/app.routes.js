import React from "react";

import { Feather, Ionicons } from "@expo/vector-icons";

import Home from "../view/Home";
import Explore from "../view/Explore";
import Favorites from "../view/Favorites";
import Player from "../view/BookPlayer";
import Profile from "../view/Profile";
import BookProfile from "../view/BookProfile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppStack = createNativeStackNavigator();
const AppBottomTab = createBottomTabNavigator();

const HomeTabs = () => (
  <AppBottomTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "HomeTabs") {
          iconName = "home";
        } else if (route.name === "Explore") {
          iconName = "search";
        } else if (route.name === "Player") {
          iconName = "headphones";
        } else if (route.name === "Favorites") {
          iconName = "heart";
        } else if (route.name === "Profile") {
          iconName = "user";
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#4274FE",
      tabBarInactiveTintColor: "#0E091B",
      tabBarShowLabel: false,
      headerShown: false,
    })}
  >
    <AppBottomTab.Screen name="HomeTabs" component={Home} />
    <AppBottomTab.Screen name="Explore" component={Explore} />
    <AppBottomTab.Screen name="Player" component={Player} />
    <AppBottomTab.Screen name="Favorites" component={Favorites} />
    <AppBottomTab.Screen name="Profile" component={Profile} />
  </AppBottomTab.Navigator>
);

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeTabs} />
      <AppStack.Screen name="BookProfile" component={BookProfile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
