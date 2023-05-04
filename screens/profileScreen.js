import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const profileScreen = () => {
    return (
        <View style={styles.containerGeneral}>
            <TouchableOpacity style={styles.backArrow} onPress={console.log('Esto no va a ningun lado jefe')}>
            <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Image source={require('../logos/usuario.png')} style={styles.image} />
                <View style={styles.lineaSeparadora}></View>
                <View style={styles.gazapo}>
                    <View style={styles.infoUsuarioGeneral}>
                        <View style={styles.infoUsuario}>
                            <Image source={require('../logos/edit.png')} style={styles.imageInfoUsuario} />
                            <Text style={styles.infoUsuarioTexto}>Laura</Text>
                        </View >
                        <View style={styles.infoUsuario}>
                            <Image source={require('../logos/edit.png')} style={styles.imageInfoUsuario} />
                            <Text style={styles.infoUsuarioTexto}>García Fernández</Text>
                        </View>
                        <View style={styles.infoUsuario}>
                            <Image source={require('../logos/edit.png')} style={styles.imageInfoUsuario} />
                            <Text style={styles.infoUsuarioTexto}>lauragar@gmail.com</Text>
                        </View>
                        <View style={styles.infoUsuario}>
                            <Image source={require('../logos/edit.png')} style={styles.imageInfoUsuario} />
                            <Text style={styles.infoUsuarioTexto}>Nunca digas nunca!! 😜</Text>
                        </View>
                        
                    </View>
                    <View style={styles.botones}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>CAMBIAR PLAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>CERRAR SESION</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    backArrow: {
        width: 50, 
        height: 50,
        position: 'absolute',
        left: '5%',
        top: '3%',
    },
    containerGeneral: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginTop: '15%',
        marginBottom: '10%',
        alignItems: 'center',
        alignContent: 'center',
        width: '80%',
        marginHorizontal: '10%',
       // backgroundColor: 'aquamarine'
    },
    image: {
        width: 225,
        height: 225,
        margin: 10
    },
    lineaSeparadora: {
        width: '100%',
        height: '1.5%',
        marginVertical: 20,
        backgroundColor: '#FAC710'
    },
    gazapo: {
        width: '100%',
        flex : 1,
    }, 
    infoUsuarioGeneral: {
        flex: 1,
        marginVertical: 5,
        flexDirection: 'column',   
        width: '100%',
        height: '70%',
       // backgroundColor: 'green'
    },
    infoUsuario: {
        flex: 1,
        marginVertical: 5,
        flexDirection: 'row',
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        //height: 60,
        alignItems: 'center'
    },
    imageInfoUsuario: {
        width: 60,
        height: 60,
        marginHorizontal: 5
    },
    infoUsuarioTexto: {
        fontSize: 25,
        marginLeft: '3%',
        marginRight: '25%',
        fontWeight: 'bold',
        color: 'white'
    },
    botones: {
        height: '30%',
        //flex: 1,
        width: '100%',
        // position: 'absolute',
        // bottom: 0,
        //backgroundColor: 'grey'
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FAC710',
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default profileScreen;
