import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import FavoriteItem from "../../components/FavoriteItem/";

export default FavoritesScreen = ({ navigation }) => {
	const { user } = useAuth();
	let [books, setBooks] = useState([]);

	useFocusEffect(
		React.useCallback(() => {
			async function getBookById() {
				let response = await api.get(`user/favoriteBooks/${user.id}`);

				if (response?.data) {
					setBooks(response.data.favorites_books);
				}
			}

			getBookById();
		}, [])
	);

	return (
		<ScrollView style={{ backgroundColor: "#FFF" }}>
			<View style={styles.container}>
				{books.map((book) => (
					<TouchableOpacity
						key={book.id}
						onPress={() =>
							navigation.navigate("BookProfile", {
								itemId: book.id,
							})
						}
					>
						<FavoriteItem book={book} />
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
};
