import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";

import styles from "./styles";

import Logo from "../../assets/LogoScreen.png";

import BookList from "../../components/BookList";

export default HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator="false"
      style={{ backgroundColor: "#FFF" }}
    >
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
