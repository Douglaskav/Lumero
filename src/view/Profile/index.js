import React, { useState } from "react";

import { View, Text, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import ProfilePicture from "../../assets/profilepic.jpg";

import styles from "./styles";
import globalStyles from "../../styles/";

import BookList from "../../components/bookList";
import Reviews from "../../components/Reviews";

export default Profile = () => {
  return (
    <ScrollView style={{backgroundColor: "#FFF"}}>
      <View style={globalStyles.containerScreen}>
        <View style={styles.profilePictureContainer}>
          <Image source={ProfilePicture} style={styles.profilePic} />
          <Text style={styles.profileUsername}>Mariana Alves</Text>
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
        <BookList topicTitle="Ultimos Livros" />
      </View>

      <Reviews />
    </ScrollView>
  );
};
