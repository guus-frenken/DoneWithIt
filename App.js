import React from 'react';
import {Text, Button} from 'react-native';
import Screen from './app/components/Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="View Post"
      onPress={() => navigation.navigate('Post Details', {title: 'post titleeee'})}
    />
  );
};

const Posts = () => (
  <Screen>
    <Text>Posts</Text>
    <Link />
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
    <Link />
  </Screen>
);

const PostDetails = () => (
  <Screen>
    <Text>Post Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Posts" component={Posts} />
    <Stack.Screen
      name="Post Details"
      component={PostDetails}
      options={({route}) => ({
        title: route.params.title,
      })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
