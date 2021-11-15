import React from 'react';
import {StyleSheet, Image, View, TouchableWithoutFeedback} from 'react-native';
import Text from './Text';
import defaultStyles from '../config/styles';

function Card({title, subTitle, imageUrl, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
  },
});

export default Card;
