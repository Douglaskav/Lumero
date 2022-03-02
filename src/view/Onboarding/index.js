import React, { useRef, useState, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	SafeAreaView,
	Animated,
	TouchableOpacity,
} from "react-native";

import OnboardingItem from "./OnboardingItem";
import Paginator from "./Pagination";
import slide from "./OnboardingScreensData";
import globalStyles from "../../styles/";

import AuthContext from "../../context/auth";

export default Onboarding = ({ navigation }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollx = useRef(new Animated.Value(0)).current;
	const slideRef = useRef(null);

	const { PassedByOnboarding } = useContext(AuthContext);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const NextButton = () => {
		if (currentIndex < slide.length - 1) {
			slideRef.current.scrollToIndex({ index: currentIndex + 1 });
		} else {
			PassedByOnboarding();
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					data={slide}
					renderItem={({ item }) => <OnboardingItem item={item} />}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					bounces={false}
					keyExtractor={(item) => item.id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollx } } }],
						{
							useNativeDriver: false,
						}
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slideRef}
				/>
			</View>

			<View style={styles.bottomBar}>
				<TouchableOpacity
					onPress={() => {
						PassedByOnboarding();
					}}
				>
					<Text style={styles.nextButton}>Skip</Text>
				</TouchableOpacity>
				<Paginator data={slide} scrollx={scrollx} />
				<TouchableOpacity onPress={NextButton}>
					<Text style={styles.nextButton}>Next</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	nextButton: {
		color: "#4477FF",
		fontSize: 14,
		fontWeight: "600",
	},

	bottomBar: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 60,
	},
});
