import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import Logo from "../../assets/Head.png";
import profilePhoto from "../../assets/imageProfile.png";

export default PhotoScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Image source={profilePhoto} style={styles.profilePhoto} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select a photo from my gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.link}>No thanks !</Text>
        <Feather name="arrow-right" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
  },

  profilePhoto: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 300,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#3F3D56",
    borderRadius: 5,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "OpenSans_700Bold",
    fontSize: 12,
  },

  linkContainer: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },

  link: {
    color: "#333",
    fontFamily: "OpenSans_700Bold",
    marginRight: 5,
  },
});
