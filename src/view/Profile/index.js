import React from "react";

import { View, Text, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import ProfilePicture from "../../assets/profilepic.jpg";
import styles from "./styles";

import BookList from "../../components/bookList";
import Reviews from "../../components/Reviews";

export default Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.pageHeaderTitle}>Profile</Text>

          <View style={styles.headerIcons}>
            <Feather
              name="bell"
              size={24}
              color="#333"
              style={{ marginRight: 5 }}
            />
          </View>
        </View>

        <View style={styles.profileContainer}>
          <Image source={ProfilePicture} style={styles.profilePicture} />
          <Text style={styles.profileUserName}>Mariana Alves</Text>

          <View style={styles.geralBooksInfoContainer}>
            <View style={styles.geralBookInfoItem}>
              <Text style={styles.geralBookInfoNumber}>16</Text>
              <Text style={styles.geralBookInfoText}>Livros Lidos</Text>
            </View>
            <View
              style={[
                styles.geralBookInfoItem,
                styles.geralBookInfoItemWithBars,
              ]}
            >
              <Text style={styles.geralBookInfoNumber}>3</Text>
              <Text style={styles.geralBookInfoText}>Recomendações</Text>
            </View>
            <View style={styles.geralBookInfoItem}>
              <Text style={styles.geralBookInfoNumber}>10</Text>
              <Text style={styles.geralBookInfoText}>Avaliações</Text>
            </View>
          </View>
        </View>
        <BookList topicTitle="Last Books" />

        <Text style={styles.topicTitle}>Reviews</Text>
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
      </View>
    </ScrollView>
  );
};
