import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  OpenSans_700Bold,
  OpenSans_600SemiBold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Onboarding from "./src/view/Onboarding/Onboarding";
import AuthScreen from "./src/view/Login/AuthScreen";
import RegisterScreen from "./src/view/Login/Register";
import PhotoScreen from "./src/view/Login/Photo";
import CategoryScreen from "./src/view/Login/Category";
import HomeScreen from "./src/view/Home/";
import ExploreScreen from "./src/view/Explore/";
import FavoritesScreen from "./src/view/Favorites";
import ProfileScreen from "./src/view/Profile/";
import BookDetail from "./src/view/BookDetail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Stack.Screen
              name="BookDetail"
              component={BookDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoritesScreen"
              component={FavoritesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreScreen"
              component={ExploreScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoScreen"
              component={PhotoScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
