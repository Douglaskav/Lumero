import React from "react";

import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather, AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import BookCover from "../../assets/cover.png";
import PlayerControl from "../../components/PlayerControl";

export default BookPlayer = () => {
  return (
    <ScrollView showsverticalScrollIndicator={false} style={{backgroundColor: "#FFF"}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="arrow-left" size={24} color="#333" />
          <Feather name="heart" size={24} color="#333" />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={BookCover}
            alt="Harry Potter e a Pedra Filosofal"
            style={{ width: 230, height: 350, borderRadius: 5 }}
          />
        </View>

        <View style={styles.bookTitleAndAuthorContainer}>
          <Text style={styles.bookAuthor}>J.K Rowling</Text>
          <Text style={styles.bookTitle}>
            Harry Potter and the Goblet of Fire
          </Text>
        </View>

        <View style={styles.trackContainer}>
          <Slider
            style={{ width: 320, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#3066FF"
            thumbTintColor="#3066FF"
            maximumTrackTintColor="#AAAAAA"
          />
          <View style={styles.trackInfoContainer}>
            <Text style={styles.trackCurrentTime}>21:30</Text>
            <Text style={styles.trackLeftTime}>-59:30</Text>
          </View>
        </View>

        <View style={styles.playerContainer}>
          <AntDesign name="fastbackward" size={24} color="#3066FF" />
          <AntDesign
            name="pausecircle"
            size={48}
            color="#3066FF"
            style={{ marginLeft: 20, marginRight: 20 }}
          />
          <AntDesign name="fastforward" size={24} color="#3066FF" />
        </View>
      </View>
    </ScrollView>
  );
};
