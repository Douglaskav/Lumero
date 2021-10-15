import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { Feather, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

import Cover from "../../assets/qwe_download.jpg";
import BookList from "../../components/bookList";

export default HomeScreen = () => {
  return (
    <ScrollView
      style={{ marginRight: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageHeaderTitle}>Home</Text>

          <View style={styles.headerIcons}>
            <Feather
              name="bell"
              size={24}
              color="#333"
              style={{ marginRight: 5 }}
            />
            <Feather
              name="search"
              size={24}
              color="#333"
              style={{ marginLeft: 5 }}
            />
          </View>
        </View>

        <View>
          <Text style={[styles.topicTitle, { marginTop: 20 }]}>
            You were reading
          </Text>
          <View style={styles.lastBookReadedContainer}>
            <Image source={Cover} style={styles.lastBookReadedCover} />
            <View style={styles.lastBookReadedInfo}>
              <View style={styles.lastBookReadedTitleContainer}>
                <Text style={styles.lastBookReadedTitle}>
                  Tomorrow and Beyond
                </Text>
                <Feather
                  name="heart"
                  color="#333"
                  size={24}
                  style={{ flex: 1 }}
                />
              </View>
              <Text style={styles.lastBookReadedAuthor}>Ian Summers</Text>

              <View style={styles.reactionContainer}>
                <View style={styles.completeRectangle}>
                  <Text style={{ fontSize: 12 }}>59% Complete</Text>
                </View>

                <View style={styles.starsContainer}>
                  <FontAwesome name="star" size={14} color="#FFC166" />
                  <Text style={styles.starText}>4.8</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <BookList topicTitle="Weekly Recomendation" />
        <BookList topicTitle="Most Ranked" />
        <BookList topicTitle="Today For You" />
      </View>
    </ScrollView>
  );
};
