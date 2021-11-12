import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../AppText';
import defaultStyles from '../../config/styles';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions, style}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  detailsContainer: {
    paddingStart: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
