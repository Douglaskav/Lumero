import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bookItem: {
    marginRight: 15,
  },

  bookTitle: {
    color: "#333",
    fontSize: 12,
    maxWidth: 100,
    marginTop: 6,
    fontFamily: "NunitoSans_800ExtraBold",
  },

  bookInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookAuthor: {
    fontSize: 10,
    color: "#AAA",
    fontFamily: "NunitoSans_400Regular",
  },
});

export default styles;
