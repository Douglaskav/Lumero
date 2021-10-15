import React from "react";

import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Cover from "../../assets/qwe_download.jpg";

import styles from "./styles";

export default BookItem = () => {
  return (
    <View style={styles.bookItem}>
      <Image source={Cover} style={styles.bookCover} />
      <Text style={styles.bookTitle}>Tomorrow and Beyond</Text>
      <View style={styles.bookInfo}>
        <Text style={styles.bookAuthor}>Ian Sum...</Text>
        <View style={styles.starsContainer}>
          <FontAwesome name="star" size={12} color="#FFC166" />
          <Text style={styles.starTextBook}>4.8</Text>
        </View>
      </View>
    </View>
  );
};
