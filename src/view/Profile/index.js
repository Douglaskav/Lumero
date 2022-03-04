import React, { useState } from "react";

import { View, Text, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import ProfilePicture from "../../assets/profilepic.jpg";

import styles from "./styles";
import globalStyles from "../../styles/";

import BookList from "../../components/bookList";
import Stars from "../../components/Stars";

let reviews = [
  {
    username: "Mariana Alves",
    picture: "../../assets/profilepic.jpg",
    stars: 5,
    book: "Hunger Games",
    review:
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. ",
  },
  {
    username: "Mariana Alves",
    picture: "../../assets/imageProfile.png",
    stars: 2,
    book: "Guardião das Galaxias",
    review:
      "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar a de um texto legível.",
  },
  {
    username: "Mariana Alves",
    picture: "../../assets/imageProfile.png",
    stars: 4,
    book: "Senhor dos aneis",
    review:
      "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto.",
  },
];

export default Profile = () => {
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
    <ScrollView>
      <View style={globalStyles.containerScreen}>
        <View style={styles.profilePictureContainer}>
          <Image source={ProfilePicture} style={styles.profilePic} />
          <Text style={styles.profileUsername}>Mariana Alves</Text>
        </View>
      </View>

      <View style={styles.userInfoNumbers}>
        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText1, styles.userInfoValue]}>16</Text>
          <Text style={styles.userInfoItemLabel}>Livros Lidos</Text>
        </View>

        <View style={styles.userInfoSeparator} />

        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText2, styles.userInfoValue]}>3</Text>
          <Text style={styles.userInfoItemLabel}>Recomendações</Text>
        </View>

        <View style={styles.userInfoSeparator} />

        <View style={styles.userInfoItem}>
          <Text style={[styles.colorText3, styles.userInfoValue]}>10</Text>
          <Text style={styles.userInfoItemLabel}>Comentarios</Text>
        </View>
      </View>

      <View style={{ margin: 30 }}>
        <BookList topicTitle="Ultimos Livros" />
      </View>

      <Text style={styles.topicTitle}>Reviews</Text>
      <ScrollView
        onScroll={({ nativeEvent }) => onChangeReview(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.reviewsWrapper}
      >
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewsWrapper}>
            <View style={styles.reviewContainer}>
              <View style={styles.reviewHeader}>
                <Image
                  source={ProfilePicture}
                  style={{ width: 56, height: 56, borderRadius: 5 }}
                />
                <View style={styles.usernameAndStars}>
                  <Text style={styles.username}>{review.username}</Text>
                  <Stars reviewValue={review.stars} />
                </View>
                <Text style={styles.bookname}>{review.book}</Text>
              </View>
              <View style={styles.reviewBody}>
                <Text style={styles.reviewContent}>{review.review}</Text>
              </View>
            </View>
          </View>
        ))}
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
    </ScrollView>
  );
};
