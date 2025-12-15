import { Platform } from 'react-native';

const KEY = 'activities';

const Storage =
  Platform.OS == 'web'
    ? {
        async getItem(key: string) {
          return localStorage.getItem(key);
        },
        async setItem(key: string, value: string) {
          localStorage.setItem(key, value);
        },
      }
    : require('@react-native-async-storage/async-storage').default;

export const saveActivity = async (activity: any) => {
  const existing = await Storage.getItem(KEY);
  const data = existing ? JSON.parse(existing) : [];
  data.push(activity);
  await Storage.setItem(KEY, JSON.stringify(data));
};

export const getActivities = async () => {
  const data = await Storage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
