import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Icon from '../components/Icon';
import {ListItem, ListItemSeparator} from '../components/lists';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import defaultStyles from '../config/styles';
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function MyAccountScreen({navigation}) {
  const {user, logOut} = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/profilepic.png')}
          style={styles.listItem}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              style={styles.listItem}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        style={styles.listItem}
        IconComponent={<Icon name="logout" backgroundColor={defaultStyles.colors.warning} />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  listItem: {
    backgroundColor: defaultStyles.colors.white,
  },
});

export default MyAccountScreen;
