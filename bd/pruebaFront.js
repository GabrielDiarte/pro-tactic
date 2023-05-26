import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



function PruebaBD() {
    const navigation = useNavigation();
    const route = useRoute();
    const { datos } = route.params;

    const [entrenamientos, setEntrenamientos] = useState([]);

  useEffect(() => {

    const imprimirMensaje = async () => {
        const { deporte, dificultad, edad, intensidad, objetivo, personas } = datos;
        const deporteQuery = "deporte: " + '"' + deporte + '",';
        const dificultadQuery = "dificultad: " + '"' + dificultad + '",';
        const edadQuery = "edad: " + '' + edad + ',';
        const intensidadQuery = "intensidad: " + '"' + intensidad + '",';
        const objetivoQuery = "objetivo: " + '"' + objetivo + '",';
        const personasQuery = "personas: " + '"' + personas + '",';

        var finalQuery = "";
        if (deporte != "Cualquiera"){
            finalQuery += deporteQuery;
        }
        if (dificultad != "Cualquiera"){
            finalQuery += dificultadQuery;
        }
        if (edad != "Cualquiera"){
            finalQuery += edadQuery;
        }
        if (intensidad != "Cualquiera"){
            finalQuery += intensidadQuery;
        }
        if (objetivo != "Cualquiera"){
            finalQuery += objetivoQuery;
        }
        if (personas != "Cualquiera"){
            finalQuery += personasQuery;
        }
        console.log(finalQuery);
        

        const baseUrl = 'http://192.168.1.102:3000/exercises/exercises';
        const filtro = `${encodeURIComponent(finalQuery)}`;
    
        const url = `${baseUrl}/${filtro}`;
        console.log('URL generada:', url);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                // console.log(response.data);
                setEntrenamientos(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    };

    imprimirMensaje();
  }, []);

    return (
        <View style={styles.containerGeneral}>
            <View style={styles.contenedor} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    {entrenamientos.map((entrenamiento) => (
                        <View style={styles.tarjeta} onPress={() => imprimirMensaje}>
                            <View style={styles.infoConFoto}>
                                <Image source={{ uri: entrenamiento.img }} style={styles.foto} />

                                <View style={styles.infoTarjeta}>
                                    <Text style={styles.nombre}>{entrenamiento.deporte}</Text>
                                    <Text style={styles.nombre}>{entrenamiento.nombre}</Text>
                                    <TouchableOpacity style={styles.buttonVerMas}
                                        // onPress={() => handleVerMas(entrenamiento.id)}
                                        onPress={() => { navigation.navigate('BigCardScreen', { nombre: entrenamiento.nombre }) }}>
                                        <Text style={styles.buttonVerMasText}>Ver más</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.descripcion}>{entrenamiento.dificultad}</Text>
                                    <Text style={styles.descripcion}>{entrenamiento.edad}</Text>
                                    <Text style={styles.descripcion}>{entrenamiento.intensidad}</Text>
                                    <Text style={styles.descripcion}>{entrenamiento.objetivo}</Text>
                                    <Text style={styles.descripcion}>{entrenamiento.personas}</Text>
                                    
                                </View>
                            </View>
                        </View>

                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.buttonVerMas} onPress={() => imprimirMensaje()}>
                    <Text style={styles.buttonVerMasText}>Ver más</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    containerGeneral: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        //backgroundColor: 'red'
    },
    contenedor: {
        flex: 1,
        width: '95%',
        marginVertical: 10,
        alignSelf: 'center',
        //backgroundColor: 'aquamarine',
        marginBottom: 85
    },
    tarjeta: {
        marginBottom: 10,
        height: 170,
        borderRadius: 8,
        backgroundColor: 'black'
    },
    infoConFoto: {
        flexDirection: 'row',
        marginHorizontal: '3%',
        marginVertical: '4%',
        width: '94%',
        height: '84%'
    },
    foto: {
        width: '50%',
        height: '100%',
        borderRadius: 5
    },
    infoTarjeta: {
        alignItems: 'center',
        width: '50%',
        height: '100%',
    },
    nombre: {
        width: '95%',
        marginLeft: '5%',
        height: '15%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    _descripcion: {
        width: '95%',
        marginLeft: '5%',
        height: '55%',
        textAlign: 'auto',
        marginTop: '2%',
        color: 'white',
    },
    get descripcion() {
        return this._descripcion;
    },
    set descripcion(value) {
        this._descripcion = value;
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FAC710',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    buttonVerMas: {

        width: '95%',
        height: 200,
        marginLeft: '5%',
        height: '20%',
        textAlign: 'center',
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',

    },
    buttonVerMasText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },



});

export default PruebaBD;
