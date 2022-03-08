import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import Cover from "../../assets/thumb.png";
import Stars from "../../components/Stars";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

export default BookItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate("BookProfile")}>
      <Image source={Cover} style={styles.bookCover} />
      <Text style={styles.bookTitle} >Harry Potter e a Pedra Filosofal</Text>
      <View style={styles.bookInfo}>
        <Text style={styles.bookAuthor}>J.K Rowling</Text>
      </View>
    </TouchableOpacity>
  );
};
