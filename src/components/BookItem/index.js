import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default BookItem = ({ book }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() =>
        navigation.navigate("BookProfile", {
          itemId: book.id,
        })
      }
    >
      <Image
        source={{ uri: book.cover }}
        style={styles.bookCover}
        resizeMode="stretch"
      />
      <Text style={styles.bookTitle} numberOfLines={2}>
        {book.title}
      </Text>
      <View style={styles.bookInfo}>
        <Text style={styles.bookAuthor} numberOfLines={1}>
          {book.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
