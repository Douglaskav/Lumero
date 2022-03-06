import React from "react";
import { ScrollView, SafeAreaView, Text, View, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import globalStyles from "../../styles/";
import styles from "./styles";

import CoverImg from "../../assets/cover-thumb.png";

import Button from "../../components/Button";
import Reviews from "../../components/Reviews";

const BookProfile = () => {
  return (
    <ScrollView>
      <SafeAreaView style={globalStyles.containerScreen}>
        <View style={styles.headerIcons}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </SafeAreaView>
      <View style={styles.containerThumbTitleAuthor}>
        <Image source={CoverImg} />
        <Text style={styles.bookTitle}>Harry Potter e a Pedra Filosofal</Text>
        <Text style={styles.bookAuthor}>J.K Rowling</Text>
      </View>

      <View style={styles.bookInfoNumbers}>
        <View style={styles.bookInfoItem}>
          <Feather name="clock" size={18} color="#4274FE" />
          <Text style={styles.bookInfoText}>2:43:39</Text>
        </View>

        <View style={styles.userInfoSeparator} />
        <View style={styles.bookInfoItem}>
          <Feather name="book-open" size={18} color="#FF6227" />
          <Text style={styles.bookInfoText}>456 Pgs</Text>
        </View>

        <View style={styles.userInfoSeparator} />
        <View style={styles.bookInfoItem}>
          <Feather name="star" size={18} color="#FBAA1F" />
          <Text style={styles.bookInfoText}>5.0</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 30,
          marginTop: 15,
          marginBottom: 0,
        }}
      >
        <Button text="Ler Livro" backgroundColor="#FF6227" iconName="play" />
        <View style={{ marginLeft: 5, marginRight: 5 }} />
        <Button text="Favoritar" backgroundColor="#4274FE" iconName="heart" />
      </View>

      <View style={styles.separator} />

      <View style={styles.synopsysContainer}>
        <Text style={styles.topicTitle}>Sinopse</Text>
        <Text style={styles.synopsysText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>

        <View style={styles.categories}>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Classico</Text>
          </View>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Magia</Text>
          </View>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Ficção</Text>
          </View>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Aventura</Text>
          </View>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Fantasy</Text>
          </View>
          <View style={styles.categorie}>
            <Text style={styles.categorieText}>Trilogia</Text>
          </View>
        </View>
      </View>

      <Reviews />
    </ScrollView>
  );
};

export default BookProfile;
