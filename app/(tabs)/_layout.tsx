import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{ title: 'Dashboard' }}
      />
      <Tabs.Screen
        name="log"
        options={{ title: 'Log Activity' }}
      />
      <Tabs.Screen
        name="history"
        options={{ title: 'History' }}
      />
    </Tabs>
  );
}
