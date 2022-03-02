import { StyleSheet } from "react-native";
import { fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },

  bookCoverContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  bookCover: {
    width: 180,
    height: 250,
  },

  bookTitleAndAuthorContainer: {
    marginTop: 20,
    marginBottom: 15,
  },

  bookTitle: {
    fontFamily: "NunitoSans_700Bold",
    maxWidth: 230,
    fontSize: fontSize(18),
    alignSelf: "center",
    textAlign: "center",
    color: "#0E091B",
  },

  bookAuthor: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(10),
    color: "#AAA",
    textAlign: "center",
  },

  trackInfoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10
  },

  trackCurrentTime: {
    fontSize: fontSize(10),
    fontFamily: "NunitoSans_600SemiBold",
    color: "#3066FF"
  },

  trackLeftTime: {
    fontSize: fontSize(10),
    fontFamily: "NunitoSans_600SemiBold",
    color: "#AAA"
  },

  playerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default styles;
