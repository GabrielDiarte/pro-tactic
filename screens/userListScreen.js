import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import MenuLateral from '../components/menuLateral';
import MenuInferior from '../menuAbajo';
import UserList from '../components/userList';

function userListScreen() {
    const [menuVisible, setMenuVisible] = useState(false);

    // Esto hay que mirarlo bien, ya que esta el contenido metido dentro del menu superior, de formar que el overlay del menu lateral sirva para todos

    return (
        <View style={styles.contenedor}>
            <View style={styles.menuSuperior}>
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <Image source={require('../logos/tres-puntos.png')} style={styles.imagenMenuSuperior} />
                </TouchableOpacity>
                <Text style={styles.textoMenuSuperior}>PRO-TACTIC</Text>
                <Image source={require('../logos/usuario.png')} style={styles.imagenMenuSuperior} />
            </View>
            <View style={styles.lineaSuperior}></View>

            <View style={styles.contenido}>
                <UserList></UserList>
            </View>

            {/* En caso de que menuInvisible se encuentre en true, se ""generará"" el menu lateral */}
            {menuVisible && (
                <TouchableOpacity style={styles.overlay} onPress={() => setMenuVisible(false)}>
                    <MenuLateral style={styles.menuLateral} />
                </TouchableOpacity>
            )}

            
                <MenuInferior></MenuInferior>
            
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
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
        marginBottom: 10,
        backgroundColor: '#FAC710',
    },
    imagenMenuSuperior: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% de opacidad
    },
    menuLateral: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '70%',
        backgroundColor: '#000000',
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
});

export default userListScreen;
