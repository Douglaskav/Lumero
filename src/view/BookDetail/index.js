import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";
import Cover from "../../assets/qwe_download.jpg";
import CategoryItem from "../../components/CategoryItem";
import Reviews from "../../components/Reviews";

export default BookDetail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="arrow-left" size={24} color="#333" />
          <Ionicons name="share-social-outline" size={24} color="#333" />
        </View>

        <View style={styles.bookInfoContainer}>
          <Image source={Cover} style={{ width: 120, height: 170 }} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookInfoTitle}>
              Harry Potter and the sorcerer’s st...
            </Text>
            <View style={styles.bookAuthorAndStars}>
              <Text style={styles.bookInfoAuthor}>J.K Rowling</Text>
              <Stars />
            </View>
            <View style={styles.categoriesContainer}>
              <CategoryItem category="Magic" />
              <CategoryItem category="Adventure" />
              <CategoryItem category="Classic" />
              <CategoryItem category="Fantasy" />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonStartListening}>
            <FontAwesome5 name="headphones" size={14} color="#fff" />
            <Text style={styles.buttonStartListeningText}>Start Listening</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFavorite}>
            <Feather name="heart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.topicTitle}>About</Text>
          <Text style={styles.aboutText}>
            Parents need to know that although the bestselling Hunger Games
            books are enormously popular with tweens, there's a clear
            distinction between reading about violence and seeing it portrayed
            on screen in The Hunger Games. Developmentally.
          </Text>
        </View>
    
         <Text style={styles.topicTitle}>Reviews</Text>
        <Reviews />
        <Reviews />
        <Reviews />
      </View>
    </ScrollView>
  );
};
