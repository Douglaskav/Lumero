import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bookItem: {
  marginRight: 15
  },

  bookCover: {
    width: 90,
    height: 140,
    borderRadius: 5,
  },

  bookTitle: {
    color: "#333",
    fontSize: 12,
    maxWidth: 90,
    marginTop: 6,
    fontFamily: "NunitoSans_800ExtraBold",
  },

  bookInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookAuthor: {
    marginTop: 2,
    fontSize: 10,
    color: "#AAA",
    fontFamily: "NunitoSans_400Regular",
    maxWidth: 90
  },
});

export default styles;
