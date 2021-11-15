import {useEffect, useState} from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      let {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      setLocation({latitude, longitude});
    } catch (error) {
      console.log('Unable to get location:\n', error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
