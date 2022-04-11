import React from "react";

import { View, Text, StyleSheet } from "react-native";

function SeparatorSign() {
	return (
		<View style={styles.container}>
			<View style={styles.line} />
			<Text style={styles.separatorText}>or</Text>
			<View style={styles.line} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 30,
		marginTop: -5,
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},

	line: {
		width: "50%",
		height: 1,
		backgroundColor: "#ddd",
	},

	separatorText: {
		color: "#ddd",
		fontSize: 12,
		fontFamily: "NunitoSans_800ExtraBold",
		marginLeft: 20,
		marginRight: 20,
	},
});

export default SeparatorSign;
