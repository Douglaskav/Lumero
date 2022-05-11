import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		maxWidth: "100%",
		margin: 30,
	},

	headerContainer: {
    marginBottom: 15,
    marginTop: 15
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
		fontFamily: "NunitoSans_400Regular",
		color: "#666",
	},

	topicTitle: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 18,
		maxWidth: 150,
		color: "#0E091B",
		marginBottom: 12,
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
		fontFamily: "NunitoSans_700Bold",
		color: "#0E091B",
		textAlign: "center",
	},
});

export default styles;
