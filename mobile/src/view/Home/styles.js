import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		maxWidth: "100%",
		margin: 30,
	},

	topicTitle: {
		fontFamily: "OpenSans_600SemiBold",
		fontSize: 18,
		color: "#333",
		marginBottom: 10,
	},

	header: {
		marginTop: 15,
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

	lastBookReadedContainer: {
		flexDirection: "row",
	},

	lastBookReadedCover: {
		width: 90,
		height: 140,
		borderRadius: 15,
		resizeMode: "stretch",
	},

	lastBookReadedInfo: {
		marginLeft: 10,
	},

	lastBookReadedTitleContainer: {
		width: "100%",
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
	},

	lastBookReadedTitle: {
		fontSize: 21,
		color: "#333",
		maxWidth: "80%",
		fontFamily: "OpenSans_700Bold",
	},

	lastBookReadedAuthor: {
		marginTop: 5,
		fontFamily: "OpenSans_400Regular",
		fontSize: 14,
		color: "#838383",
	},

	reactionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight: 30,
	},

	completeRectangle: {
		backgroundColor: "#ddd",
		marginTop: 10,
		width: 110,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		padding: 10,
	},

	starsContainer: {
		flexDirection: "row",
		marginTop: 5,
		marginLeft: 10,
		alignItems: "center",
	},

	starText: {
		color: "#FFC166",
		marginLeft: 5,
		fontFamily: "OpenSans_700Bold",
	},

	booksList: {
		flexDirection: "row",
		marginBottom: 20,
	},

	bookItem: {
		marginRight: 15,
	},

	bookTitle: {
		color: "#333",
		fontSize: 14,
		maxWidth: 100,
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
