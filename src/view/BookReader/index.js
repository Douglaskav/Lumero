import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import globalStyles from "../../styles";
import styles from "./styles";

import api from "../../services/api";
import axios from "axios";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import { usePlayer } from "../../contexts/MusicPlayer";

export default BookReader = ({ route, navigation }) => {
  const {
    playAudioAsync,
    audioStats,
    NextChapter,
    PrevChapter,
    currentChapter,
  } = usePlayer();

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={globalStyles.containerScreen}>
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="#333"
            onPress={() => navigation.goBack()}
          />

          <Ionicons name="heart-outline" size={24} color="#333" />
        </View>

        <ScrollView>
          <WebView source={{ uri: "https://reactnative.dev/" }} />
        </ScrollView>
      </View>

      <View style={styles.trackPlayerContainer}>
        <View style={styles.bookInfoPlayer}>
          <Image
            source={{ uri: book.cover }}
            style={{ width: 56, height: 64, borderRadius: 5 }}
            resizeMode="stretch"
          />
          <View style={styles.titleAndAuthorContainer}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>
          </View>
        </View>

        <View style={styles.buttonsControlContainer}>
          <TouchableOpacity onPress={PrevChapter}>
            <AntDesign name="fastbackward" size={24} color="#3066FF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={playAudioAsync}
            style={styles.playButtonContainer}
          >
            {audioStats.isPlaying ? (
              <AntDesign name="pausecircle" size={42} color="#3066FF" />
            ) : (
              <AntDesign name="play" size={42} color="#3066FF" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={NextChapter}>
            <AntDesign name="fastforward" size={24} color="#3066FF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
