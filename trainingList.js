import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import MenuSuperior from './menuSuperior';

function TrainingList() {
    const entrenamientos = [
        {
            id: 1,
            // imagen: './fotos/futbol/posesion.jpg',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAbIQ6kkqfA5HSWcTYIQGNTnwHMSYH6_jWW4XOHkfNSWDTWlJLYQsq2X4GKjUg8yvXtM&usqp=CAU',
            nombre: 'Ejercicio 1',
            descripcion: 'Una breve descripción del ejercicio 1.Una breve descripción del ejercicio 1.',
        },
        {
            id: 2,
            imagen: 'https://www.fiebrefutbol.es/wp-content/uploads/2012/08/2.jpg',
            nombre: 'Ejercicio 2',
            descripcion: 'Una breve descripción del ejercicio 2.Una breve descripción del ejercicio 2.',
        },
        {
            id: 3,
            imagen: 'https://i.pinimg.com/736x/41/c0/30/41c03069aa145face6fa90aae4507251.jpg',
            nombre: 'Ejercicio 3',
            descripcion: 'Una breve descripción del ejercicio 3.Una breve descripción del ejercicio 3.',
        },
    ];

    const handleVerMas = (id) => {
        console.log(`Ver más sobre el ejercicio ${id}`);
    };

    return (
        <View style={styles.contenedor}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cambiar filtros</Text>
                </TouchableOpacity>
                {entrenamientos.map((entrenamiento) => (
                    <View style={styles.tarjeta}>
                        <View key={entrenamiento.id}  style={styles.infoConFoto}>
                            <Image source={{ uri: entrenamiento.imagen }} style={styles.foto} />
                            <View style={styles.infoTarjeta}>
                                <Text style={styles.nombre}>{entrenamiento.nombre}</Text>
                                <Text style={styles.descripcion}>{entrenamiento.descripcion}</Text>
                                <TouchableOpacity style={styles.buttonVerMas} onPress={() => handleVerMas(entrenamiento.id)}>
                                    <Text style={styles.buttonVerMasText}>Ver más</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}

        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 0,
        width: '95%',
        marginTop: 70,
        alignSelf: 'center',
    },
    tarjeta: {
        marginBottom: 10,
        height: '25%',
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
        // Falta centrar el texto verticalmente
    },
    _descripcion: {
        width: '95%',
        marginLeft: '5%',
        height: '55%',
        textAlign: 'auto',
        marginTop: '2,5%',
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
        marginBottom: 20,
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
        marginLeft: '5%',
        height: '20%',
        textAlign: 'center',
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5,5%',
        
    },
    buttonVerMasText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },



});

export default TrainingList;
