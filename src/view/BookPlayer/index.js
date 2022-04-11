import React, { useEffect } from "react";

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

import globalStyles from "../../styles/";
import styles from "./styles";

import { usePlayer } from "../../contexts/MusicPlayer";

import millisToMinutesAndSeconds from "../../helpers/MillisToMinutesAndSeconds";

export default BookPlayer = ({ route, navigation }) => {
  const {
    initAudioSystem,
    playAudioAsync,
    audioStats,
    currentChapter,
    NextChapter,
    getBookById,
    loading,
    book,
    onDraggingTrackerBarAudio,
  } = usePlayer();

  const { itemId } = route.params;

  useEffect(() => {
    async function init() {
      let book = await getBookById(itemId);
      let audioFiles = JSON.parse(book.audio_files);

      await initAudioSystem(audioFiles);
    }

    init();
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
          <Text style={styles.bookAuthor}>
            {book.author} | Capitulo {currentChapter.cap}
          </Text>
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
          <TouchableOpacity>
            <AntDesign name="fastbackward" size={24} color="#3066FF" />
          </TouchableOpacity>
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
          <TouchableOpacity onPress={NextChapter}>
            <AntDesign name="fastforward" size={24} color="#3066FF" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
