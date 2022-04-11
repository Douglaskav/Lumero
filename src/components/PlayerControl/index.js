import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default PlayerControl = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="fast-forward"
        style={styles.PlayerButton}
        size={32}
        color="#2F2E41"
      />
      <MaterialIcons
        name="forward-5"
        style={styles.PlayerButton}
        size={32}
        color="#2F2E41"
      />
      <View style={styles.playButton}>
        <MaterialIcons name="play-arrow" size={36} color="#fff" />
      </View>
      <MaterialIcons
        name="replay-5"
        style={styles.PlayerButton}
        size={32}
        color="#2F2E41"
      />
      <MaterialIcons
        name="fast-rewind"
        style={styles.PlayerButton}
        size={32}
        color="#2F2E41"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  PlayerButton: {
    marginLeft: 5,
    marginRight: 5,
  },

  playButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F2E41",
    borderRadius: 100,
  },
});
