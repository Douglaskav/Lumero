import React from "react";

import { View, ScrollView, Text, Image } from "react-native";
import styles from "./styles";

import FavoriteItem from "../../components/FavoriteItem/";

export default FavoritesScreen = () => {
	return (
		<ScrollView style={{backgroundColor: "#FFF"}}>
			<View style={styles.container}>
			<FavoriteItem />
				<FavoriteItem />
				<FavoriteItem />
				<FavoriteItem />
				<FavoriteItem />
				<FavoriteItem />
			</View>
		</ScrollView>
	);
};
