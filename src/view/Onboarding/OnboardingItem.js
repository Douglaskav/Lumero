import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";

import Logo from "../../assets/Head.png";

import { width, height, fontScale } from "../../helpers/Dimensions";

const scale = width / 320;

export default OnboardingItem = ({ item }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={Logo} style={styles.logo} />

			<Image source={item.image} style={styles.image} />

			<View style={{ marginLeft: 25, marginRight: 25 }}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.subtitle}>{item.subtitle}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width,
		justifyContent: "center",
		alignItems: "center",
	},

	logo: {
		position: "absolute",
		top: 80,
		alignSelf: "center",
	},

	image: {
		marginTop: height * 0.1,
		marginBottom: height * 0.095,
	},

	title: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 23 * scale,
		color: "#0E091B",
		textAlign: "center",
	},

	subtitle: {
		fontFamily: "NunitoSans_600SemiBold",
		fontSize: 12 * scale,
		color: "#0E091B",
		textAlign: "center",
		marginTop: 15,
	},
});
