import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

import Logo from "../assets/Head.png";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={Logo} style={{ bottom: 35 }} />

      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  flex: {
    flex: 0.7,
    justifyContent: "center",
  },

  title: {
    marginTop: 20,
    fontFamily: 'OpenSans_700Bold',
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: 290,
    fontSize: 25,
    color: "#3f3f66",
  },

  subtitle: {
    marginTop: 10,
    fontFamily: 'Poppins_500Medium',
    fontWeight: "500",
    maxWidth: 292,
    textAlign: "center",
    fontSize: 12,
    color: "#444466"
  },
});
