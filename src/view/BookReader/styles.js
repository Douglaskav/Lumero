import { StyleSheet } from "react-native";
import { fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20
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

  textBook: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12,
    lineHeight: 19,
    color: "#333",
  },

  trackPlayerContainer: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 0,
    marginRight: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bookInfoPlayer: {
    flexDirection: "row",
  },

  titleAndAuthorContainer: { marginLeft: 10 },
  
  bookTitle: {
    fontFamily: "NunitoSans_700Bold",
    color: "#0E091B",
    fontSize: fontSize(10),
    marginBottom: 5
  },

  bookAuthor: {
    fontFamily: "NunitoSans_400Regular",
    color: "#4274FE",
    fontSize: fontSize(9)
  },

  buttonsControlContainer: { flexDirection: "row", alignItems: "center"},

  playButtonContainer: {
    width: 45,
    height: 45,
    marginLeft: 5, 
    marginRight: 5,
    borderRadius: 30,
    backgroundColor: "#4274FE",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
