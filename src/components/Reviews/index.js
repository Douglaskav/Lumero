import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

import ProfilePicture from "../../assets/profilepic.jpg";
import Stars from "../../components/Stars";

const Reviews = ({ reviews }) => {
  const [currentReview, setCurrentReview] = useState(0);

  function onChangeReview(nativeEvent) {
    if (nativeEvent) {
      let slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != currentReview) {
        setCurrentReview(slide);
      }
    }
  }

  return (
    <View>
      <Text style={styles.topicTitle}>Reviews</Text>
      <ScrollView
        onScroll={({ nativeEvent }) => onChangeReview(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.reviewsWrapper}
      >
        {reviews.map((review, index) => {
          return (
            <View key={index} style={styles.reviewsWrapper}>
              <View style={styles.reviewContainer}>
                <View style={styles.reviewHeader}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 56, height: 56, borderRadius: 5 }}
                  />
                  <View style={styles.usernameAndStars}>
                    <Text style={styles.username}>{review.User.username}</Text>
                    <Stars reviewValue={review.stars} />
                  </View>
                </View>
                <View style={styles.reviewBody}>
                  <Text style={styles.reviewContent}>{review.content}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.wrapDot}>
        {reviews.map((review, index) => (
          <Text
            key={index}
            style={currentReview === index ? styles.activeDot : styles.dot}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Reviews;
