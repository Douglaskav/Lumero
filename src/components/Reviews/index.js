import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import reviewAuthorPhoto from "../../assets/profilepic.jpg";
import Stars from "../../components/Stars";

export default Reviews = () => {
	return (
		<View
			style={{
				borderBottomWidth: 2,
				borderColor: "#eee",
				paddingBottom: 20,
				paddingTop: 20,
			}}
		>
			<View style={styles.reviewsContainer}>
				<View style={styles.reviewHeader}>
					<View style={styles.reviewHeaderInfo}>
						<Image
							source={reviewAuthorPhoto}
							style={styles.reviewAuthorPhoto}
						/>
						<View>
							<Text style={styles.reviewAuthor}>Mariana Alves</Text>
							<Text style={styles.reviewBook}>Hunger Games</Text>
						</View>
					</View>
					<Stars />
				</View>
				<View style={styles.reviewBody}>
					<Text style={styles.reviewMessage}>
						Parents need to know that although the bestselling Hunger Games
						books are enormously popular with tweens, there's a clear
						distinction between reading about violence and seeing it portrayed
						on screen in The Hunger Games. Developmentally.
					</Text>
				</View>
			</View>
		</View>
	);
};
