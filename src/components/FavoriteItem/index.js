import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { Feather, FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
import Cover from "../../assets/Cover.png";

export default FavoriteItem = () => {
	return (
		<View style={styles.container}>
			<Image source={Cover} style={styles.bookCover} />
			<View style={styles.bookInfo}>
				<View style={{ flexDirection: "row" }}>
					<Text style={styles.bookTitle}>Thinking, fast and slow</Text>
					<View style={{ marginLeft: 10, flexDirection: "row" }}>
						<FontAwesome
							name="star"
							size={12}
							color="#FBAA1F"
							style={{ marginRight: 5 }}
						/>
						<Text style={styles.starText}>4.6</Text>
						<Feather
							name="download"
							size={12}
							color="#4274FE"
							style={{ marginRight: 5, marginLeft: 5 }}
							onPress={() => alert("Clicou para baixar")}
						/>
						<TouchableOpacity onPress={() => alert("Clicou para desfavoritar")}>
							<FontAwesome name="heart" size={12} color="#FF4905" />
						</TouchableOpacity>
					</View>
				</View>

				<Text style={styles.bookAuthor}>Daniel Kahneman</Text>
				<View style={styles.contentInfo}>
					<FontAwesome5
						name="book"
						size={12}
						color="#0E091B"
						style={{ marginRight: 5 }}
					/>
					<Text style={styles.contentInfoText}>879 Pages</Text>
					<FontAwesome5
						name="headphones"
						size={12}
						color="#0E091B"
						style={{ marginRight: 5 }}
					/>
					<Text style={styles.contentInfoText}>3:39:49</Text>
				</View>

				<View style={styles.progress}>
					<Text style={styles.progressText}>100% Complete</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderWidth: 1,
		flexDirection: "row",
		borderColor: "#EAEAEA",
		marginTop: 15,
	},

	bookCover: {
		width: 60,
		height: 90,
	},

	bookInfo: {
		marginLeft: 5,
	},

	contentInfo: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},

	bookTitle: {
		fontFamily: "NunitoSans_600SemiBold",
		maxWidth: 140,
		fontSize: 12,
	},

	bookAuthor: {
		fontFamily: "NunitoSans_400Regular",
		fontSize: 10,
		color: "#838383",
	},

	contentInfoText: {
		fontFamily: "NunitoSans_400Regular",
		fontSize: 10,
		marginRight: 5,
	},

	starText: {
		fontFamily: "NunitoSans_700Bold",
		fontSize: 10,
		color: "#0E091B",
	},

	progress: {
		width: 120,
		height: 15,
		marginTop: 10,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5481FE",
	},

	progressText: {
		color: "#FFF",
		fontSize: 8,
		fontFamily: "NunitoSans_700Bold",
	},
});
