import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import MenuInferior from './menuAbajo';

function MenuSuperior() {
    return (

        <View>
            <View style={styles.menu}>
                <Image source={require('./logos/tres-puntos.png')} style={styles.imagen} />
                <Image source={require('./logos/usuario.png')} style={styles.imagen} />
            </View>
            <View style={styles.linea}></View>
        
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
        height: 100,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    linea: {
        height: 10,
        left: 0,
        right: 0,
        backgroundColor: '#FAC710'
    },
    imagen: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
});

export default MenuSuperior;
