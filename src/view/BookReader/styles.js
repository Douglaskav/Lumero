import { StyleSheet } from "react-native";
import { height, fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
  },

  capContainer: {
    margin: 15,
  },

  capText: {
    textAlign: "center",
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 14,
    color: "#333",
  },

  textContainer: {
    height: height - 140,
  },

  textBook: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12,
    lineHeight: 19,
    color: "#333",
  },

  trackPlayerContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    bottom: 0,
  },

  bookInfoPlayer: {
    flexDirection: "row",
  },

  titleAndAuthorContainer: { marginLeft: 10 },

  bookTitle: {
    fontFamily: "NunitoSans_700Bold",
    color: "#0E091B",
    fontSize: fontSize(10),
    marginBottom: 5,
  },

  bookAuthor: {
    fontFamily: "NunitoSans_400Regular",
    color: "#4274FE",
    fontSize: fontSize(9),
  },

  buttonsControlContainer: { flexDirection: "row", alignItems: "center" },

  playButtonContainer: {
    width: 45,
    height: 45,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
