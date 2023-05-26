import React, { useState, useEffect }from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {

    const [usuario, setUsuario] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const nombreQuery = "nombre: " + '"' + nombre + '",';

            const baseUrl = 'http://192.168.1.102:3000/exercises/exercises';
            const filtro = `${encodeURIComponent(nombreQuery)}`;

            const url = `${baseUrl}/${nombreQuery}`;
            console.log('URL generada parte 2:', url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log('Respuesta:', data); // Mostrar respuesta en la consola
                setEntrenamientosIndividual(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.containerGeneral}>
            <TouchableOpacity style={styles.backArrow} onPress={console.log('Esto no va a ningun lado jefe')}>
                <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
                <Image source={require('../logos/usuario.png')} style={styles.image} />
            </View>
            <View style={styles.lineaSeparadora}></View>
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
    );
};

const styles = StyleSheet.create({
    backArrow: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: '5%',
        top: '5%',
    },
    containerGeneral: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: '10%',
        paddingTop: '15%',
        paddingBottom: '5%'
    },
    image: {
        width: 225,
        height: 225,
    },
    lineaSeparadora: {
        width: '100%',
        height: '1.5%',
        marginVertical: 20,
        backgroundColor: '#FAC710'
    },
    infoUsuarioGeneral: {
        flex: 1,
        flexDirection: 'column',
    },
    infoUsuario: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageInfoUsuario: {
        width: 55,
        height: 55,
    },
    infoUsuarioTexto: {
        fontSize: 25,
        marginLeft: 10,
        marginRight: '25%',
        fontWeight: 'bold',
        color: 'white'
    },
    botones: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
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

export default ProfileScreen;
