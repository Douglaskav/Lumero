import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    margin: 30,
  },

  topicTitle: {
    fontSize: 18,
    color: "#333",
    fontFamily: "OpenSans_600SemiBold",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pageHeaderTitle: {
    fontSize: 25,
    color: "#333",
    fontFamily: "OpenSans_700Bold",
  },

  headerIcons: {
    flexDirection: "row",
  },

  profileContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  profilePicture: {
    width: 115,
    height: 115,
    borderRadius: 100,
    marginBottom: 15,
  },

  profileUserName: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 18,
  },

  geralBooksInfoContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },

  geralBookInfoItem: {
    alignItems: "center",
  },

  geralBookInfoItemWithBars: {
    borderRightWidth: 2,
    borderLeftWidth: 2,
    marginRight: 10,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#333",
  },

  geralBookInfoNumber: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    lineHeight: 21,
  },

  geralBookInfoText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
