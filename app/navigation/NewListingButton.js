import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';

function NewListingButton({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={defaultStyles.colors.white} size={23} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primary,
    height: 90,
    width: 90,
    borderRadius: 45,
    bottom: 20,
    borderColor: defaultStyles.colors.white,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewListingButton;
