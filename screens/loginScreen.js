import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);




  const fetchData = async () => {
    const emailQuery = "mail: " + '"' + email + '",';
    const passQuery = "pass: " + '"' + password + '",';
    const finalQuery = emailQuery + passQuery;

    const baseUrl = 'http://192.168.1.102:3000/exercises/users';
    const filtro = `${encodeURIComponent(finalQuery)}`;

    const url = `${baseUrl}/${filtro}`;
    console.log('URL buscar usuarios:', url);
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Respuesta:', data);
      const updatedUsuario = data;
      await AsyncStorage.setItem('usuario', JSON.stringify(data));
      setUsuario(updatedUsuario);
      
      if (updatedUsuario && updatedUsuario.length > 0) {
        setErrorLogin(false);
        navigation.navigate('SliderScreen');
      } else {
        setErrorLogin(true);
      }
    } catch (error) {
      console.error(error);
    }

  };

  const submit = () => {
    console.log('Email:', email, 'Password:', password);
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../logos/silbato-fondo.jpg')} style={styles.image} />
      <Text style={styles.title}>Pro-Tactic</Text>
      <TextInput
        style={errorLogin ? styles.inputError : styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={errorLogin ? styles.inputError : styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.containerError}>
        {errorLogin && (
          <Text style={styles.textoError}>Email o contraseña incorrectos</Text>
        )}
      </View>
      <Text style={styles.subtitle}>¿Olvidaste tu contraseña?</Text>

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        ¿Nuevo en ProTactic?
        <Text
          style={styles.subtitleYellow}
          onPress={() => {
            navigation.navigate('CreateAccountScreen');
          }}>
          Crea una cuenta
        </Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  image: {
    height: 220,
    width: '120%',
    marginBottom: 60
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textoError: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  subtitleYellow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FAC710',
  },
  containerError:{
    width: '100%',
    height: 40,
    marginTop: -10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputError: {
    width: '100%',
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#FFCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FAC710',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default LoginScreen;
