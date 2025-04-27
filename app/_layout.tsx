import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // <Stack initialRouteName="login/index"> {/* Define a tela inicial como "login" */}
    //   <Stack.Screen name="login/index" options={{ headerShown: false}}/>
    //   <Stack.Screen name="home/index" options={{ title: 'Home' }}/>
    // </Stack>

    <Stack
      screenOptions={{
          headerShown: false, // Oculta o cabeçalho padrão
          contentStyle: { backgroundColor: '#fff' }, // Define o fundo branco para todas as telas
        }}
    >
      
    </Stack>
  );
}