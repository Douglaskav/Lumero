import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import axios from "../../services/api";

import Shimmer from "react-native-shimmer";

import globalStyles from "../../styles/";
import styles from "./styles";

import { usePlayer } from "../../context/musicPlayer";

export default BookPlayer = ({ route, navigation }) => {
  const {
    initAudioSystem,
    playAudioAsync,
    audioStats,
    onDraggingTrackerBarAudio,
  } = usePlayer();

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = route.params;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  useEffect(() => {
    async function getBookById() {
      let response = await axios.get(`book/profile/${itemId}`);

      let audioFiles = JSON.parse(response.data.audio_files);

      setBook(response.data);
      await initAudioSystem(audioFiles);
      setLoading(false);
    }

    getBookById();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#666" />;

  return (
    <ScrollView
      showsverticalScrollIndicator={false}
      style={{ backgroundColor: "#FFF" }}
    >
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

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: book.cover }}
            style={styles.bookCover}
            resizeMode="stretch"
          />
        </View>

        <View style={styles.bookTitleAndAuthorContainer}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
        </View>

        <View style={styles.trackContainer}>
          <Slider
            style={{ width: 320, height: 40 }}
            minimumValue={0}
            value={audioStats.positionMillis}
            maximumValue={audioStats.durationMillis}
            onValueChange={(millis) => onDraggingTrackerBarAudio(millis)}
            minimumTrackTintColor="#3066FF"
            thumbTintColor="#3066FF"
            maximumTrackTintColor="#AAAAAA"
          />
          <View style={styles.trackInfoContainer}>
            <Text style={styles.trackCurrentTime}>
              {millisToMinutesAndSeconds(audioStats.positionMillis)}
            </Text>
            <Text style={styles.trackLeftTime}>
              {millisToMinutesAndSeconds(audioStats.durationMillis)}
            </Text>
          </View>
        </View>

        <View style={styles.playerContainer}>
          <AntDesign name="fastbackward" size={24} color="#3066FF" />
          <TouchableOpacity onPress={playAudioAsync}>
            {audioStats.isPlaying ? (
              <AntDesign
                name="pausecircle"
                size={48}
                color="#3066FF"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
            ) : (
              <AntDesign
                name="play"
                size={48}
                color="#3066FF"
                style={{ marginLeft: 20, marginRight: 20 }}
              />
            )}
          </TouchableOpacity>
          <AntDesign name="fastforward" size={24} color="#3066FF" />
        </View>
      </View>
    </ScrollView>
  );
};
