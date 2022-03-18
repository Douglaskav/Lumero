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
import { Feather, AntDesign } from "@expo/vector-icons";

import axios from "../../services/api";
import { Audio } from "expo-av";

import styles from "./styles";
import BookCover from "../../assets/cover.png";
import PlayerControl from "../../components/PlayerControl";

import { play, pause, resume } from "../../misc/audioController";

export default BookPlayer = ({ route, navigation }) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioObj, setAudioObj] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const { itemId } = route.params;

  async function handleAudioPress(audio) {
    // First time
    if (audioObj === null) {
      let playbackObj = new Audio.Sound();

      const status = await play(playbackObj, audio.uri);

      setPlaybackObj(playbackObj);
      setCurrentAudio(audio);
      setAudioObj(status);
    } else if (audioObj.isLoaded && audioObj.isPlaying) {
      const status = await pause(playbackObj);
      setAudioObj(status);
    } else if (
      audioObj.isLoaded &&
      !audioObj.isPlaying &&
      currentAudio.id === audio.id
    ) {
      const status = await resume(playbackObj);

      setAudioObj(status);
    }
  }

  useEffect(() => {
    async function getBookById() {
      let response = await axios.get(`book/profile/${itemId}`);

      setBook(response.data);
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather
            name="arrow-left"
            size={24}
            color="#333"
            onPress={() => navigation.goBack()}
          />
          <Feather name="heart" size={24} color="#333" />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: book.cover }}
            alt={book.title}
            style={{ width: 230, height: 350, borderRadius: 5 }}
            resizeMode="stretch"
          />
        </View>

        <View style={styles.bookTitleAndAuthorContainer}>
          <Text style={styles.bookAuthor}>{book.author}</Text>
          <Text style={styles.bookTitle}>{book.title}</Text>
        </View>

        <View style={styles.trackContainer}>
          <Slider
            style={{ width: 320, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#3066FF"
            thumbTintColor="#3066FF"
            maximumTrackTintColor="#AAAAAA"
          />
          <View style={styles.trackInfoContainer}>
            <Text style={styles.trackCurrentTime}>00:00</Text>
            <Text style={styles.trackLeftTime}>-00:00</Text>
          </View>
        </View>

        <View style={styles.playerContainer}>
          <AntDesign name="fastbackward" size={24} color="#3066FF" />
          <TouchableOpacity
            onPress={() =>
              handleAudioPress({
                id: 1,
                uri: "https://ia802506.us.archive.org/2/items/letters_brides_0709_librivox/letters_of_two_brides_01_debalzac_64kb.mp3",
              })
            }
          >
            <AntDesign
              name="play"
              size={48}
              color="#3066FF"
              style={{ marginLeft: 20, marginRight: 20 }}
            />
          </TouchableOpacity>
          <AntDesign name="fastforward" size={24} color="#3066FF" />
        </View>
      </View>
    </ScrollView>
  );
};
