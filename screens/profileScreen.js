import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState({});
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
        const usuarioGuardado = JSON.parse(usuarioGuardadoString);
        console.log('Usuario guardado:', usuarioGuardado);
        setUsuario(usuarioGuardado[0]);

        // Realiza las acciones necesarias con los datos del usuario
      } catch (error) {
        console.error(error);
      }
    };

    getUserFromStorage();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('usuario');
      console.log('Sesion cerrada correctamente');
      navigation.navigate('LoginScreen');
      // Realiza las acciones necesarias después de borrar el AsyncStorage
    } catch (error) {
      console.error('Error al cerrar sesion:', error);
    }
  };

  return (
    <View style={styles.containerGeneral}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Image source={require('../logos/usuario.png')} style={styles.image} />
      </View>
      <View style={styles.lineaSeparadora}></View>
      <View style={styles.infoUsuarioGeneral}>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Nombre:</Text>
          {editar ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              value={usuario.nombre}
              onChangeText={(text) => {
                setUsuario({ ...usuario, nombre: text });
              }}
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>{usuario.nombre}</Text>
          )}
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Apellidos:</Text>
          {editar ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              value={usuario.apellidos}
              onChangeText={(text) => {
                setUsuario({ ...usuario, apellidos: text });
              }}
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>{usuario.apellidos}</Text>
          )}
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Estado:</Text>
          {editar ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              value={usuario.frase}
              onChangeText={(text) => {
                setUsuario({ ...usuario, frase: text });
              }}
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>{usuario.frase}</Text>
          )}
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Mail:</Text>
          {editar ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              value={usuario.mail}
              onChangeText={(text) => {
                setUsuario({ ...usuario, mail: text });
              }}
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>{usuario.mail}</Text>
          )}
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Contraseña:</Text>
          {editar ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              value={usuario.pass}
              onChangeText={(text) => {
                setUsuario({ ...usuario, pass: text });
              }}
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>{usuario.pass}</Text>
          )}
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Plan:</Text>
          <Text style={styles.infoUsuarioTexto}>{usuario.plan}</Text>
        </View>
      </View>

      <View style={styles.botones}>
        {!editar ? (
          <View style={styles.botones}>
            <View style={styles.botonesDoble}>
              <TouchableOpacity style={styles.buttonDoble} onPress={() => setEditar(true)}>
                <Text style={styles.buttonText}>EDITAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDoble} onPress={() => navigation.navigate('PlanScreen')}>
                <Text style={styles.buttonText}>CAMBIAR PLAN</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>CERRAR SESION</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.botones}>
            <View style={styles.botonesDoble}>
              <TouchableOpacity style={styles.buttonDoble}>
                <Text style={styles.buttonText}>GUARDAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDoble} onPress={() => setEditar(false)}>
                <Text style={styles.buttonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: '5%',
    top: '5%',
  },
  containerGeneral: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: '10%',
    paddingTop: '15%',
    paddingBottom: '5%'
  },
  image: {
    width: 225,
    height: 225,
  },
  lineaSeparadora: {
    width: '100%',
    height: '1%',
    marginVertical: 20,
    backgroundColor: '#FAC710'
  },
  infoUsuarioGeneral: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  infoUsuario: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
  },
  imageInfoUsuario: {
    width: 55,
    height: 55,
  },
  infoUsuarioTextoCabecera: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  infoUsuarioTexto: {
    fontSize: 20,
    marginLeft: 10,
    color: 'white',
  },
  infoUsuarioEditar: {
    fontSize: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: '3%',
    padding: 5
  },
  botones: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  botonesDoble: {
    flexDirection: 'row',
    flex: 0,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FAC710',
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDoble: {
    width: '48%',
    height: 50,
    marginHorizontal: '2%',
    backgroundColor: '#FAC710',
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ProfileScreen;
