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

  let audioFiles = useRef();
  let trackerTimer = useRef();

  useEffect(() => {
    let playbackObject = new Audio.Sound();
    setPlaybackObj(playbackObject);
  }, []);

  async function initAudioSystem(soundFiles) {
    audioFiles.current = soundFiles;

    await checkIfAlreadyHaveAnAudioBeenPlaying(playbackObj, trackerTimer);
    await loadAudioAsync(audioFiles.current[0]);

    trackerTimer.current = await trackerTriggerInterval();
  }

  async function loadAudioAsync(audio) {
    let audioObject = await playbackObj.loadAsync({ uri: audio.uri });

    setCurrentChapter(audio);
    setAudioStats(audioObject);
  }

  async function trackerTriggerInterval() {
    return setInterval(async () => {
      let playbackStatus = await playbackObj.getStatusAsync();

      if (playbackStatus.durationMillis === playbackStatus.positionMillis) {
        await NextChapter();
      }

      setAudioStats(playbackStatus);
    }, 1000);
  }

  async function onDraggingTrackerBarAudio(millis) {
    await playbackObj.setPositionAsync(millis);
  }

  async function NextChapter() {
    if (currentChapter.cap !== audioFiles.current.length) {
      await changeChapter();
    } else {
      alertMessage("Você chegou ao fim do livro");
    }
  }

  async function PrevChapter() {
    if (currentChapter.cap > 1) {
      changeChapter(2);
    } else {
      alertMessage("Você ainda está no primeiro capítulo");
    }
  }

  async function changeChapter(goBack = 0) {
    setCurrentChapter(async (currentChapter) => {
      await clearPlaybackObject(playbackObj);

      let new_chapter = audioFiles.current[currentChapter.cap - goBack];

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

  function alertMessage(msg) {
    alert(msg);
    return;
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
