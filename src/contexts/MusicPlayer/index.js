import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

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

  let timer = useRef();

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function initAudioSystem(soundFiles) {
    await checkIfAlreadyHaveAnAudioBeenPlaying(playbackObj, timer);
    await loadAudioAsync(soundFiles[0]);

    timer.current = await trackerTriggerInterval(soundFiles);
    setAudioFiles(soundFiles);
  }

  async function loadAudioAsync(audio) {
    let audioObject = await playbackObj.loadAsync({ uri: audio.uri });

    setCurrentChapter(audio);
    setAudioStats(audioObject);
  }

  async function trackerTriggerInterval(soundFiles) {
    return setInterval(async () => {
      let playbackStatus = await playbackObj.getStatusAsync();

      if (playbackStatus.durationMillis === playbackStatus.positionMillis) {
        await NextChapter(soundFiles);
      }

      setAudioStats(playbackStatus);
    }, 1000);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function skipChapter() {
    await NextChapter(audioFiles);
  }

  async function backChapter() {
    await PrevChapter(audioFiles);
  }

  async function NextChapter(soundFiles) {
    console.log(soundFiles.length, currentChapter.cap);
    if (currentChapter.cap !== soundFiles.length) {
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
    } else {
      alert("Você chegou ao fim do livro");
      return;
    }
  }

  async function PrevChapter(soundFiles) {
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
        skipChapter,
        backChapter,
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
