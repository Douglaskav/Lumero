import { StyleSheet } from "react-native";
import { fontSize } from "../../helpers/Dimensions";

const styles = StyleSheet.create({
	logoHeader: {
		marginTop: 30,
		alignSelf: "center",
	},

	dontHaveAccount: {
		textAlign: "center",
		fontFamily: "NunitoSans_800ExtraBold",
		fontSize: fontSize(12),
	},

	forgetPassword: {
		fontFamily: "NunitoSans_800ExtraBold",
		fontSize: fontSize(11),
		marginBottom: 30,
	},

	linkClickRef: {
		color: "#4477ff",
	},

	linkClick: {
		color: "#FF4400",
	},
});

export default styles;
