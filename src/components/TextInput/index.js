import React from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

function InputField({
	label,
	placeholder,
	defaultValue,
	onChangeText,
	password = false,
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<TextInput
				style={styles.input}
				defaultValue={defaultValue}
				secureTextEntry={password}
				onChangeText={onChangeText}
				placeholder={placeholder}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
	},

	label: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 12,
		color: "#0E091B",
	},

	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 10,
		fontSize: 12,
		marginTop: 5,
		fontFamily: "NunitoSans_400Regular",
	},
});

export default InputField;
