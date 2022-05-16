import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { fontSize } from "../../helpers/Dimensions";

function Button({ text, backgroundColor, iconName, onPress }) {
	return (
		<TouchableOpacity
			style={{ flexDirection: "row", flex: 1 }}
			onPress={onPress}
		>
			<View style={[styles.iconContainer, { backgroundColor }]}>
				<AntDesign name={iconName} size={20} color="#fff" />
			</View>
			<View
				style={[styles.container, { backgroundColor: backgroundColor + "ef" }]}
			>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 40,
		color: "#fff",
	marginBottom: 20,
		borderRadius: 5,
		borderTopStartRadius: 0,
		borderBottomStartRadius: 0,
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 5
	},

	iconContainer: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderTopStartRadius: 5,
		borderBottomStartRadius: 5,
	},

	buttonText: {
		fontFamily: "NunitoSans_700Bold",
		color: "#FFF",
		marginRight: 40,
		fontSize: fontSize(10),
	},
});

export default Button;
