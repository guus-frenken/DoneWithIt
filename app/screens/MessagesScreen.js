import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ListItem, ListItemSeparator, ListItemDeleteAction} from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
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

const styles = StyleSheet.create({});

export default MessagesScreen;
