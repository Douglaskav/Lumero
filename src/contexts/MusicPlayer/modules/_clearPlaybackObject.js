export default async function clearPlaybackObject(playbackObj) {
  await playbackObj.unloadAsync();
}
