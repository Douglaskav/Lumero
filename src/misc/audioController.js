// play audio
export const play = async (playbackObj, uri) => {
  return await playbackObj.loadAsync({ uri }, { shouldPlay: true });
};

// pause audio
export const pause = async (playbackObj) => {
  return await playbackObj.setStatusAsync({ shouldPlay: false });
};

// resume audio
export const resume = async (playbackObj) => {
  return await playbackObj.playAsync();
};

// select
