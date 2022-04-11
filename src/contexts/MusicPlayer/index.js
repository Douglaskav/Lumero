import React, { useState, useEffect, createContext, useContext } from "react";

import {
  checkIfAlreadyHaveAnAudioBeenPlaying,
  clearPlaybackObject,
} from "./modules";

import { Audio } from "expo-av";
import axios from "../../services/api";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioStats, setAudioStats] = useState({});
  const [currentChapter, setCurrentChapter] = useState({});
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  let audioFiles = [];

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function initAudioSystem(soundFiles) {
    await checkIfAlreadyHaveAnAudioBeenPlaying(playbackObj);

    audioFiles = soundFiles;
    await loadAudioAsync(soundFiles[0]);
    await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setLoading(false);
  }

  async function loadAudioAsync(audio) {
    let audioObject = await playbackObj.loadAsync({ uri: audio.uri });

    setCurrentChapter(audio);
    setAudioStats(audioObject);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function onPlaybackStatusUpdate(playbackObject) {
    if (playbackObject.didJustFinish) {
      setCurrentChapter(async (currentChapter) => {
        await clearPlaybackObject(playbackObj);

        let new_chapter = audioFiles[currentChapter.cap];
        let audioObject = await playbackObj.loadAsync(
          { uri: new_chapter.uri },
          { shouldPlay: true }
        );
        await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

        setAudioStats(audioObject);
        setCurrentChapter(new_chapter);
      });

      return;
    }

    setAudioStats(await playbackObj.getStatusAsync());
  }

  async function getBookById(itemId) {
    let response = await axios.get(`book/profile/${itemId}`);

    let strWithoutBrackendAndComas = response.data.categories.replace(/[^\w ]/g, "");
    response.data.categories = strWithoutBrackendAndComas.split(" ");

    setBook(response.data);
    setLoading(false);
    return response.data;
  }

  async function NextChapter() {
    await clearPlaybackObject(playbackObj);

    let new_chapter = audioFiles[currentChapter.cap];

    let audioObject = await playbackObj.loadAsync(
      { uri: new_chapter.uri },
      { shouldPlay: true }
    );
    await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    setAudioStats(audioObject);
    setCurrentChapter(new_chapter);
  }

  async function playAudioAsync() {
    audioStats.isPlaying
      ? setAudioStats(await playbackObj.setStatusAsync({ shouldPlay: false }))
      : setAudioStats(await playbackObj.playAsync());
  }

  return (
    <PlayerContext.Provider
      value={{
        initAudioSystem,
        playAudioAsync,
        audioStats,
        currentChapter,
        NextChapter,
        getBookById,
        book,
        loading,
        onDraggingTrackerBarAudio,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}
