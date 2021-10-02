import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Logo from "../../assets/Head.png";
import Csa1 from "../../assets/genres/tech.jpg";

export default CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={Logo} style={{ alignSelf: "center" }} />
        <Text style={styles.textHeader}>Select topics that interest you</Text>

        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 30 }}
        >
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
        </View>

        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 30 }}
        >
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
        </View>

        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 30 }}
        >
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={Csa1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Art</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },

  categoryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },

  categoryText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    marginTop: 5,
  },

  textHeader: {
    fontSize: 14,
    maxWidth: 150,
    alignSelf: "center",
    textAlign: "center",
    color: "#3F3D56",
    fontFamily: "OpenSans_600SemiBold",
    marginTop: 20,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#3F3D56",
    borderRadius: 5,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
