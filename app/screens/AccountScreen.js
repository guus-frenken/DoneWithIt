import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Icon from '../components/Icon';
import {ListItem, ListItemSeparator} from '../components/lists';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

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
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Guus Frenken"
          subTitle="g.frenken@qteco.nl"
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
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        style={styles.listItem}
        IconComponent={<Icon name="logout" backgroundColor={defaultStyles.colors.warning} />}
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

export default AccountScreen;
