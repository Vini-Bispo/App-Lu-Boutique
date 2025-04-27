import { Stack } from 'expo-router';

export default function ScreensLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="screens/App" options={{ title: 'App' }} />
    </Stack>
  );
}