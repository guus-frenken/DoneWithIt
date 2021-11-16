import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import Screen from '../components/Screen';
import Text from '../components/Text';
import routes from '../navigation/routes';
import defaultStyles from '../config/styles';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings</Text>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'€ ' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          loadListings();
        }}
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
