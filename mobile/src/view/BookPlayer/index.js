import React from "react";

import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import BookCover from "../../assets/cover2.png";
import PlayerControl from "../../components/PlayerControl";

export default BookPlayer = () => {
  return (
    <ScrollView showsverticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="#333" />
        <Feather name="heart" size={24} color="#333" />
      </View>

      <View style={styles.bookCoverContainer}>
        <Image source={BookCover} style={styles.bookCover} />
      </View>

      <View style={styles.bookTitleAndAuthorContainer}>
        <Text style={styles.bookTitle}>
          Harry Potter and the Goblet of Fire
        </Text>
        <Text style={styles.bookAuthor}>J.K Rowling</Text>
      </View>

      <View style={styles.capAndReaderButtonContainer}>
        <View style={styles.capContainer}>
          <Text style={styles.capText}>Capitulo 07/36</Text>
        </View>
        <TouchableOpacity style={styles.readerButtonTextContainer}>
          <Text style={styles.readerButtonText}>Read the book</Text>
          <Feather name="arrow-right" size={16} color="#3F3F66" />
        </TouchableOpacity>
      </View>

      <View style={styles.controlContainer}>
        <Slider
          style={styles.controlTime}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFC163"
          thumbTintColor="#FFC166"
        />
        <View style={styles.timesTextContainer}>
          <Text style={styles.startTimeText}>26:14</Text>
          <Text style={styles.endTimeText}>-54:12</Text>
        </View>
      </View>

      <PlayerControl />
    </View>
    </ScrollView>
  );
};
