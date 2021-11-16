import {useEffect} from 'react';
import * as Notifications from 'expo-notifications';
import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = notificationListener => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      Notifications.addPushTokenListener(notificationListener);
    }
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const {status} = await Notifications.requestPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log('Error getting a push notification token:\n', error);
    }
  };
};
