import React from "react";

import { View, Text, Image } from "react-native";

import Cover from "../../assets/qwe_download.jpg";
import Stars from "../../components/Stars";

import styles from "./styles";

export default BookItem = () => {
  return (
    <View style={styles.bookItem}>
      <Image source={Cover} style={styles.bookCover} />
      <Text style={styles.bookTitle}>Tomorrow and Beyond</Text>
      <View style={styles.bookInfo}>
        <Text style={styles.bookAuthor}>Ian Sum...</Text>
        <Stars />
      </View>
    </View>
  );
};
