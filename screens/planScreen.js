import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlanScreen = () => {
  const navigation = useNavigation();

  const [planes, setPlanes] = useState([]);
  const [selected, setSelected] = useState('');
  const [selectedNew, setSelectedNew] = useState('');
  const [usuario, setUsuario] = useState({});

  const [planError, setPlanError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'http://192.168.1.102:3000/exercises/planes';
      console.log('URL planes:', baseUrl);
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        //console.log('Todos los planes:', data); // Mostrar respuesta en la consola
        setPlanes(data);
      } catch (error) {
        console.error(error);
      }
    };

    const getUserFromStorage = async () => {
      try {
        const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
        const usuarioGuardado = JSON.parse(usuarioGuardadoString);
        setSelected(usuarioGuardado[0].plan);
        setSelectedNew(usuarioGuardado[0].plan);
        setUsuario(usuarioGuardado[0]);
        // Realiza las acciones necesarias con los datos del usuario
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    getUserFromStorage();
  }, []);

  const submit = (valorPlan) => {
    const planSeleccionado = valorPlan.valorPlan;
    setSelectedNew(planSeleccionado);
  };

  const cambiarPlan = async () => {
    await updatePlan();
  };

  const updatePlan = async () => {
    const baseUrl = 'http://192.168.1.102:3000/updateUser/users';
    const filtro = `${usuario.mail}/${selectedNew}`;
    const url = `${baseUrl}/${filtro}`;

    console.log(url);

    try {
      const response = await fetch(url, { method: 'PUT' });
      console.log('Usuario actualizado correctamente');
      usuario.plan = selectedNew;
      await AsyncStorage.removeItem('usuario');
      await AsyncStorage.setItem('usuario', JSON.stringify([usuario]));
      setUsuario(usuario);
    } catch (error) {
      console.error(error);
    }
  };

  const valorNormal = {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 2,
  };

  const valorSeleccionado = {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: '#444444',
    paddingHorizontal: 2,
    borderColor: '#444444',
    marginBottom: 2,
  };

  return (
    <View style={styles.containerGeneral}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
      </TouchableOpacity>

      <View style={styles.container}>
        {planes.map((planesMap, index) => (
          <TouchableOpacity
            style={styles.planesTarjeta}
            onPress={() => submit({ valorPlan: planesMap.plan })}
            key={index}>
            <View style={planesMap.plan === selectedNew ? valorSeleccionado : valorNormal}>
              <Text style={styles.titulo}>Plan {planesMap.plan}</Text>
              <Text style={styles.precio}>{planesMap.price}</Text>
            </View>

            <Text style={styles.descripcionPlanText}>{planesMap.descripcion}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => cambiarPlan()}>
          <Text style={styles.buttonText}>ELEGIR PLAN</Text>
        </TouchableOpacity>
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
    top: '3%',
  },
  containerGeneral: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    marginTop: '20%',
    flex: 1,
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cabecera: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'left',
    color: '#FAC710',
    fontSize: 30,
    fontWeight: 'bold',
    width: '65%',
  },
  precio: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    width: '35%',
    textAlign: 'right',
  },
  descripcionPlan: {
    flex: 0,
  },
  descripcionPlanText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'justify',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FAC710',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default PlanScreen;
