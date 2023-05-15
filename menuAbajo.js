import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';


function MenuInferior() {
    const navigation = useNavigation();
    
    return (

        <View style={styles.contenedorMenuInferior}>
            <View style={styles.lineaInferior}></View>
            <View style={styles.menuInferior}>
                <View style={styles.barraAmarilla}></View>
                <TouchableOpacity style={styles.botonMenuInferior} onPress={() => { navigation.navigate('FilterScreen')}}>
                    <Image source={require('./logos/lupa.png')} style={styles.imagenBotonMenuInferior} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuInferior} onPress={() => { navigation.navigate('SliderScreen')}}>
                    <Image source={require('./logos/casa.png')} style={styles.imagenBotonMenuInferior} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuInferior} onPress={() => { navigation.navigate('UserListScreen')}}>
                    <Image source={require('./logos/usuario.png')} style={styles.imagenBotonMenuInferior} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorMenuInferior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    lineaInferior: {
        height: 6,
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        backgroundColor: '#FAC710'
    },
    menuInferior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
        height: 80,
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    botonMenuInferior: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenBotonMenuInferior: {
        width: 30,
        height: 30,
        marginBottom: 20,
    },
});

export default MenuInferior;
