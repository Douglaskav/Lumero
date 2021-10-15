import React from "react";

import { View, Text, ScrollView } from "react-native";

import BookItem from "../bookItem";
import styles from "./styles";

export default BookList = ({ topicTitle }) => {
  return (
    <View>
      <Text style={styles.topicTitle}>{topicTitle}</Text>
      {/* Remember turns this into a flat list*/}
      <ScrollView
        style={styles.booksList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </ScrollView>
    </View>
  );
};
