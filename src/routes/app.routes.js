import React from "react";

import { Feather, Ionicons } from "@expo/vector-icons";

import Home from "../view/Home";
import Explore from "../view/Explore";
import Favorites from "../view/Favorites";
import Player from "../view/BookPlayer";
import Profile from "../view/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppStack = createNativeStackNavigator();
const AppBottomTab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <AppBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
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
      <AppBottomTab.Screen name="Home" component={Home} />
      <AppBottomTab.Screen name="Explore" component={Explore} />
      <AppBottomTab.Screen name="Player" component={Player} />
      <AppBottomTab.Screen name="Favorites" component={Favorites} />
      <AppBottomTab.Screen name="Profile" component={Profile} />
    </AppBottomTab.Navigator>
  );
};

export default AppRoutes;
