import { StyleSheet } from "react-native";
import { fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 40,
    marginTop: 10,
  },

  bookCoverContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  bookCover: { width: 230, height: 350, borderRadius: 5 },

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
    marginTop: 10,
  },

  bookAuthor: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(10),
    color: "#AAA",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 5,
  },

  trackContainer: {
    marginTop: 20,
  },

  trackInfoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10,
  },

  trackCurrentTime: {
    fontSize: fontSize(10),
    fontFamily: "NunitoSans_600SemiBold",
    color: "#3066FF",
  },

  trackLeftTime: {
    fontSize: fontSize(10),
    fontFamily: "NunitoSans_600SemiBold",
    color: "#AAA",
  },

  playerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
