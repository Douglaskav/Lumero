import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default CategoryItem = ({ category }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.categoryItemText}>{category}</Text>
		</View>
	);
};
