import React, { useState, useEffect, createContext, useContext } from "react";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioObj, setAudioObj] = useState({});

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function initAudioSystem(audioFiles) {
    const { isLoaded: alreadyHaveAnSoundBeenPlaying } =
      await playbackObj.getStatusAsync();

    if (alreadyHaveAnSoundBeenPlaying) await playbackObj.unloadAsync();

    setInterval(() => {
      onPlaybackStatusUpdate();
    }, 1000);

    await loadAudioAsync(audioFiles[0]);
  }

  async function loadAudioAsync({ uri }) {
    let audioObject = await playbackObj.loadAsync({ uri });
    setAudioObj(audioObject);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function onPlaybackStatusUpdate() {
    setAudioObj(await playbackObj.getStatusAsync());
  }

  async function playAudioAsync() {
    audioObj.isPlaying
      ? setAudioObj(await playbackObj.setStatusAsync({ shouldPlay: false }))
      : setAudioObj(await playbackObj.playAsync());
  }

  return (
    <PlayerContext.Provider
      value={{
        initAudioSystem,
        playAudioAsync,
        audioStats: audioObj,
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
