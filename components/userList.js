import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/database';

const usuarios = [
    {
        id: 1,
        // imagen: '../logos/usuario.png',
        imagen: 'https://media.licdn.com/dms/image/C4E03AQGOp1pI282jJg/profile-displayphoto-shrink_800_800/0/1654237113201?e=2147483647&v=beta&t=tVk65TzFENESf61bC2uDNdX3aZWem3d9vaJIBnDgPV8',
        nombre: 'Carmen',
        frase: 'Work Hard!!! 💪',
    },
    {
        id: 2,
        imagen: 'https://cdn-7.motorsport.com/images/mgl/6AEomeD6/s800/fernando-alonso-aston-martin-r-1.jpg',
        nombre: 'Fernando',
        frase: 'F1 🏎️🔝',
    },
    {
        id: 3,
        imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sara-carbonero-instagram-1585641041.jpg',
        nombre: 'Sara',
        frase: 'Focus 😊🙌',
    },

];

function UserList() {

    const [busqueda, setBusqueda] = useState('');

    return (
        <View style={styles.containerGeneral}>
            {/* <MenuSuperior /> */}

            <View style={styles.contenedor}>
                    <TextInput
                        style={styles.input}
                        placeholder="Busca usuario..." placeholderTextColor="#000000"
                        value={busqueda}
                        secureTextEntry={false}
                        onChangeText={(text) => setBusqueda(text)}
                    />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {usuarios.map((usuario) => (

                        <View key={usuario.id} style={styles.infoConFoto}>

                            <View style={styles.fotoContainer}>
                                <Image source={{ uri: usuario.imagen }} style={styles.foto} />
                            </View>

                            <View style={styles.infoTarjeta}>
                                <View style={styles.nombreContainer}>
                                    <Text style={styles.nombre}>{usuario.nombre}</Text>
                                </View>
                                <View style={styles.fraseContainer}>
                                    <Text style={styles.descripcion}>{usuario.frase}</Text>
                                </View>
                            </View>

                            <View style={styles.botonContainer}>
                                <TouchableOpacity style={styles.buttonSeguir} onPress={() => handleSeguir(usuario.id)}>
                                    <Text style={styles.buttonSeguirText}>Seguir</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))}
                </ScrollView>

            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    input: {
        width: '95%',
        marginHorizontal: '2.5%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    containerGeneral: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
    },
    contenedor: {
        flex: 1,
        width: '95%',
        marginVertical: 10,
        alignSelf: 'center',
        marginBottom: 85
    },
    infoConFoto: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '3%',
        marginVertical: '2%',
    },
    fotoContainer: {
        width: '25%',
    },
    foto: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    infoTarjeta: {
        width: '50%',
    },
    nombreContainer: {
        height: '50%',
        justifyContent: 'flex-end',
    },
    fraseContainer: {
        height: '50%',
        justifyContent: 'flex-start',
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 20
    },
    descripcion: {
        fontWeight: 'normal',
        fontSize: 15
    },
    botonContainer: {
        width: '25%',
        justifyContent: 'center',
    },
    buttonSeguir: {
        height: '40%',
        marginHorizontal: '5%',
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSeguirText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },



});

export default UserList;
