import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MenuLateral() {
    const navigation = useNavigation();

    const logout = async () => {
        try {
          await AsyncStorage.removeItem('usuario');
          console.log('Sesion cerrada correctamente');
          navigation.navigate('LoginScreen');
          // Realiza las acciones necesarias después de borrar el AsyncStorage
        } catch (error) {
          console.error('Error al cerrar sesion:', error);
        }
      };


    return (
        <View style={styles.contenedorMenuLateral}>
            <View style={styles.menuLateral}>
                <Text style={styles.titulo}>Pro-Tactic</Text>
                <TouchableOpacity style={styles.botonMenuLateral}>
                    <Image source={require('../logos/futbol.png')} style={styles.imagenBotonMenuLateral} />
                    <Text style={styles.textoMenuLateral}>Futbol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuLateral}>
                    <Image source={require('../logos/basket.png')} style={styles.imagenBotonMenuLateral} />
                    <Text style={styles.textoMenuLateral}>Baloncesto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuLateral}  onPress={() => { navigation.navigate('PlanScreen')}}>
                    <Image source={require('../logos/change.png')} style={styles.imagenBotonMenuLateral} />
                    <Text style={styles.textoMenuLateral}>Cambiar plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuLateral}  onPress={() => { navigation.navigate('UserListScreen')}}>
                    <Image source={require('../logos/usuario.png')} style={styles.imagenBotonMenuLateral} />
                    <Text style={styles.textoMenuLateral}>Amigos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonMenuLateral} onPress={() => { navigation.navigate('CreateExerciseScreen')}}>
                    <Image source={require('../logos/nuevo.png')} style={styles.imagenBotonMenuLateral}  />
                    <Text style={styles.textoMenuLateral}>Crear ejercicio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCerrarSesion} onPress={() => { logout()}}>
                    <Text style={styles.buttonCerrarSesionText}>CERRAR SESIÓN</Text>
                </TouchableOpacity>
                
            </View>
            
            <View style={styles.lineaLateral}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    contenedorMenuLateral: {
        flex: 1,
        flexDirection: 'row',
    },
    titulo:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginVertical: '5%'
    },
    textoMenuLateral:{
        color: '#FAC710',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    lineaLateral: {
        width: 6,
        backgroundColor: '#FAC710'
    },
    menuLateral: {
        width: '70%',
        flexDirection: 'column',
        backgroundColor: '#000000',
        height: '100%',
        paddingTop: '10%'
    },
    botonMenuLateral: {
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    imagenBotonMenuLateral: {
        width: 30,
        height: 30,
    },

    buttonCerrarSesion: {
        position: 'absolute',
        bottom: 0,
        marginBottom: '15%',
        width: '80%',
        marginHorizontal: '10%',
        height: '6%',
        textAlign: 'center',
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',

    },
    buttonCerrarSesionText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default MenuLateral;
