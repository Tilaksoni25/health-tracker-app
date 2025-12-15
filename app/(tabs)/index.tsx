import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Health Tracker</Text>
      <Text>Track water, steps & sleep</Text>

      <Button
        title="Get Started"
        onPress={() => router.push('/dashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
