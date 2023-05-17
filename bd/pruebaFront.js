import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';


// const [ejercicios, setEjercicios] = useState([]);

const imprimirMensaje = () => {
    const tabla = "exercises";
    const filtro = "_intensidad: 'baja'";

    fetch(`http://localhost:3000/exercises/${tabla}/${filtro}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Aquí puedes hacer algo con los datos recibidos   
    })
    .catch(error => console.error(error));

    return (


        <TouchableOpacity style={styles.buttonVerMas} onPress={() => imprimirMensaje()}>
            <Text style={styles.buttonVerMasText}>Ver más</Text>
        </TouchableOpacity>

    );

};

export default imprimirMensaje();

const entrenamientos = [
    // {
    //     _id: "6463286891cb219bcf0a6f1a",
    //     _name: 'Posesion por equipos',
    //     _dificultad: 'facil',
    //     _intensidad: 'media',
    //     _nPerso: 8
    // },
    // {
    //     _id: "6463298391cb219bcf0a6f1b",
    //     _name: 'Control de balon',
    //     _dificultad: 'facil',
    //     _intensidad: 'baja',
    //     _nPerso: 1
    // }
];


// function PruebaBD() {

//     return (
//         <View style={styles.containerGeneral}>
//             <View style={styles.contenedor} >
//                 <ScrollView showsVerticalScrollIndicator={false} >
//                     {entrenamientos.map((entrenamiento) => (
//                         <View style={styles.tarjeta} onPress={() => imprimirMensaje}>
//                             <View style={styles.infoConFoto}>
//                                 <Image source={{ uri: entrenamiento.imagen }} style={styles.foto} />

//                                 <View style={styles.infoTarjeta}>
//                                     <Text style={styles.nombre}>{entrenamiento._name}</Text>
//                                     <Text style={styles.descripcion}>{entrenamiento._dificultad}</Text>
//                                     <Text style={styles.descripcion}>{entrenamiento._intensidad}</Text>
//                                     <Text style={styles.descripcion}>{entrenamiento._nPerso}</Text>
//                                     <TouchableOpacity style={styles.buttonVerMas}
//                                         // onPress={() => handleVerMas(entrenamiento.id)}
//                                         onPress={() => { navigation.navigate('BigCardScreen') }}>
//                                         <Text style={styles.buttonVerMasText}>Ver más</Text>
//                                     </TouchableOpacity>

//                                 </View>
//                             </View>
//                         </View>

//                     ))}
//                 </ScrollView>
//                 <TouchableOpacity style={styles.buttonVerMas} onPress={() => imprimirMensaje()}>
//                     <Text style={styles.buttonVerMasText}>Ver más</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     );

// }

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

// export default PruebaBD;
