import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import axios from "../../services/api";

import BookItem from "../BookItem";
import styles from "./styles";

export default BookList = ({ topicTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function getBookDataList() {
      let response = await axios.get("book/list");

      setBookList(response.data);
      setIsVisible(true);
    }

    getBookDataList();
  }, []);

  const renderItem = ({ item }) => (
    <BookItem book={item} isVisible={isVisible} />
  );

  return (
    <View>
      <View style={styles.topicContainer}>
        <Text style={styles.topicTitle}>{topicTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.topicLink}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.booksList}
        data={bookList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
