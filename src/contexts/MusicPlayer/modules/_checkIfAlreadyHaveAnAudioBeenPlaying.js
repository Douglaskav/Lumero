import clearPlaybackObject from "./_clearPlaybackObject";

export default async function verifyIfHaveAnSoundBeenPlaying(playbackObj, timerObj) {
  const { isLoaded: alreadyHasASoundPlaying } =
    await playbackObj.getStatusAsync();

  if (alreadyHasASoundPlaying) {
    await clearInterval(timerObj.current);
    await clearPlaybackObject(playbackObj);
  }
}
