import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlanScreen = () => {
    const navigation = useNavigation();

    const [selected, setSelected] = useState('');

    const submit = (plan) => {
        setSelected(plan)
        console.log("Has elegido el plan " + plan)
        
    };

    const valorNormal = {
        width: '100%',
        flexDirection: 'row',
    };

    const valorSeleccionado = {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: '#444444',
        paddingHorizontal: 2,
        borderColor: '#444444',
        marginBottom: 2
    };


    return (
        <View style={styles.containerGeneral}>
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
                <Image source={require('../logos/backArrow.png')} style={styles.backArrow} />
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.planes}>
                    <TouchableOpacity style={styles.planesTarjeta } onPress = {() => submit('basico')}>
                        <View style={selected === 'basico' ? valorSeleccionado : valorNormal } >
                            <Text style={styles.titulo}>Plan Básico</Text>
                            <Text style={styles.precio}>Gratis</Text>
                        </View>
                        <View style={styles.descripcionPlan}>
                            <Text style={styles.descripcionPlanText}>
                                El plan Básico que permite a los usuarios visualizar diferentes ejercicios.
                                Además, podrán seguir a otros usuarios y ver sus actividades.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.planesTarjeta } onPress = {() => submit('medium')}>
                        <View style={selected === 'medium' ? valorSeleccionado : valorNormal }>
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
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.planesTarjeta } onPress = {() => submit('pro')}>
                        <View style={selected === 'pro' ? valorSeleccionado : valorNormal }>
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
                    </TouchableOpacity>
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
        alignItems: 'center',
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
    },
    planesTarjeta: {
        width: '100%',
        height: '33%',
    },
    cabecera: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
   
    titulo: {
        textAlign: 'left',
        color: '#FAC710',
        //  backgroundColor: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        width: '65%',
    },
    precio: {
        color: 'white',
        // backgroundColor: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
        width: '35%',
        textAlign: 'right'
    },
    descripcionPlan: {
        flex: 1,
        marginBottom: '3%',
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

export default PlanScreen;