import clearPlaybackObject from "./_clearPlaybackObject";

export default async function verifyIfHaveAnSoundBeenPlaying(playbackObj, interval = null) {
  const { isLoaded: alreadyHasASoundPlaying } =
    await playbackObj.getStatusAsync();

    console.log(interval);

  if (alreadyHasASoundPlaying) {
    clearInterval(interval);
    await clearPlaybackObject(playbackObj);

  }
}
