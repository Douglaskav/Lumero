import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import Logo from "../../assets/Head.png";

export default RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={Logo} style={styles.logo} />

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Type your name here." />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Type your email here." />

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "46%" }}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
              />
            </View>
            <View style={{ width: "46%" }}>
              <Text style={styles.label}>Repeat Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button3}>
          <Text style={styles.button3Text}>Create a new account</Text>
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            margin: 20,
            borderColor: "#e5e5e5",
            borderWidth: 1,
          }}
        />

        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.link}>You don’t have a account ?</Text>
        </TouchableOpacity>
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
  button1: {
    backgroundColor: "#1877F2",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 5,
  },

  button1Text: {
    color: "#fff",
    fontFamily: "NunitoSans_400Regular",
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
    fontFamily: "NunitoSans_400Regular",
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
    fontSize: 12,
    borderRadius: 5,
    fontFamily: "NunitoSans_400Regular",
    borderColor: "#666",
    color: "#333",
    marginBottom: 20,
  },

  label: {
    color: "#333",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12,
    marginBottom: 2,
  },

  button3: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    fontFamily: "NunitoSans_400Regular",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    marginTop: 10,
  },

  button3Text: {
    color: "#fff",
    fontFamily: "NunitoSans_400Regular",
  },

  linkContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

  link: {
    textAlign: "center",
    fontSize: 12,
    color: "#333",
    fontFamily: "NunitoSans_600SemiBold",
  },
});
