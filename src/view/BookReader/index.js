import React from "react";

import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import Cover from "../../assets/cover.png";

export default BookReader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="#333" />
        <Feather name="heart" size={24} color="#333" />
      </View>

      <View style={styles.capContainer}>
        <Text style={styles.capText}>Capítulo 7</Text>
      </View>

      <ScrollView style={styles.textContainer}>
        <Text style={styles.textBook}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like). Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words.
        </Text>
      </ScrollView>

      <View style={styles.trackPlayerContainer}>
        <View style={styles.bookInfoPlayer}>
          <Image source={Cover} style={{ width: 56, height: 56, borderRadius: 5 }} />
          <View style={styles.titleAndAuthorContainer}>
            <Text style={styles.bookTitle}>Harry Potter e a ped...</Text>
            <Text style={styles.bookAuthor}>J.K Rowling</Text>
          </View>
        </View>

        <View style={styles.buttonsControlContainer}>
          <Feather name="skip-back" size={24} color="#4274FE" />
          <TouchableOpacity style={styles.playButtonContainer}>
            <Feather name="play" size={24} color="#FFF" />
          </TouchableOpacity>
          <Feather name="skip-forward" size={24} color="#4274FE" />
        </View>
      </View>
    </View>
  );
};
