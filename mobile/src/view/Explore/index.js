import React from "react";

import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import BookList from "../../components/bookList";

import B1 from "../../assets/genres/buisness.jpg";
import B2 from "../../assets/genres/creative.jpg";
import B3 from "../../assets/genres/fiction.jpg";

import styles from "./styles";

export default ExploreScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.pageHeaderTitle}>Explore</Text>

					<View style={styles.headerIcons}>
						<Feather
							name="bell"
							size={24}
							color="#333"
							style={{ marginRight: 5 }}
						/>
					</View>
				</View>

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Search for title, author or category..."
					/>
					<Feather
						name="search"
						size={20}
						color="#bbb"
						style={styles.inputIcon}
					/>
				</View>

				<BookList topicTitle="Today for you" />
				<BookList topicTitle="Popular" />

				<View
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={styles.genresContainer}
				>
					<View>
						<Text style={styles.topicTitle}>Genres</Text>
					</View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.genre}>
							<Image source={B1} style={styles.genreImage} />
							<Text style={styles.genreText}>Buisness</Text>
						</View>
						<View style={styles.genre}>
							<Image source={B2} style={styles.genreImage} />
							<Text style={styles.genreText}>Creative</Text>
						</View>
						<View style={styles.genre}>
							<Image source={B3} style={styles.genreImage} />
							<Text style={styles.genreText}>Fiction</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</ScrollView>
	);
};
