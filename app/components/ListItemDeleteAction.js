import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color="white" />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.danger,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
