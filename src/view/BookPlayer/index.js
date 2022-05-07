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

import globalStyles from "../../styles/";
import styles from "./styles";

import Shimmer from "../../components/Shimmer";

import { usePlayer } from "../../contexts/MusicPlayer";

import millisToMinutesAndSeconds from "../../helpers/MillisToMinutesAndSeconds";

export default BookPlayer = ({ route, navigation }) => {
  const {
    initAudioSystem,
    playAudioAsync,
    audioStats,
    currentChapter,
    NextChapter,
    PrevChapter,
    onDraggingTrackerBarAudio,
  } = usePlayer();

  const [book, setBook] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const { itemId } = route.params;

  useEffect(() => {
    async function getBookById() {
      let response = await axios.get(`book/profile/${itemId}`);

      let audioFiles = JSON.parse(response.data.audio_files);

      await initAudioSystem(audioFiles);
      setBook(response.data);
      setIsVisible(true);
    }

    getBookById();
  }, []);

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
          <Shimmer
            autoRun={true}
            style={{ width: 230, height: 350 }}
            visible={isVisible}
          >
            <Image
              source={{ uri: book.cover }}
              style={styles.bookCover}
              resizeMode="stretch"
            />
          </Shimmer>
        </View>

        <View style={styles.bookTitleAndAuthorContainer}>
          <Shimmer autoRun={true} style={styles.bookTitle} visible={isVisible}>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </Shimmer>
          <Shimmer autoRun={true} style={styles.bookAuthor} visible={isVisible}>
            <Text style={styles.bookAuthor}>
              {book.author} | Capitulo {currentChapter.cap}
            </Text>
          </Shimmer>
        </View>

        <View style={styles.trackContainer}>
          <Shimmer
            autoRun={true}
            style={{ width: 320, height: 10 }}
            visible={isVisible}
          >
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
          </Shimmer>
          <View style={styles.trackInfoContainer}>
            <Shimmer
              style={{ marginTop: 15, width: 30, height: 10 }}
              visible={isVisible}
            >
              <Text style={styles.trackCurrentTime}>
                {millisToMinutesAndSeconds(audioStats.positionMillis)}
              </Text>
            </Shimmer>
            <Shimmer
              style={{ marginTop: 15, width: 30, height: 10 }}
              visible={isVisible}
            >
              <Text style={styles.trackLeftTime}>
                {millisToMinutesAndSeconds(audioStats.durationMillis)}
              </Text>
            </Shimmer>
          </View>
        </View>

        <View style={styles.playerContainer}>
          <Shimmer
            autoRun={true}
            style={{ width: 28, height: 28 }}
            visible={isVisible}
          >
            <TouchableOpacity onPress={PrevChapter}>
              <AntDesign name="fastbackward" size={24} color="#3066FF" />
            </TouchableOpacity>
          </Shimmer>
          <Shimmer
            autoRun={true}
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              marginLeft: 15,
              marginRight: 15,
            }}
            visible={isVisible}
          >
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
          </Shimmer>
          <Shimmer
            autoRun={true}
            style={{ width: 28, height: 28 }}
            visible={isVisible}
          >
            <TouchableOpacity onPress={NextChapter}>
              <AntDesign name="fastforward" size={24} color="#3066FF" />
            </TouchableOpacity>
          </Shimmer>
        </View>
      </View>
    </ScrollView>
  );
};
