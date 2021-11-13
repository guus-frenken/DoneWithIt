import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import ListItem from '../components/lists/ListItem';
import defaultStyles from '../config/styles';

function ListingDetailsScreen({route}) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>€ {listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/profilepic.png')}
            title="Guus Frenken"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: defaultStyles.colors.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
