import React from "react";

import { View, ScrollView, Text, Image } from "react-native";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import FavoriteItem from "../../components/favoriteItem/";

export default FavoritesScreen = () => {
	return (
		<ScrollView>
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
