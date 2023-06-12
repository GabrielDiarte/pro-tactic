import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

function SliderComponentScreen() {
    const navigation = useNavigation();
    const imagesFutbol = [
        require('../fotos/futbol/posesion.jpg'),
        require('../fotos/futbol/centro.jpg'),
        require('../fotos/futbol/basculacion.jpg'),
    ];
    const imagesBasket = [
        require('../fotos/basket/22.jpg'),
        require('../fotos/basket/balon.png'),
        require('../fotos/basket/basketon.jpg'),
    ];
    const imagesMixtas = [
        require('../fotos/futbol/circuit.jpg'),
        require('../fotos/basket/corro.jpg'),
        require('../fotos/futbol/combinacion.jpg'),
    ];
    const imagesCalentamientos = [
        require('../fotos/basket/posesion.jpg'),
        require('../fotos/futbol/cuadra.jpg'),
        require('../fotos/basket/panuelo.jpg'),
    ];

    const [deporte, setDeporte] = useState("Cualquiera");
    const [dificultad, setDificultad] = useState("Cualquiera");
    const [intensidad, setIntensidad] = useState("Cualquiera");
    const [personas, setPersonas] = useState("Cualquiera");
    const [edad, setEdad] = useState("Cualquiera");
    const [objetivo, setObjetivo] = useState("Cualquiera");

    const datos = {
        deporte,
        dificultad,
        intensidad,
        personas,
        edad,
        objetivo,
    };

    const buscar = () => {
        navigation.navigate('TrainingListScreen', { datos });
    };
    const buscarDeporte = (deporteData) => {
        datos.deporte = deporteData;
        datos.dificultad = "Cualquiera";
        datos.intensidad = "Cualquiera";
        datos.personas = "Cualquiera";
        datos.edad = "Cualquiera";
        datos.objetivo = "Cualquiera";
        console.log(datos);
        buscar();
        
    };

    const buscarDificultad = (dificultadData) => {
        datos.dificultad = dificultadData;
        datos.deporte = "Cualquiera";
        datos.intensidad = "Cualquiera";
        datos.personas = "Cualquiera";
        datos.edad = "Cualquiera";
        datos.objetivo = "Cualquiera";
        console.log(datos);
        buscar();
    };

    const buscarObejtivo = (objetivoData) => {
        datos.objetivo = objetivoData;
        datos.dificultad = "Cualquiera",
        datos.deporte = "Cualquiera";
        datos.intensidad = "Cualquiera";
        datos.personas = "Cualquiera";
        datos.edad = "Cualquiera";
        console.log(datos);
        buscar();
    };

    return (
        <View style={styles.contenedor}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>TOP FUTBOL</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                        <TouchableOpacity onPress={() => {
                            buscarDeporte("Futbol");
                        }}>
                            <Swiper
                                dotStyle={styles.dotStyle}
                                activeDotStyle={styles.activeDotStyle}
                                autoplay={true}
                                autoplayTimeout={5}
                                loop={true}
                            >
                                {imagesFutbol.map((image, index) => (
                                    <Image source={image} style={styles.foto} resizeMode="cover" key={index} />
                                ))}
                            </Swiper>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>TOP BALONCESTO</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                    <TouchableOpacity onPress={() => {
                            buscarDeporte("Basket");
                        }}>
                            <Swiper
                                dotStyle={styles.dotStyle}
                                activeDotStyle={styles.activeDotStyle}
                                autoplay={true}
                                autoplayTimeout={5}
                                loop={true}
                            >
                                {imagesBasket.map((image, index) => (
                                    <Image source={image} style={styles.foto} resizeMode="cover" key={index} />
                                ))}
                            </Swiper>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>LAS MÁS DIFICILES</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                    <TouchableOpacity onPress={() => {
                            buscarDificultad("Hard");
                        }}>
                        <Swiper
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay={true}
                            autoplayTimeout={5}
                            loop={true}
                        >
                            {imagesMixtas.map((image, index) => (
                                <Image source={image} style={styles.foto} resizeMode="cover" key={index} />
                            ))}
                        </Swiper>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.tarjetaSlider}>
                    <View style={styles.tituloContainer}>
                        <Text style={styles.tituloTexto}>PARA CALENTAR</Text>
                    </View>
                    <View style={styles.imagenCraousel}>
                    <TouchableOpacity onPress={() => {
                            buscarObejtivo("Calentamiento");
                        }}>
                        <Swiper
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay={true}
                            autoplayTimeout={5}
                            loop={true}
                        >
                            {imagesCalentamientos.map((image, index) => (
                                <Image source={image} style={styles.foto} resizeMode="cover" key={index} />
                            ))}
                        </Swiper>
                        </TouchableOpacity>
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
        marginBottom: 87,
        alignSelf: 'center',
    },
    tarjetaSlider: {
        height: 300,
        margin: 5,
    },
    tituloContainer: {
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
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
