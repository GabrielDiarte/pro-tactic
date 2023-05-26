import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const CreateAccountScreen = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');

    const submit = () => {
        onRegister(email, apellido1, apellido2, email, password, passwordValidation);
      };
  
    return (
      <View style={stylesCreateAccount.container}>

        <Image source={require('../logos/silbato-fondo.jpg')} style={stylesCreateAccount.image} />
        <Text style={stylesCreateAccount.title}>Pro-Tactic</Text>
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Nombre" placeholderTextColor="#000000"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Primer apellido" placeholderTextColor="#000000"
          value={apellido1}
          onChangeText={setApellido1}
        />
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Segundo apellido" placeholderTextColor="#000000"
          value={apellido2}
          onChangeText={setApellido2}
        />
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Correo electrónico" placeholderTextColor="#000000"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Contraseña" placeholderTextColor="#000000"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={stylesCreateAccount.input}
          placeholder="Repite la contraseña" placeholderTextColor="#000000"
          secureTextEntry={true}
          value={passwordValidation}
          onChangeText={setPasswordValidation}
        />

        <TouchableOpacity style={stylesCreateAccount.button} onPress={submit}>
        <Text style={stylesCreateAccount.buttonText}>Registrarse</Text>
      </TouchableOpacity>
        
        <Text style={stylesCreateAccount.subtitle}>
          ¿Ya tienes cuenta?{' '}
          <Text style={stylesCreateAccount.subtitleYellow}>Inicia sesión</Text>
        </Text>
      </View>
    );
  };

  export default function CreateAccount() {
    const submit = (nombre, apellido1, apellido2, email, password, passwordValidation) => {
    
        if (password != passwordValidation){ 
            console.log('Las contraseñas no coinciden')
        } else {
            console.log('Nombre:', nombre, 'Apellido1:', apellido1, 'Apellido2:', apellido2, 'Email:', email, 'Password:', password);
        }

    };
  
    return <CreateAccountScreen onRegister={submit} />;
  }
  
  const stylesCreateAccount = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 30,
    },
    image: {
      height: 220,
      width: '120%',
      marginBottom: 10
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'right'
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
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
    },
  });