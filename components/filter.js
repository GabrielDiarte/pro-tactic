import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const opcionesCampo1 = ['Cualquiera','Futbol', 'Basket'];
const opcionesCampo2 = ['Cualquiera', 'Low', 'Medium', 'Hard'];
const opcionesCampo3 = ['Cualquiera', 'Low', 'Medium', 'Hard'];
const opcionesCampo4 = ['Cualquiera', 'Individual', 'Parejas', 'Grupos'];
const opcionesCampo5 = ['Cualquiera', '7', '14', '18'];
const opcionesCampo6 = ['Cualquiera', 'Calentamiento', 'Fisico', 'Estiramiento'];

const FilterComponent = () => {
    const navigation = useNavigation();

    const [dato, setDato] = useState('');
    const [deporte, setDeporte] = useState(opcionesCampo1[0]);
    const [dificultad, setDificultad] = useState(opcionesCampo2[0]);
    const [intensidad, setIntensidad] = useState(opcionesCampo3[0]);
    const [personas, setPersonas] = useState(opcionesCampo4[0]);
    const [edad, setEdad] = useState(opcionesCampo5[0]);
    const [objetivo, setObjetivo] = useState(opcionesCampo6[0]);

    const buscar = () => {
        const datos = {
          deporte,
          dificultad,
          intensidad,
          personas,
          edad,
          objetivo,
        };
        // Envía los datos a la pantalla de destino
        // navigation.navigate('PruebaBD', { datos });
        navigation.navigate('TrainingListScreen', { datos });
      };

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>BUSCAR EJERCICIOS</Text>
            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Deporte</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={deporte}
                        onValueChange={(value) => setDeporte(value)}
                    >
                        {opcionesCampo1.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Dificultad</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={dificultad}
                        onValueChange={(value) => setDificultad(value)}
                    >
                        {opcionesCampo2.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Intensidad</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={intensidad}
                        onValueChange={(value) => setIntensidad(value)}
                    >
                        {opcionesCampo3.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Numero de personas</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={personas}
                        onValueChange={(value) => setPersonas(value)}
                    >
                        {opcionesCampo4.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Edad</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={edad}
                        onValueChange={(value) => setEdad(value)}
                    >
                        {opcionesCampo5.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Objetivos</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={objetivo}
                        onValueChange={(value) => setObjetivo(value)}
                    >
                        {opcionesCampo6.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={buscar}>
                            <Text style={styles.buttonText}>Filtrar</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 100,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 10,
        textShadowColor: '#FAC710'
    },
    pickerWrapper: {
        width: '100%',
        marginBottom: 20,
    },
    pickerTitle: {
        marginBottom: 10,
    },
    pickerContainer: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',    
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
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

export default FilterComponent;
