import React, { useState, useEffect, createContext, useContext } from "react";

import { checkIfAlreadyHaveAnAudioBeenPlaying } from "./modules";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioStats, setAudioStats] = useState({});
  const [currentChapter, setCurrentChapter] = useState({});

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
        await playbackObj.setOnPlaybackStatusUpdate();
        await playbackObj.unloadAsync();

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
