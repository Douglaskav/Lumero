import React from "react";
import { View, SafeAreaView, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

import Cover from "../../assets/qwe_download.jpg";
import Logo from "../../assets/LogoScreen.png";

import BookList from "../../components/bookList";

export default HomeScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator="false">
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={Logo} alt="Lumero" style={styles.headerLogo} />
        </View>

        <BookList topicTitle="Recomendamos para você" />
        <BookList topicTitle="Livros desta semana" />
        <BookList topicTitle="Mais lidos de fevereiro" />
      </SafeAreaView>
    </ScrollView>
  );
};
