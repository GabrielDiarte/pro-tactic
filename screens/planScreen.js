import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlanScreen = () => {
    const navigation = useNavigation();

    const [planes, setPlanes] = useState([]);
    const [selected, setSelected] = useState('');
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = 'http://192.168.1.102:3000/exercises/planes';
            console.log('URL planes:', baseUrl);
            try {
                const response = await fetch(baseUrl);
                const data = await response.json();
                console.log('Todos los planes:', data); // Mostrar respuesta en la consola
                setPlanes(data);
            } catch (error) {
                console.error(error);
            }
        };

        const getUserFromStorage = async () => {
            try {
              const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
              const usuarioGuardado = JSON.parse(usuarioGuardadoString);
              console.log('Usuario guardado:', usuarioGuardado[0].plan);
              setSelected(usuarioGuardado[0].plan);
              
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
        setSelected(planSeleccionado);
        console.log("Has elegido el plan " + planSeleccionado);
    };



    const valorNormal = {
        width: '100%',
        flexDirection: 'row',
    };

    const valorSeleccionado = {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: '#444444',
        paddingHorizontal: 2,
        borderColor: '#444444',
        marginBottom: 2
    };


    return (
        <View style={styles.containerGeneral}>
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.planes}>
                    {planes.map((planesMap, index) => (
                        <TouchableOpacity
                            style={styles.planesTarjeta}
                            onPress={() => submit({ valorPlan: planesMap.plan })}
                            key={index}>
                            <View style={planesMap.plan === selected ? valorSeleccionado : valorNormal}>
                                <Text style={styles.titulo}>Plan {planesMap.plan}</Text>
                                <Text style={styles.precio}>{planesMap.price}</Text>
                            </View>
                            <View style={styles.descripcionPlan}>
                                <Text style={styles.descripcionPlanText}>
                                {planesMap.descripcion}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                </View>
                <View style={styles.botones}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>ELEGIR PLAN</Text>
                    </TouchableOpacity>
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
        top: '3%',
    },
    containerGeneral: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '80%',
        marginTop: '25%',
        marginBottom: '15%',
        //backgroundColor: 'aquamarine',
    },
    planes: {
        width: '100%',
        height: '90%',
    },
    planesTarjeta: {
        width: '100%',
        height: '33%',
    },
    cabecera: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    titulo: {
        textAlign: 'left',
        color: '#FAC710',
        //  backgroundColor: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        width: '65%',
    },
    precio: {
        color: 'white',
        // backgroundColor: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
        width: '35%',
        textAlign: 'right'
    },
    descripcionPlan: {
        flex: 1,
        marginBottom: '3%',
        //backgroundColor: 'red'
    },
    descripcionPlanText: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        textAlign: 'justify',
    },
    botones: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        //backgroundColor: 'green',
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