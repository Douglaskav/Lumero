import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default Stars = ({ note, color = "#FFC166" }) => {
  return (
    <View style={styles.starsContainer}>
      <FontAwesome name="star" size={12} color="#FFC166" />
      <Text style={styles.starTextBook}>4.8</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    alignItems: "center",
  },

  starTextBook: {
    marginLeft: 5,
    color: "#FFC163",
    fontFamily: "NunitoSans_700Bold",
    fontSize: 12,
  },
});
