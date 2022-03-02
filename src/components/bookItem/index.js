import React from "react";

import { View, Text, Image } from "react-native";

import Cover from "../../assets/thumb.png";
import Stars from "../../components/Stars";

import styles from "./styles";

export default BookItem = () => {
  return (
    <View style={styles.bookItem}>
      <Image source={Cover} style={styles.bookCover} />
      <Text style={styles.bookTitle}>Harry Potter e a Pedra Filosofal</Text>
      <View style={styles.bookInfo}>
        <Text style={styles.bookAuthor}>J.K Rowling</Text>
      </View>
    </View>
  );
};
