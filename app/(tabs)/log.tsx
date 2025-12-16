import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { saveActivity } from '../../utils/storage';

export default function LogActivity() {
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');

  const save = async () => {
    if (type.trim() === '' || value.trim() === '') {
      Alert.alert('Error', 'Type and Value are required');
      return;
    }

    const activity = {
      type: type.toLowerCase(),
      value: Number(value),
      notes,
      date: new Date().toISOString(),
    };

    await saveActivity(activity);
    Alert.alert('Saved', 'Activity saved successfully');
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Type (water / steps / sleep)</Text>
      <TextInput
        value={type}
        onChangeText={setType}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Value</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Notes</Text>
      <TextInput
        value={notes}
        onChangeText={setNotes}
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <Button title="Save Activity" onPress={save} />
    </View>
  );
}
