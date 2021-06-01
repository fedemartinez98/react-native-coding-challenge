import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key);
  const res = JSON.parse(value);
  return res;
};

export const setItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const checkExpiration = async (date) => {
  var oneDay = (1 * 24 * 60 * 60 * 1000);
  var expired = (new Date().getTime() - new Date(date).getTime()) > oneDay;
  if (expired) {
    AsyncStorage.clear();
  }
  return expired;
}