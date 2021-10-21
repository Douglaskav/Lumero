import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },

  bookCoverContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  bookCover: {
    width: 180,
    height: 250
  },

  bookTitleAndAuthorContainer: {
    marginTop: 15,
    marginBottom: 15
  },

  bookTitle: {
    fontFamily: "OpenSans_600SemiBold",
    maxWidth: 230,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#333"
  },

  bookAuthor: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 12,
    color: "#838383",
    textAlign: "center"
  },

  capAndReaderButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  capText: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 12,
    color: "#5A5885"
  },

  readerButtonTextContainer: {
    flexDirection: "row",
    alignItems: "center"
  },

  readerButtonText: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 12,
    color: "#3F3F66",
    marginRight: 3
  },

  controlTime: {
    width: 300,
    height: 40,
    alignSelf: "center"
  },

  timesTextContainer: {
    marginTop: -15,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },

  startTimeText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "#FFC166"
  },

  endTimeText: {
 fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "#2F1160"

  }
});
export default styles;
