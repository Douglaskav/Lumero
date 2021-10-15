import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bookItem: {
    marginRight: 15,
  },

  bookTitle: {
    color: "#333",
    fontSize: 14,
    maxWidth: 100,
    marginTop: 6,
    fontFamily: "OpenSans_600SemiBold",
  },

  bookInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookAuthor: {
    fontSize: 12,
    color: "#838383",
    fontFamily: "OpenSans_400Regular",
  },

  starsContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
    alignItems: "center",
  },

  starTextBook: {
    marginLeft: 5,
    color: "#FFC163",
    fontFamily: "OpenSans_700Bold",
    fontSize: 12,
  },

  bookCover: {
    width: 100,
    height: 130,
  },
});

export default styles;
