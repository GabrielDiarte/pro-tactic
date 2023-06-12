import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState({});
  const [editar, setEditar] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [estado, setEstado] = useState("");
  const [pass, setPass] = useState("");

  const [initialNombre, setInitialNombre] = useState("");
  const [initialApellidos, setInitialApellidos] = useState("");
  const [initialEstado, setInitialEstado] = useState("");
  const [initialPass, setInitialPass] = useState("");

  const [editarNombre, setEditarNombre] = useState(false);
  const [editarApellidos, setEditarApellidos] = useState(false);
  const [editarEstado, setEditarEstado] = useState(false);
  const [editarPass, setEditarPass] = useState(false);

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
        const usuarioGuardado = JSON.parse(usuarioGuardadoString);
        console.log('Usuario guardado:', usuarioGuardado);
        setUsuario(usuarioGuardado[0]);
        setNombre(usuario.nombre);
        setApellidos(usuario.apellidos);
        setEstado(usuario.estado);
        setPass(usuario.pass);

        setInitialNombre(usuario.nombre);
        setInitialApellidos(usuario.apellidos);
        setInitialEstado(usuario.estado);
        setInitialPass(usuario.pass);

        // Realiza las acciones necesarias con los datos del usuario
      } catch (error) {
        console.error(error);
      }
    };

    getUserFromStorage();
  }, []);

  const editarUsuario = async () => {
    console.log("Nombre: " + usuario.nombre);
    console.log("Apellidos: " + usuario.apellidos);
    console.log("Mail: " + usuario.mail);
    console.log("Estado: " + usuario.frase);
    console.log("Pass: " + usuario.pass);
    console.log("usuario: " + JSON.stringify(usuario));

    const baseUrl = 'http://192.168.1.102:3000/updateUser/users';
    const filtro = `${usuario.mail}/${usuario.nombre}/${usuario.apellidos}/${usuario.frase}/${usuario.pass}`;
    const url = `${baseUrl}/${filtro}`;

    console.log(url);

    try {
      const response = await fetch(url, { method: 'PUT' });
      console.log('Usuario actualizado correctamente');
      await AsyncStorage.removeItem('usuario');
      await AsyncStorage.setItem('usuario', JSON.stringify([usuario]));
      setUsuario(usuario);
    } catch (error) {
      console.error(error);
    }

    setEditarNombre(false);
    setEditarApellidos(false);
    setEditarEstado(false);
    setEditarPass(false);

  };

  const cancelarEditar = async () => {
    setEditarNombre(false);
    setEditarApellidos(false);
    setEditarEstado(false);
    setEditarPass(false);

    setNombre(usuario.nombre);
    setApellidos(usuario.apellidos);
    setEstado(usuario.estado);
    setPass(usuario.pass);

    setUsuario({ ...usuario, nombre: initialNombre, apellidos: initialApellidos, estado: initialEstado, pass: initialPass });
  };


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
        {!editarNombre ? (
          <TouchableOpacity onPress={() => setEditarNombre(true)}>
            <Image source={require('../logos/edit.png')} style={styles.imageEdit} />
          </TouchableOpacity>
            ) : (null)}
          <Text style={styles.infoUsuarioTextoCabecera}>Nombre:</Text>
          {editarNombre ? (
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
        {!editarApellidos ? (
          <TouchableOpacity onPress={() => setEditarApellidos(true)}>
            <Image source={require('../logos/edit.png')} style={styles.imageEdit} />
          </TouchableOpacity>
            ) : (null)}
          <Text style={styles.infoUsuarioTextoCabecera}>Apellidos:</Text>
          {editarApellidos ? (
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
          {!editarEstado ? (
          <TouchableOpacity onPress={() => setEditarEstado(true)}>
            <Image source={require('../logos/edit.png')} style={styles.imageEdit} />
          </TouchableOpacity>
            ) : (null)}
          <Text style={styles.infoUsuarioTextoCabecera}>Estado:</Text>
          {editarEstado ? (
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
          <Text style={styles.infoUsuarioTexto}>{usuario.mail}</Text>
        </View>

        <View style={styles.infoUsuario}>
          {!editarPass ? (
          <TouchableOpacity onPress={() => setEditarPass(true)}>
            <Image source={require('../logos/edit.png')} style={styles.imageEdit} />
          </TouchableOpacity>
            ) : (null)}
          <Text style={styles.infoUsuarioTextoCabecera}>Contraseña:</Text>
          {editarPass ? (
            <TextInput
              style={styles.infoUsuarioEditar}
              secureTextEntry
            />
          ) : (
            <Text style={styles.infoUsuarioTexto}>********</Text>
          )}
        </View>

        {editarPass ? (
          <View style={styles.infoUsuario}>
            <TouchableOpacity onPress={() => setEditarPass(true)}>
            </TouchableOpacity>
            <Text style={styles.infoUsuarioTextoCabecera}>Nueva contraseña:</Text>
            <TextInput style={styles.infoUsuarioEditar} secureTextEntry />
          </View>
        ) : (null)}

        {editarPass ? (
          <View style={styles.infoUsuario}>
            <TouchableOpacity onPress={() => setEditarPass(true)}>
            </TouchableOpacity>
            <Text style={styles.infoUsuarioTextoCabecera}>Repetir contraseña:</Text>
            <TextInput style={styles.infoUsuarioEditar} secureTextEntry />
          </View>
        ) : (null)}

        <View style={styles.infoUsuario}>
          <Text style={styles.infoUsuarioTextoCabecera}>Plan:</Text>
          <Text style={styles.infoUsuarioTexto}>{usuario.plan}</Text>
        </View>

        
      <View style={styles.botonesGeneral}>
        {!editarNombre && !editarApellidos && !editarEstado && !editarPass ? (
          <View style={styles.botones}>

              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanScreen')}>
                <Text style={styles.buttonText}>CAMBIAR PLAN</Text>
              </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>CERRAR SESION</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.botones}>
            <View style={styles.botonesDoble}>
              <TouchableOpacity style={styles.buttonDoble} onPress={() => editarUsuario()}>
                <Text style={styles.buttonText}>GUARDAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonDoble} onPress={() => cancelarEditar()}>
                <Text style={styles.buttonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

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
  imageEdit: {
    width: 40,
    height: 40,
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
    justifyContent: 'space-between',
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
    fontSize: 20,
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
  botonesGeneral: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
