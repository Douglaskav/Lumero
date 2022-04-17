import React, { useState, useEffect, createContext, useContext } from "react";

import {
  checkIfAlreadyHaveAnAudioBeenPlaying,
  clearPlaybackObject,
} from "./modules";

import { Audio } from "expo-av";

const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [audioStats, setAudioStats] = useState({});
  const [currentChapter, setCurrentChapter] = useState({});
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function skipChapter(soundFiles) {
    setCurrentChapter(async (currentChapter) => {
      await clearPlaybackObject(playbackObj);

      let new_chapter = soundFiles[currentChapter.cap];

      if (new_chapter) {
        let audioObject = await playbackObj.loadAsync(
          { uri: new_chapter.uri },
          { shouldPlay: true }
        );

        setAudioStats(audioObject);
        setCurrentChapter(new_chapter);
      }
    });

    return;
  }

  async function backChapter(soundFiles) {
    if (currentChapter.cap > 1) {
      setCurrentChapter(async (currentChapter) => {
        await clearPlaybackObject(playbackObj);

        let new_chapter = soundFiles[currentChapter.cap - 2];

        if (new_chapter) {
          let audioObject = await playbackObj.loadAsync(
            { uri: new_chapter.uri },
            { shouldPlay: true }
          );

          setAudioStats(audioObject);
          setCurrentChapter(new_chapter);
        }

        return;
      });
    } else {
      alert("Você ainda está no primeiro capítulo");
      return;
    }
  }

  async function trackerTriggerInterval(soundFiles) {
    return setInterval(async () => {
      let playbackStatus = await playbackObj.getStatusAsync();

      if (playbackStatus.durationMillis === playbackStatus.positionMillis) {
        await skipChapter(soundFiles);
      }

      setAudioStats(playbackStatus);
    }, 1000);
  }

  async function initAudioSystem(soundFiles) {
    await checkIfAlreadyHaveAnAudioBeenPlaying(playbackObj, trackerTimer);
    await loadAudioAsync(soundFiles[0]);

    setAudioFiles(soundFiles);

    let trackerTimer = trackerTriggerInterval(soundFiles);
  }

  async function loadAudioAsync(audio) {
    let audioObject = await playbackObj.loadAsync({ uri: audio.uri });

    setCurrentChapter(audio);
    setAudioStats(audioObject);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function NextChapter() {
    await skipChapter(audioFiles);
  }

  async function PrevChapter() {
    await backChapter(audioFiles);
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
        PrevChapter,
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
