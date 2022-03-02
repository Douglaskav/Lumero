import React from "react";
import { Text, StyleSheet } from "react-native";

function PageTitle({ text }) {
	return (
		<Text
			style={{
				maxWidth: 170,
				color: "#0E091B",
				marginTop: 30,
				marginBottom: 30,
				fontFamily: "NunitoSans_800ExtraBold",
				fontSize: 18,
			}}
		>
			{text}
		</Text>
	);
}
export default PageTitle;
