import { StyleSheet } from "react-native";

import { fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  headerIcons: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerThumbTitleAuthor: {
    alignItems: "center",
    marginTop: 20,
  },

  bookTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(16),
    textAlign: "center",
    maxWidth: 280,
    marginTop: 20,
  },

  bookAuthor: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: fontSize(10),
    textAlign: "center",
    maxWidth: 280,
    marginTop: 5,
    color: "#AAA",
  },

  bookInfoNumbers: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
  },

  userInfoSeparator: {
    width: 1,
    height: 20,
    backgroundColor: "#ddd",
  },

  bookInfoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookInfoText: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: fontSize(10),
    color: "#0E091B",
    marginLeft: 10,
  },

  separator: {
    backgroundColor: "#eee",
    height: 1,
  },

  synopsysContainer: {
    margin: 30,
    marginTop: 20,
  },

  topicTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(16),
    color: "#0E091B",
    marginBottom: 10,
  },

  synopsysText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: fontSize(11),
    color: "#0E091B",
  },

  categories: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
  },

  categorie: {
    backgroundColor: "#DDE6FF",
    padding: 5,
    borderRadius: 15,
    minWidth: 90,
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },

  categorieText: {
    fontFamily: "NunitoSans_700Bold",
    color: "#3066FF",
  },
});

export default styles;
