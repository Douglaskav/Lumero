import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";

import OnboardingItem from "./OnboardingItem";
import Paginator from "./Pagination";
import slide from "./OnboardingScreensData";

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const NextButton = () => {
    if (currentIndex < slide.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      alert('Página de login');
    }
  };

  const SkipButton = () => {
    alert('Pagina de login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
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
        <TouchableOpacity onPress={SkipButton}>
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
    color: "#5F4FC4",
    fontSize: 14,
    fontWeight: "600",
  },

  bottomBar: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginBottom: 30
  },
});
