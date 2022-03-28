import React, { useState, useEffect, createContext, useContext } from "react";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioObj, setAudioObj] = useState({});
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentChapter, setCurrentChapter] = useState({});

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

    setAudioFiles(audioFiles);
    await loadAudioAsync(audioFiles[0]);
  }

  async function loadAudioAsync(chapter) {
    let audioObject = await playbackObj.loadAsync({ uri: chapter.uri });
    setAudioObj(audioObject);
    setCurrentChapter(chapter);
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

  async function audioHasBeenFinish() {}

  async function NextChapter() {
    // Verificar se nao e o utlimo item.
    if (currentChapter.cap === audioFiles.length) {
      alert("Este e o fim do livro");
      return;
    }

    await playbackObj.unloadAsync();

    let chapter = audioFiles[currentChapter.cap];

    let audioObject = await playbackObj.loadAsync(
      { uri: chapter.uri },
      { shouldPlay: true }
    );
    setAudioObj(audioObject);
    setCurrentChapter(chapter);
  }

  async function PrevChapter() {
    await playbackObj.unloadAsync();

    let chapter = audioFiles[currentChapter.cap - 2];
    let audioObject = await playbackObj.loadAsync(
      { uri: chapter.uri },
      { shouldPlay: true }
    );
    setAudioObj(audioObject);
    setCurrentChapter(chapter);
  }

  return (
    <PlayerContext.Provider
      value={{
        initAudioSystem,
        playAudioAsync,
        audioStats: audioObj,
        onDraggingTrackerBarAudio,
        currentChapter,
        NextChapter,
        PrevChapter,
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
