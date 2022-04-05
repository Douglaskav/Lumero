import React, { useState, useEffect, createContext, useContext } from "react";

import { checkIfAlreadyHaveAnAudioBeenPlaying } from "./modules";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioStats, setAudioStats] = useState({});

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function initAudioSystem(soundFiles) {
    await checkIfAlreadyHaveAnAudioBeenPlaying(playbackObj);

    await loadAudioAsync(soundFiles[0]);
    await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  }

  async function loadAudioAsync(audio) {
    let audioObject = await playbackObj.loadAsync({ uri: audio.uri });
    setAudioStats(audioObject);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function onPlaybackStatusUpdate({ didJustFinish }) {
    if (didJustFinish) {
      alert("O livro terminou!");
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
