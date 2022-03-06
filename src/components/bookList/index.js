import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import BookItem from "../bookItem";
import styles from "./styles";

export default BookList = ({ topicTitle }) => {
  return (
    <View>
      <View style={styles.topicContainer}>
        <Text style={styles.topicTitle}>{topicTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.topicLink}>Ver mais</Text>
        </TouchableOpacity>
      </View>
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
