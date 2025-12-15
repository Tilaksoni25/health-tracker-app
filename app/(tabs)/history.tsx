import { useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { getActivities } from '../../utils/storage';

export default function History() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setRefreshing(true);
    const activities = await getActivities();
    setData(activities.reverse());
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={loadData} />
      }
      renderItem={({ item }: any) => (
        <View style={{ padding: 12, borderBottomWidth: 1 }}>
          <Text>Type: {item.type}</Text>
          <Text>Value: {item.value}</Text>
          <Text>Date: {new Date(item.date).toDateString()}</Text>
        </View>
      )}
    />
  );
}
