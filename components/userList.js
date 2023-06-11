import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function UserList() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaAmigos, setListaAmigos] = useState([]);
    const [usuarioGuardado, setUsuario] = useState({});
    const [amigoDejarSeguir, setAmigoDejarSeguir] = useState('');

    const [actualizarPagina, setActualizarPagina] = useState(false);
    const [dejarDeSeguir, setDejarDeSeguir] = useState(false);

    useEffect(() => {
        setActualizarPagina(false);
        const getUserFromStorage = async () => {
            try {
                const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
                const usuarioGuardado = JSON.parse(usuarioGuardadoString);
                //console.log('Usuario guardado:', usuarioGuardado[0].mail);
                setUsuario(usuarioGuardado[0].mail);
                await getAmigosList(usuarioGuardado[0].mail);
                // Realiza las acciones necesarias con los datos del usuario
            } catch (error) {
                console.error(error);
            }
        };

        const getUserList = async () => {
            const baseUrl = 'http://192.168.1.102:3000/exercises/users';
            console.log('URL buscar usuarios:', baseUrl);

            try {
                const response = await fetch(baseUrl);
                const data = await response.json();
                setListaUsuarios(data);
            } catch (error) {
                console.error(error);
            }
        };

        const getAmigosList = async (mailUsuario) => {
            const emailQuery = "mailUsuario:" + '"' + mailUsuario + '"';

            const baseUrl = 'http://192.168.1.102:3000/exercises/amigos';
            const filtro = `${emailQuery}`;
            const url = `${baseUrl}/${filtro}`;
            console.log('URL buscar amigos usuarios:', url);

            try {
                const response = await fetch(url);
                const data = await response.json();
                setListaAmigos(data);
                //console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        getUserFromStorage();
        getUserList();
    }, [actualizarPagina, dejarDeSeguir]);

    const handleSeguir = async (idAmigo) => {
        const baseUrl = 'http://192.168.1.102:3000/insertAmigos/amigos';
        const url = `${baseUrl}/${idAmigo}/${usuarioGuardado}`;
        console.log('URL insertar amigos usuarios:', url);

        try {
            const response = await fetch(url, { method: 'POST' });
            // Verificar el estado de la respuesta
            setActualizarPagina(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handledejarDeSeguir = async (idAmigo) => {
        setDejarDeSeguir(true);
        setAmigoDejarSeguir(idAmigo);
    };

    const borrarDefinitivo = async () => {
        const baseUrl = 'http://192.168.1.102:3000/borrarAmigos/amigos';
        const url = `${baseUrl}/${amigoDejarSeguir}/${usuarioGuardado}`;
        console.log('URL borrar amigos usuarios:', url);

        try {
            const response = await fetch(url, { method: 'POST' });
            setDejarDeSeguir(false);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={styles.containerGeneral}>
            <View style={styles.contenedor}>
                <Text style={styles.title}>USUARIOS</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {listaUsuarios.filter(usuario => usuario.mail != usuarioGuardado).map(usuario => (
                        <View key={usuario.id} style={styles.infoConFoto}>
                            <View style={styles.fotoContainer}>
                                <Image source={require('../logos/usuario.png')} style={styles.foto} />
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
                                {listaAmigos.some((amigo) => amigo.mailAmigo === usuario.mail) ? (
                                    <TouchableOpacity style={styles.buttonSiguiendo} onPress={() => handledejarDeSeguir(usuario.mail)}>
                                        <Text style={styles.buttonSeguirText}>Siguiendo</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity style={styles.buttonSeguir} onPress={() => handleSeguir(usuario.mail)}>
                                        <Text style={styles.buttonSeguirText}>Seguir</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            {dejarDeSeguir && (
                <View style={styles.overlayContainer}>
                    <View style={styles.overlayContent}>
                        <Text style={styles.overlayText}>
                            ¿Seguro que quieres dejar de seguir a {amigoDejarSeguir}?
                        </Text>

                        <View style={styles.botones}>
                            <TouchableOpacity style={styles.buttonPopUP} onPress={ () =>  borrarDefinitivo()}>
                                <Text style={styles.buttonTextPopUP}>ACEPTAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPopUP} onPress={() => setDejarDeSeguir(false)}>
                                <Text style={styles.buttonTextPopUP}>CANCELAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

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
        alignItems: 'center',
        marginBottom: 85
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginVertical: 10,
        textShadowColor: '#FAC710'
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
    buttonSiguiendo: {
        height: '40%',
        marginHorizontal: '5%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSeguirText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },


    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    overlayContent: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 8,
        marginBottom: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    overlayText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '2.5%',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    botones: {
        width: '100%',
        marginTop: '2.5%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonPopUP: {
        width: '40%',
        marginHorizontal: '5%',
        height: 50,
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPopUPAceptar: {
        width: '90%',
        marginHorizontal: '5%',
        height: 50,
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextPopUP: {
        fontSize: 18,
        paddingHorizontal: 2,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default UserList;
