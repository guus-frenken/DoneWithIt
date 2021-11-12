import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem, ListItemSeparator, ListItemDeleteAction} from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../assets/profilepic.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/profilepic.png'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/profilepic.png'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Selected message:\n', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 1,
              title: 'T1',
              description: 'D1',
              image: require('../assets/profilepic.png'),
            },
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/profilepic.png'),
            },
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/profilepic.png'),
            },
            {
              id: 4,
              title: 'T4',
              description: 'D4',
              image: require('../assets/profilepic.png'),
            },
            {
              id: 5,
              title: 'T5',
              description: 'D5',
              image: require('../assets/profilepic.png'),
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
