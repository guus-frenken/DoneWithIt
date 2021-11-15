import AsyncStorage from '@react-native-async-storage/async-storage';
import {differenceInMinutes} from 'date-fns';

const prefix = 'cache';
const expiryInMinutes = 5;

const isExpired = item => {
  const now = Date.now();
  const storedTime = item.timestamp;
  return differenceInMinutes(now, storedTime) > expiryInMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log("Couldn't get item:\n", error);
  }
};

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("Couldn't store item:\n", error);
  }
};

export default {
  get,
  store,
};
