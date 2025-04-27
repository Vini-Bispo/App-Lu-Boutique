// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  // Quando a rota “/” for acessada, ele imediatamente redireciona para /login
  return <Redirect href="/login" />;
}
