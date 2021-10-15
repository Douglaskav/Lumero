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
		marginBottom: 12,
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

	inputContainer: {
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
		marginBottom: 30,
	},

	input: {
		flex: 1,
		height: 50,
		padding: 5,
		paddingLeft: 15,
		fontSize: 12,
		fontFamily: "OpenSans_400Regular",

		color: "#666",
	},

	inputIcon: {
		marginRight: 15,
	},

	genreImage: {
		width: 215,
		height: 60,
		borderRadius: 5,
		marginRight: 25,
	},

	genreText: {
		marginTop: 5,
		fontSize: 12,
		fontFamily: "OpenSans_600SemiBold",
		color: "#333",
		textAlign: "center",
	},
});

export default styles;
