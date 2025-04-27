import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router'; // Importa o hook useRouter do expo-router

export default function Login(){
  const router = useRouter(); // Inicializa o roteador
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    //Lógica de autetnicação
    if(email === '' || password === ''){
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido');
    } else {
      setIsLoading(true); // Inicia o carregamento
      setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Sucesso', 'Login realizado com sucesso');
      router.push('/screens/home'); // Navega para a tela inicial após o login
      }, 2000);
    }
  };

return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/LogoLuBoutique.png')}
          style={styles.logo}
        /> 
      </View>

      <View style={styles.rectangle} />
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login</Text>
        
        <View style={styles.loginContainer}>
            {/* texto acima do input e-mail */}
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={'#A9A9A9'}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />

            {/* Texto acima do campo de senha */}
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={'#A9A9A9'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Botão "Esqueceu a senha?" */}
            <TouchableOpacity onPress={() => Alert.alert('Recuperação de senha', 'Função ainda não implementada')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

          {/* <Button title='Entrar' onPress={handleLogin}/> */}
          {/* Botão personalizado */}
          {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity> */}

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
            {isLoading ? <Text style={styles.buttonText}>Carregando...</Text> : <Text style={styles.buttonText}>Entrar</Text>}
          </TouchableOpacity>

        </View>

        {/* Texto "Não possui cadastro?" */}
        <Text style={styles.noAccountText}>Não possui cadastro?</Text>
        {/* Botão "Cadastre-se" */}
        <TouchableOpacity onPress={() => Alert.alert('Cadastro', 'Função de cadastro ainda não implementada')}>
          <Text style={styles.registerButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Lu Boutique - Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    // flex: 1, // Ocupa o espaço no topo
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // Espaçamento superior opcional
    height: 120, // Altura fixa para o logo
  },
  logo: {
    width: 120,
    height: 120,
  },

  rectangle: {
    width: '90%',
    alignSelf: 'center',
    height: 2,
    backgroundColor: '#F329D2',
    // marginTop: 10,
    // position: 'absolute',
  },

  contentContainer: {
    flex: 1, // Ocupa o restante do espaço
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    paddingHorizontal: 10, // Espaçamento lateral
  },

  loginContainer: {
    backgroundColor: '#ffffff',
    // flex: 2, // Ocupa o restante do espaço
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    paddingHorizontal: 20, // Espaçamento lateral
    paddingVertical: 30, // Espaçamento vertical
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 3 }, // Deslocamento da sombra
    shadowOpacity: 0.35, // Opacidade da sombra
    shadowRadius: 5.5, // Raio de desfoque da sombra
    borderRadius: 10, // Bordas arredondadas
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 70,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    width: 340,
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    color: 'black',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    // marginRight: 205,
    marginLeft: 'auto',
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    width: 180,
    height: 37,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noAccountText: {
    fontSize: 14,
    color: 'black',
    marginTop: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  registerButton: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});