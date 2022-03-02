import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },

  bookInfoContainer: {
    flexDirection: "row",
  },

  bookInfo: {
    maxWidth: 200,
    flexWrap: "wrap",
    marginLeft: 10,
  },

  bookInfoTitle: {
    color: "#333",
    maxWidth: 200,
    fontSize: 21,
    fontFamily: "NunitoSans_600SemiBold",
  },

  bookAuthorAndStars: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  bookInfoAuthor: {
    color: "#838383",
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
  },

  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  buttonsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  buttonStartListening: {
    backgroundColor: "#FFC163",
    borderRadius: 5,
    width: 240,
    height: 50,
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonStartListeningText: {
    color: "#fff",
    fontFamily: "NunitoSans_500Medium",
    fontSize: 11,
    marginLeft: 10,
  },

  buttonFavorite: {
    marginLeft: 20,
    backgroundColor: "#FFC166",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  topicTitle: {
    fontSize: 18,
    color: "#333",
    fontFamily: "NunitoSans_600SemiBold",
  },

  aboutContainer: {
    marginTop: 25,
    marginBottom: 25,
  },

  aboutText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12,
    color: "#4C4B5A",
    marginTop: 5,
    lineHeight: 18,
  },
});

export default styles;
