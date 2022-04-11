import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	booksList: {
		flexDirection: "row",
		marginBottom: 30,
	},

	topicContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row"
	},

	topicTitle: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 18,
		maxWidth: 150,
		color: "#0E091B",
		marginBottom: 12,
	},

	topicLink: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 12,
		color: "#5481FE",
		marginRight: 5
	},
});

export default styles;
