import React from "react";

import { View, ScrollView, Text, Image } from "react-native";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import FavoriteItem from "../../components/favoriteItem/";

export default FavoritesScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.pageHeaderTitle}>Favorites</Text>

					<View style={styles.headerIcons}>
						<Feather
							name="bell"
							size={24}
							color="#333"
							style={{ marginRight: 5 }}
						/>
						<Feather
							name="search"
							size={24}
							color="#333"
							style={{ marginRight: 5 }}
						/>
					</View>
				</View>

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
