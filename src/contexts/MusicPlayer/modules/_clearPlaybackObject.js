export default async function clearPlaybackObject(playbackObj) {
  await playbackObj.setOnPlaybackStatusUpdate();
  await playbackObj.unloadAsync();
}
