import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('SliderScreen')
  };

  return (
    <View style={styles.container}>
      <Image source={require('../logos/silbato-fondo.jpg')} style={styles.image} />
      <Text style={styles.title}>Pro-Tactic</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.subtitle}>¿Olvidaste tu contraseña?</Text>

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>¿Nuevo en ProTactic?<Text style={styles.subtitleYellow} onPress={() => { navigation.navigate('CreateAccountScreen')}}>
          Crea una cuenta
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  image: {
    height: 200,
    width: '120%',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
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
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
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
