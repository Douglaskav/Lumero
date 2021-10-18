import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	topicTitle: {
		fontSize: 18,
		color: "#333",
		marginBottom: 15,
		fontFamily: "OpenSans_600SemiBold",
	},

	reviewAuthorPhoto: {
		width: 40,
		height: 40,
		borderRadius: 40,
		marginRight: 10,
	},

	reviewHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	reviewHeaderInfo: {
		flexDirection: "row",
	},

	reviewAuthor: {
		color: "#333",
		fontSize: 14,
		fontFamily: "OpenSans_600SemiBold",
	},

	reviewBook: {
		fontSize: 10,
		color: "#838383",
		fontFamily: "OpenSans_400Regular",
	},

	reviewMessage: {
		marginTop: 5,
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
		lineHeight: 18,
	},
});

export default styles;
