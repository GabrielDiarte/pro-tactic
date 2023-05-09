import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/database';
import MenuInferior from '../menuAbajo';
import MenuSuperior from '../menuSuperior';


function ExerciseBigCard() {

    return (
        <View style={styles.contenedor}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.tituloTexto}>POSESIÓN POR EQUIPOS</Text>
                </View>
                <View style={styles.fotoContainer}>
                    <Image source={require('../fotos/futbol/posesion.jpg')} style={styles.foto} />
                </View>
                <View style={styles.descripcionContainer}>
                    <Text style={styles.tituloDescripcion}>Características</Text>
                    <View style={styles.caracteristicasContainer}>
                        <View style={styles.caracteristicasContainerIndividual}>
                            <View style={styles.prueba}>
                                <Text style={styles.prueba2}>Dificultad</Text>
                            </View>
                            <Text style={styles.textoCaracteristicas}>Baja</Text>
                        </View>
                        <View style={styles.caracteristicasContainerIndividual}>
                            <View style={styles.prueba}>
                                <Text style={styles.prueba2}>Intensidad</Text>
                            </View>
                            <Text style={styles.textoCaracteristicas}>Media</Text>
                        </View>
                        <View style={styles.caracteristicasContainerIndividual}>
                            <View style={styles.prueba}>
                                <Text style={styles.prueba2}>Edad recomendada:</Text>
                            </View>
                            <Text style={styles.textoCaracteristicas}>14-20</Text>
                        </View>
                    </View>
                    <Text style={styles.tituloDescripcion}>Descripción</Text>
                    <Text style={styles.descripcionTexto}>
                        Realizar una posesión entre 2 equipos. Cada equipo tiene un comodín en cada
                        lateral del área de trabajo. El objetivo de cada equipo es realizar 10 pases
                        seguidos. Cada vez que se haga un pasa a un comodín exterior, se deberá cambiar
                        la posición con él. El ejercicio finaliza cuando un equipos consiga 3 puntos o
                        se acabe el tiempo de trabajo.
                    </Text>
                    <Text style={styles.tituloDescripcion}>Material necesario</Text>
                    <View style={styles.materialNecesarioContainer}>
                        <View style={styles.materialContainerIndividual}>
                            <Text style={styles.materialNecesarioTexto}>· Conos</Text>
                        </View>
                        <View style={styles.materialContainerIndividual}>
                            <Text style={styles.materialNecesarioTexto}>· Petos</Text>
                        </View>
                        <View style={styles.materialContainerIndividual}>
                            <Text style={styles.materialNecesarioTexto}>· Balones</Text>
                        </View>
                        <View style={styles.materialContainerIndividual}>
                            <Text style={styles.materialNecesarioTexto}>· Balones</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
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
        textShadowOffset: {width: 2, height: 2},
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
        height: 50, // 20 porque asi pilla 2 lineas de texto
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
