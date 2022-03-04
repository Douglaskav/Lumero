import { StyleSheet } from "react-native";
import { width, height, fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },

  profilePic: {
    width: 115,
    height: 115,
    borderRadius: 100,
  },

  profileUsername: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(18),
    color: "#0E091B",
    textAlign: "center",
    marginTop: 15,
  },

  userInfoNumbers: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },

  userInfoItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  userInfoSeparator: {
    width: 1,
    height: 60,
    backgroundColor: "#ddd",
  },

  userInfoValue: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: fontSize(18),
    alignItems: "center",
    justifyContent: "center",
  },

  colorText1: { color: "#4477FF" },
  colorText2: { color: "#FF6227" },
  colorText3: { color: "#FBAA1F" },

  userInfoItemLabel: {
    fontFamily: "NunitoSans_700Bold",
    color: "#0E091B",
    fontSize: fontSize(10),
  },

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
    color: "#AAA"
  }
});

export default styles;
