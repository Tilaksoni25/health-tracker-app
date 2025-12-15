import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getActivities } from '../../utils/storage';

export default function Dashboard() {
  const [water, setWater] = useState(0);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState(0);

  const loadData = async () => {
    const data = await getActivities();

    const waterTotal = data
      .filter((a: any) => a.type === 'water')
      .reduce((sum: number, a: any) => sum + a.value, 0);

    const stepsTotal = data
      .filter((a: any) => a.type === 'steps')
      .reduce((sum: number, a: any) => sum + a.value, 0);

    const sleepTotal = data
      .filter((a: any) => a.type === 'sleep')
      .reduce((sum: number, a: any) => sum + a.value, 0);

    setWater(waterTotal);
    setSteps(stepsTotal);
    setSleep(sleepTotal);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.date}>{new Date().toDateString()}</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Water Intake</Text>
        <Text style={styles.value}>{water} Glasses</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Steps Walked</Text>
        <Text style={styles.value}>{steps} Steps</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sleep</Text>
        <Text style={styles.value}>{sleep} Hours</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
