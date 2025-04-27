import { useState, useEffect } from 'react';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme'; // Certifique-se de que este hook existe
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// Evita que o splash screen desapareça antes do app estar pronto
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Hook para obter o tema (claro ou escuro)
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // Certifique-se de que o caminho está correto
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // Esconde o splash screen quando as fontes estiverem carregadas
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Exibe o splash screen até que as fontes estejam carregadas
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="login"> {/* Define a tela inicial como "login" */}
        <Stack.Screen
          name="login"
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de login
        />
        <Stack.Screen
          name="screens/home"
          options={{ title: 'Home' }} // Configura a tela "home"
        />
      </Stack>
      <Stack.Screen name="+not-found" options={{ title: 'Página Não Encontrada' }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}