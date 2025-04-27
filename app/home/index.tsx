import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
          {/* <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/LogoLuBoutique.png')}
            style={styles.logo}
          />
        </View> */}
        <View style={styles.rectangle}> 
          <Text style={styles.rectangleText}>Menu</Text>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </View>


        <View style={styles.container}>
          <Text style={styles.text}>Bem-vindo(a) Funcionário(a)</Text>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="plus" size={40} color="black" />
            <Text style={styles.buttonText}>Cadastrar Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="adduser" size={40} color="black" />
            <Text style={styles.buttonText}>Cadastrar Usuário</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryArea}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Roupas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Acessórios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Calçados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Novidades</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    width: '100%',
    alignSelf: 'center',
    height: 80,
    backgroundColor: '#F329D2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 10,
    // position: 'absolute',
  },
  rectangleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 40,
  },

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#d9d9d9',
    borderColor: '#F329D2',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '45%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  categoryArea:{
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
    // backgroundColor: '#d9d9d9',
  },

  categoryButton: {
    backgroundColor: '#fff',
    borderColor: '#F329D2',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '95%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

});