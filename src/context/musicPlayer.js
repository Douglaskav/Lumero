import React, { useState, useEffect, createContext, useContext } from "react";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioObj, setAudioObj] = useState({});

  async function onPlaybackStatusUpdate() {
    setAudioObj(await playbackObj.getStatusAsync());
  }

  async function onDraggingTrackerAudio(millies) {
    await playbackObj.setPositionAsync(millies);
  }

  async function loadAudioAsync({ uri }) {
    let playbackObject = new Audio.Sound();
    let audioObject = await playbackObject.loadAsync({ uri });

    setPlaybackObj(playbackObject);
    setAudioObj(audioObject);

    return audioObj;
  }

  async function playAudioAsync() {
    await playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    audioObj.isPlaying
      ? setAudioObj(await playbackObj.setStatusAsync({ shouldPlay: false }))
      : setAudioObj(await playbackObj.playAsync());
  }

  return (
    <PlayerContext.Provider
      value={{
        loadAudioAsync,
        playAudioAsync,
        audioStats: audioObj,
        onDraggingTrackerAudio,
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
