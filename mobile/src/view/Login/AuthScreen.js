import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Logo from "../../assets/Head.png";
import Ilustration from "../../assets/Login-Image.png";

export default AuthScreen = () => {
  return (
    <SafeAreaView centerContent={true} style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={Logo} style={styles.logo} />
        <Image source={Ilustration} style={styles.ilustration} />

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>Sign in with Google</Text>
        </TouchableOpacity>

        <View style={{ borderColor: "#ddd", borderWidth: 1 }} />

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your email here..."
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your password here..."
          />

          <TouchableOpacity style={styles.button3}>
            <Text style={styles.button3Text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },

  logo: {
    alignSelf: "center",
  },

  ilustration: {
    alignSelf: "center",
    marginTop: 20,
  },

  button1: {
    backgroundColor: "#1877F2",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 5,
  },

  button1Text: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },

  button2: {
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },

  button2Text: {
    color: "#333",
    fontFamily: "Poppins_500Medium",
  },

  inputGroup: {
    width: "100%",
    marginTop: 20,
  },

  input: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#666",
    color: "#333",
    marginBottom: 20,
  },

  label: {
    color: "#333",
    fontFamily: "Poppins_500Medium",
    marginBottom: 2,
  },

  button3: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    marginTop: 10,
  },

  button3Text: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
});
