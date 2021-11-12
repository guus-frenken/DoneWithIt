import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id}
        renderItem={({item}) => (
          <Card title={item.title} subTitle={'$' + item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
