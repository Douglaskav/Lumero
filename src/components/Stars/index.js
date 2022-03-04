import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export default Stars = ({ reviewValue }) => {
   const runCallback = (cb) => {
    return cb();
  }; 

  return (
    <View style={styles.container}>
      {
       runCallback(() => {
          const row = [];
          for (var i = 0; i < reviewValue; i++) {
            row.push(<AntDesign key={i} name="star" style={{marginLeft: 10}} color="#FF8759" />);
          }
          return row;
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: -10
  }
});
