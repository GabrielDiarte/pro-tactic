import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const planScreen = () => {
    return (
        <View style={styles.containerGeneral}>
            <TouchableOpacity style={styles.backArrow} onPress={console.log('Esto no va a ningun lado jefe')}>
                <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.planes}>
                    <View style={styles.planesTarjeta}>
                        <View style={styles.cabecera}>
                            <Text style={styles.titulo}>Plan Básico</Text>
                            <Text style={styles.precio}>Gratis</Text>
                        </View>
                        <View style={styles.descripcionPlan}>
                            <Text style={styles.descripcionPlanText}>
                                El plan Básico que permite a los usuarios visualizar diferentes ejercicios.
                                Además, podrán seguir a otros usuarios y ver sus actividades.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.planesTarjeta}>
                        <View style={styles.cabecera}>
                            <Text style={styles.titulo}>Plan Medium</Text>
                            <Text style={styles.precio}>3.99€</Text>
                        </View>
                        <View style={styles.descripcionPlan}>
                            <Text style={styles.descripcionPlanText}>
                                El plan Medium ofrece a los usuarios poder ver TODOS los
                                ejercicios que la aplicación ofrece. Además de esto, se elimina completamente
                                la publicidad.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.planesTarjeta}>
                        <View style={styles.cabecera}>
                            <Text style={styles.titulo}>Plan Pro</Text>
                            <Text style={styles.precio}>6.99€</Text>
                        </View>
                        <View style={styles.descripcionPlan}>
                            <Text style={styles.descripcionPlanText}>
                                El plan Pro dispone de todas las ventajas anteriores,
                                añadiendo la funcionalidad de comentar y valorar los ejercicios.
                                Además, permite crear ejercicios para aportar más información a la app.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.botones}>
                <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>ELEGIR PLAN</Text>
                </TouchableOpacity>
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
        width: '80%',
        marginTop: '25%',
        marginBottom: '15%',
        //backgroundColor: 'aquamarine',
    },
    planes: {
        width: '100%',
        height: '90%',
        //backgroundColor: 'grey',
    },
    planesTarjeta: {
        width: '100%',
        height: '33%',
        //backgroundColor: 'blue',
    },
    cabecera: {
        width: '100%',
        //backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        textAlign: 'left',
        color: '#FAC710',
        // backgroundColor: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        width: '65%',
    },
    precio: {
        color: 'white',
        //backgroundColor: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
        width: '30%',
        marginLeft: '5%'
    },
    descripcionPlan: {
        flex: 1,
        marginRight: '3%',
        marginVertical: '3%',
        //backgroundColor: 'red'
    },
    descripcionPlanText: {
        flex: 1,
        fontSize: 20,
        color: 'white',
        textAlign: 'justify',
    },
    botones: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        //backgroundColor: 'green',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FAC710',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default planScreen;