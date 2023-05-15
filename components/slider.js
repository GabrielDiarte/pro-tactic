import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, SliderComponent } from 'react-native';
import Swiper from 'react-native-swiper';

import firebase from 'firebase/app';
import 'firebase/database';


function SliderComponentScreen() {

    const images = [
        require('../fotos/futbol/posesion.jpg'),
        require('../fotos/basket/balon.png'),
        require('../fotos/futbol/basculacion.jpg'),
    ];

    return (
        <View style={styles.contenedor}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>TOP FUTBOL</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                        <Swiper
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay={true}
                            autoplayTimeout={5}
                            loop={true}>
                            {images.map((image, index) => (
                                <Image source={image} style={styles.foto} resizeMode="cover" />

                            ))}
                        </Swiper>
                    </View>
                    <View style={styles.textoAbajoContainer}>
                        <Text style={styles.textoAbajoTexto}>Más ejercicios</Text>
                    </View>
                </View>

                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>TOP BALONCESTO</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                        <Swiper
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay={true}
                            autoplayTimeout={5}
                            loop={true}>
                            {images.map((image, index) => (
                                <Image source={image} style={styles.foto} resizeMode="cover" />

                            ))}
                        </Swiper>
                    </View>
                    <View style={styles.textoAbajoContainer}>
                        <Text style={styles.textoAbajoTexto}>Más ejercicios</Text>
                    </View>
                </View>

                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>MAS RECIENTES</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                        <Swiper
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay={true}
                            autoplayTimeout={5}
                            loop={true}>
                            {images.map((image, index) => (
                                <Image source={image} style={styles.foto} resizeMode="cover" />

                            ))}
                        </Swiper>
                    </View>
                    <View style={styles.textoAbajoContainer}>
                        <Text style={styles.textoAbajoTexto}>Más ejercicios</Text>
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
    tarjetaSlider: {
        height: 300,
        margin: 5,
    },
    tituloContainer: {
        marginBottom: 8,
        justifyContent: 'center',
    },
    tituloTexto: {
        fontSize: 30,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        textShadowColor: '#FAC710'
    },
    imagenCraousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 8,
        borderColor: 'black',
        // borderRadius: 10

    },
    foto: {
        height: '100%',
        width: '100%',
    },

    dotStyle: {
        backgroundColor: 'black',
        width: 10,
        height: 10,
    },
    activeDotStyle: {
        backgroundColor: '#FAC710',
        width: 12,
        height: 12,
    },

    textoAbajoContainer: {
        alignItems: 'center'
    },
    textoAbajoTexto: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }



});

export default SliderComponentScreen;
