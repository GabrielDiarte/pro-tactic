import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MenuLateral from './components/menuLateral';
import MenuInferior from './menuAbajo';
import TrainingList from './components/trainingList';

function MenuSuperior({ onMenuPress}) {
    const navigation = useNavigation();

    const handlePress = (vairbale) => {
        navigation.navigate('ProfileScreen');
    };
    const abrirMenu = async () => {
        onMenuPress(true);
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.menuSuperior}>
                <TouchableOpacity onPress={abrirMenu}>
                    <Image source={require('./logos/tres-puntos.png')} style={styles.imagenMenuSuperior} />
                </TouchableOpacity>
                <Text style={styles.textoMenuSuperior}>PRO-TACTIC</Text>
                <TouchableOpacity onPress={()=>handlePress(true)}>
                    <Image source={require('./logos/usuario.png')} style={styles.imagenMenuSuperior} />
                </TouchableOpacity>
            </View>
            <View style={styles.lineaSuperior}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        position: 'relative',
    },
    contenido: {
        flex: 1,
    },
    menuSuperior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    lineaSuperior: {
        height: 6,
        backgroundColor: '#FAC710',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% de opacidad
    },
    menuLateral: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '80%',
        backgroundColor: '#FFFFFF',
        zIndex: 2,
    },
    imagenMenuSuperior: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    textoMenuSuperior: {
        height: 40,
        marginTop: 28,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textoMenuInferior: {
        height: 40,
        marginTop: 28,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default MenuSuperior;
