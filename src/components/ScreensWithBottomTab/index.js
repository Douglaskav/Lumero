import React from "react";

import Home from "../../view/Home";
import Explore from "../../view/Explore";
import Favorites from "../../view/Favorites";
import Profile from "../../view/Profile";

import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
      headerShown: false,
    })}
  >
    <AppBottomTab.Screen name="HomeTabs" component={Home} />
    <AppBottomTab.Screen name="Explore" component={Explore} />
    <AppBottomTab.Screen name="Favorites" component={Favorites} />
    <AppBottomTab.Screen name="Profile" component={Profile} />
  </AppBottomTab.Navigator>
);

export default HomeTabs;
