import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

function ExerciseBigCard() {
    const route = useRoute();
    const { nombre } = route.params;

    const [entrenamientosIndividual, setEntrenamientosIndividual] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const nombreQuery = "nombre: " + '"' + nombre + '",';

            const baseUrl = 'http://192.168.1.102:3000/exercises/exercises';
            const filtro = `${encodeURIComponent(nombreQuery)}`;

            const url = `${baseUrl}/${filtro}`;
            console.log('URL generada parte 2:', url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log('Respuesta:', data); // Mostrar respuesta en la consola
                setEntrenamientosIndividual(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const bajo = {
        color: 'green',
        fontSize: 25,
    };
    const medio = {
        color: 'yellow'
    };
    const alto = {
        color: 'red',
        fontSize: 25,
    };

    return (
        <View style={styles.containerGeneral}>
            <View style={styles.contenedor}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {entrenamientosIndividual.map((entrenamiento, index) => (
                        <View key={index}>
                            <View style={styles.tituloContainer}>
                                <Text style={styles.tituloTexto}>{entrenamiento.nombre}</Text>
                            </View>
                            <View style={styles.fotoContainer}>
                                <Image source={require('../fotos/futbol/posesion.jpg')} style={styles.foto} />
                            </View>
                            <View style={styles.descripcionContainer}>
                                <Text style={styles.tituloDescripcion}>Atributos</Text>
                                <View style={styles.caracteristicasContainer}>
                                    <View style={styles.caracteristicasContainerIndividual}>
                                        <View style={styles.prueba}>
                                            <Text style={styles.prueba2}>Dificultad</Text>
                                        </View>
                                       <Text style={entrenamiento.dificultad === 'Low' ? bajo : alto}>{entrenamiento.dificultad}</Text>

                                    </View>
                                    <View style={styles.caracteristicasContainerIndividual}>
                                        <View style={styles.prueba}>
                                            <Text style={styles.prueba2}>Intensidad</Text>
                                        </View>
                                        <Text style={entrenamiento.intensidad === 'Low' ? bajo : entrenamiento.intensidad === 'Medium' ? medio : alto} >{entrenamiento.intensidad}</Text>
                                    </View>
                                    <View style={styles.caracteristicasContainerIndividual}>
                                        <View style={styles.prueba}>
                                            <Text style={styles.prueba2}>Edad minima:</Text>
                                        </View>
                                        <Text style={styles.textoCaracteristicas}>{entrenamiento.edad}</Text>
                                    </View>
                                </View>
                                <Text style={styles.tituloDescripcion}>Descripción</Text>
                                <Text style={styles.descripcionTexto}>{entrenamiento.descripcion}</Text>
                                <Text style={styles.tituloDescripcion}>Material necesario</Text>
                                <View style={styles.materialNecesarioContainer}>
                                    {entrenamiento.material.map((material, index) => (
                                        <View key={index} style={styles.materialContainerIndividual}>
                                            <Text style={styles.materialNecesarioTexto}>{material}</Text>
                                        </View>
                                    ))}

                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    containerGeneral: {
        flex: 1
    },
    contenedor: {
        flex: 1,
        width: '90%',
        marginBottom: 110,
        alignSelf: 'center',
    },
    tituloContainer: {
        alignItems: 'center',
        marginBottom: 8,
        justifyContent: 'center',
    },
    tituloTexto: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textShadowColor: '#FAC710'
    },
    fotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    foto: {
        height: 230,
        width: '100%',
        borderRadius: 15
    },
    descripcionContainer: {
        flex: 1,
    },
    tituloDescripcion: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10
    },
    caracteristicasContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    caracteristicasContainerIndividual: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prueba: {
        height: 50,
        textAlign: 'center',
        justifyContent: 'center'
    },
    prueba2: {
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
    },
    textoCaracteristicas: {
        fontSize: 25,
        color: 'green'
    },
    descripcionTexto: {
        textAlign: 'justify',
        fontSize: 15,
        paddingHorizontal: 20,
    },
    materialNecesarioContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'wrap'
    },
    materialContainerIndividual: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginHorizontal: '1.5%',
        marginBottom: '1.5%',
    },
});

export default ExerciseBigCard;
