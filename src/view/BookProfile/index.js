import React, { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import globalStyles from "../../styles/";
import styles from "./styles";

import Button from "../../components/Button";
import Reviews from "../../components/Reviews";

// Usar todos os getBookById no context
// Quando o usuário apertar para pular o capitulo ele vai:
// Não deixar ele apertar de novo
// Aparecer um loading

const BookProfile = ({ route, navigation }) => {
  const { user } = useAuth();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = route.params;

  useEffect(() => {
    async function getBookById() {
      let response = await api.get(`book/profile/${itemId}`);
      let strWithoutBrackendAndComas = response.data.categories.replace(
        /[^\w ]/g,
        ""
      );
      response.data.categories = strWithoutBrackendAndComas.split(" ");

      setBook(response.data);
      setLoading(false);
    }

    getBookById();
  }, []);

  async function handleFavoritedBook(BookId) {
    let userFav = await api.get(`user/favoriteBooks/${user.id}`);

    for (let i = 0; i < userFav.data.favorites_books.length; i++) {
      if (userFav.data.favorites_books[i].id === BookId) {
        alert("O livro já está no seus favoritos");
        return;
      }
    }

    await api.post(`user/addFavoriteBook`, { UserId: user.id, BookId });
    navigation.navigate(`Favorites`);
  }

  if (loading) return <ActivityIndicator size="large" color="#666" />;

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <SafeAreaView style={globalStyles.containerScreen}>
        <View style={styles.headerIcons}>
          <Ionicons
            name="chevron-back"
            onPress={() => navigation.goBack()}
            size={24}
            color="black"
          />
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </SafeAreaView>
      <View style={styles.containerThumbTitleAuthor}>
        <Text>{loading.current}</Text>
        <Image
          source={{ uri: book.cover }}
          style={styles.bookCover}
          resizeMode="stretch"
        />
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
      </View>

      <View style={styles.bookInfoNumbers}>
        <View style={styles.bookInfoItem}>
          <Feather name="clock" size={18} color="#4274FE" />
          <Text style={styles.bookInfoText}>{book.time}</Text>
        </View>

        <View style={styles.userInfoSeparator} />
        <View style={styles.bookInfoItem}>
          <Feather name="book-open" size={18} color="#FF6227" />
          <Text style={styles.bookInfoText}>{book.pages}</Text>
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
        <Button
          text="Ler Livro"
          onPress={() =>
            navigation.navigate("BookPlayer", {
              itemId: book.id,
            })
          }
          backgroundColor="#FF6227"
          iconName="play"
        />
        <View style={{ marginLeft: 5, marginRight: 5 }} />
        <Button
          onPress={() => {
            handleFavoritedBook(book.id);
          }}
          text="Favoritar"
          backgroundColor="#4274FE"
          iconName="heart"
        />
      </View>

      <View style={styles.separator} />

      <View style={styles.synopsysContainer}>
        <Text style={styles.topicTitle}>Sinopse</Text>
        <Text style={styles.synopsysText} numberOfLines={6}>
          {book.synopsis}
        </Text>

        <View style={styles.categories}>
          {book.categories.map((item, index) => {
            return (
              <View style={styles.categorie} key={index}>
                <Text style={styles.categorieText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <Reviews reviews={book.Reviews} />
    </ScrollView>
  );
};

export default BookProfile;
