import clearPlaybackObject from "./_clearPlaybackObject";

export default async function verifyIfHaveAnSoundBeenPlaying(playbackObj) {
  const { isLoaded: alreadyHasASoundPlaying } =
    await playbackObj.getStatusAsync();

  if (alreadyHasASoundPlaying) await clearPlaybackObject(playbackObj);
}
