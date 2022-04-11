import { StyleSheet } from "react-native";
import { width, height, fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  topicTitle: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(16),
    maxWidth: 150,
    color: "#0E091B",
    marginBottom: 5,
    marginLeft: 30,
  },

  reviewsWrapper: { width },

  reviewContainer: {
    margin: 30,
    marginTop: 10,
    marginBottom: 50,
  },

  reviewHeader: { flexDirection: "row" },

  usernameAndStars: { marginLeft: 10 },

  username: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(14),
    color: "#0E091B",
    marginBottom: 5,
  },

  bookname: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: fontSize(12),
    color: "#AAAAAA",
    marginLeft: 5,
    marginTop: 3,
  },

  reviewBody: { marginTop: 15 },

  reviewContent: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: fontSize(12),
    color: "#333333",
  },

  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },

  activeDot: {
    margin: 3,
    color: "#4477FF",
  },

  dot: {
    margin: 3,
    color: "#AAA",
  },
});

export default styles;
