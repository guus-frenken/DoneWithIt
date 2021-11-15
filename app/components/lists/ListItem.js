import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Text from '../Text';
import defaultStyles from '../../config/styles';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions, style}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
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
