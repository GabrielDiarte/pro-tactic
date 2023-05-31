import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const [nameError, setNameError] = useState(false);
  const [apellido1Error, setApellido1Error] = useState(false);
  const [apellido2Error, setApellido2Error] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorExistente, setEmailErrorExistente] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordValidationError, setPasswordValidationError] = useState(false);

  const fetchData = async () => {
    const baseUrl = 'http://192.168.1.102:3000/users/users';
    const filtro = `${encodeURIComponent(name)}/${encodeURIComponent(apellido1)}/${encodeURIComponent(apellido2)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;

    const url = `${baseUrl}/${filtro}`;
    console.log('URL buscar usuarios:', url);

    try {
      const response = await fetch(url, {method: 'POST'});
      console.log("Usuario:" + email + " insertado correctamente");
      iniciarSesion();
    } catch (error) {
      console.log("Usuario:" + email + " no se ha podido insertar");
      console.error(error);
    }
  };

  const comprobarUsuario = async () => {
    const emailQuery = "mail: " + '"' + email + '",';

    const baseUrl = 'http://192.168.1.102:3000/exercises/users';
    const filtro = `${encodeURIComponent(emailQuery)}`;

    const url = `${baseUrl}/${filtro}`;
    console.log('URL buscar usuarios:', url);
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Respuesta:', data);
      const updatedUsuario = data;
      await AsyncStorage.setItem('usuario', JSON.stringify(data));
      
      if (updatedUsuario && updatedUsuario.length > 0) {
        setEmailErrorExistente(true);
      } else {
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }

  };

  const iniciarSesion = async () => {
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
      
      if (updatedUsuario && updatedUsuario.length > 0) {
        navigation.navigate('SliderScreen');
      } else {
        console.log("Prueba");
      }
    } catch (error) {
      console.error(error);
    }

  };
  const submit = () => {
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (apellido1 === "") {
      setApellido1Error(true);
    } else {
      setApellido1Error(false);
    }
    if (apellido2 === "") {
      setApellido2Error(true);
    } else {
      setApellido2Error(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (passwordValidation != password) {
      setPasswordValidationError(true);
    } else {
      setPasswordValidationError(false);
    }

    if (name != "" && apellido1 != "" && apellido2 != "" && email != "" && password != "" && passwordValidation != "" && (password === passwordValidation)) {
      comprobarUsuario();
    }

    console.log(
      'Nombre:',
      name,
      'Apellido1:',
      apellido1,
      'Apellido2:',
      apellido2,
      'Email:',
      email,
      'Password:',
      password
    );


  };

  return (
    <View style={stylesCreateAccount.container}>

      <Image source={require('../logos/silbato-fondo.jpg')} style={stylesCreateAccount.image} />
      <Text style={stylesCreateAccount.title}>Pro-Tactic</Text>
      <TextInput
        style={nameError ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Nombre" placeholderTextColor="#000000"
        value={name}
        onChangeText={setName}
      />
      <View style={stylesCreateAccount.containerError}>
        {nameError && (
          <Text style={stylesCreateAccount.textoError}>Introduce un nombre válido</Text>
        )}
      </View>
      <TextInput
        style={apellido1Error ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Primer apellido" placeholderTextColor="#000000"
        value={apellido1}
        onChangeText={setApellido1}
      />
      <View style={stylesCreateAccount.containerError}>
        {apellido1Error && (
          <Text style={stylesCreateAccount.textoError}>Introduce un apellido válido</Text>
        )}
      </View>
      <TextInput
        style={apellido2Error ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Segundo apellido" placeholderTextColor="#000000"
        value={apellido2}
        onChangeText={setApellido2}
      />
      <View style={stylesCreateAccount.containerError}>
        {apellido2Error && (
          <Text style={stylesCreateAccount.textoError}>Introduce un apellido válido</Text>
        )}
      </View>
      <TextInput
        style={emailError || emailErrorExistente ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Correo electrónico" placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
      />
      <View style={stylesCreateAccount.containerError}>
        {emailError && (
          <Text style={stylesCreateAccount.textoError}>Introduce un correo válido</Text>
        )}
        {emailErrorExistente && (
          <Text style={stylesCreateAccount.textoError}>Correo existente en la base de datos</Text>
        )}
      </View>
      <TextInput
        style={passwordError ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Contraseña" placeholderTextColor="#000000"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={stylesCreateAccount.containerError}>
        {passwordError && (
          <Text style={stylesCreateAccount.textoError}>Introduce una contraseña válida</Text>
        )}
      </View>
      <TextInput
        style={passwordValidationError ? stylesCreateAccount.inputError : stylesCreateAccount.input}
        placeholder="Repite la contraseña" placeholderTextColor="#000000"
        secureTextEntry={true}
        value={passwordValidation}
        onChangeText={setPasswordValidation}
      />
      <View style={stylesCreateAccount.containerError}>
        {passwordValidationError && (
          <Text style={stylesCreateAccount.textoError}>Las contraseñas deben coincidir</Text>
        )}
      </View>

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

export default CreateAccountScreen;

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
  },
  inputError: {
    width: '100%',
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#FFCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  containerError: {
    width: '100%',
    height: 25,
  },
  textoError: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'left'
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