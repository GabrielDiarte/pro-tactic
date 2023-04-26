import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import MenuInferior from './menuAbajo';

function MenuSuperior() {
    return (
        <View style={styles.contenedor}>
            <View style={styles.menuSuperior}>
                <Image source={require('./logos/tres-puntos.png')} style={styles.imagenMenuSuperior} />
                <Image source={require('./logos/usuario.png')} style={styles.imagenMenuSuperior} />
            </View>
            <View style={styles.lineaSuperior}></View>
            <View style={styles.contenedorMenuInferior}>
                <MenuInferior />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
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
        height: 10,
        backgroundColor: '#FAC710'
    },
    imagenMenuSuperior: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    contenedorMenuInferior: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default MenuSuperior;
