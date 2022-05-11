import React, { useEffect, useState } from "react";

import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";

import ProfilePicture from "../../assets/profilepic.jpg";

import { useAuth } from "../../contexts/auth";

import styles from "./styles";
import globalStyles from "../../styles/";

import BookList from "../../components/BookList";
import api from "../../services/api";
import Reviews from "../../components/Reviews";
import { useFocusEffect } from "@react-navigation/native";

export default Profile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [lastReviews, setLastReviews] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function getTheThreeLastReviews() {
        let response = await api.get(`review/${user.id}`);
        setLastReviews(response.data.reviews);
      }

      getTheThreeLastReviews();
      setIsLoading(false);
    }, [])
  );

  if (isLoading) return <ActivityIndicator size="large" color="#666" />

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View style={globalStyles.containerScreen}>
        <View style={styles.profilePictureContainer}>
          <Image source={ProfilePicture} style={styles.profilePic} />
          <Text style={styles.profileUsername}>{user.username}</Text>
        </View>
      </View>

      <View style={styles.userInfoNumbers}>
        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText1, styles.userInfoValue]}>16</Text>
          <Text style={styles.userInfoItemLabel}>Livros Lidos</Text>
        </View>

        <View style={styles.userInfoSeparator} />

        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText2, styles.userInfoValue]}>3</Text>
          <Text style={styles.userInfoItemLabel}>Recomendações</Text>
        </View>

        <View style={styles.userInfoSeparator} />

        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText3, styles.userInfoValue]}>10</Text>
          <Text style={styles.userInfoItemLabel}>Comentarios</Text>
        </View>
      </View>

      <View style={{ margin: 30 }}>
        <BookList topicTitle="Livros Favoritos" favorites={true} />
      </View>

      <Reviews reviews={lastReviews} />
    </ScrollView>
  );
};
