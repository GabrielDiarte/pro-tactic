import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

function MenuInferior() {
    return (
        <View style={styles.contenedor}>
            <View style={styles.linea}></View>
            <View style={styles.menu}>
                <View style={styles.barraAmarilla}></View>
                <TouchableOpacity style={styles.apartado}>
                    <Image source={require('./logos/lupa.png')} style={styles.imagen} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.apartado}>
                    <Image source={require('./logos/casa.png')} style={styles.imagen} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.apartado}>
                    <Image source={require('./logos/usuario.png')} style={styles.imagen} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    linea: {
        height: 10,
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        backgroundColor: '#FAC710'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
        height: 80,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    apartado: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 30,
        height: 30,
        marginBottom: 20,
    },
});

export default MenuInferior;
