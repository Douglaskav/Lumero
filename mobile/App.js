import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { View, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { OpenSans_700Bold } from "@expo-google-fonts/open-sans";

import Onboarding from "./src/view/Onboarding";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Onboarding />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
