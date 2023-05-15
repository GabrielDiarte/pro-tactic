import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const opcionesCampo1 = ['Futbol ', 'Basket'];
const opcionesCampo2 = ['Low', 'Medium', 'Hard'];
const opcionesCampo3 = ['Low', 'Medium', 'Hard'];
const opcionesCampo4 = ['Individual', 'Parejas', 'Grupos'];
const opcionesCampo5 = ['+7', '+14', '+18'];
const opcionesCampo6 = ['Calentamiento', 'Fisico', 'Estiramiento '];

const FilterComponent = () => {
    const navigation = useNavigation();

    const [dato, setDato] = useState('');
    const [opcion1, setOpcion1] = useState(opcionesCampo1[0]);
    const [opcion2, setOpcion2] = useState(opcionesCampo2[0]);
    const [opcion3, setOpcion3] = useState(opcionesCampo3[0]);
    const [opcion4, setOpcion4] = useState(opcionesCampo4[0]);
    const [opcion5, setOpcion5] = useState(opcionesCampo5[0]);
    const [opcion6, setOpcion6] = useState(opcionesCampo6[0]);

    const buscar = () => {
        // Lógica para realizar la búsqueda
    };

    return (
        
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={dato}
                onChangeText={setDato}
                placeholder="Buscar Actividad"
            />
            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Deporte</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={opcion1}
                        onValueChange={(value) => setOpcion1(value)}
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
                        selectedValue={opcion2}
                        onValueChange={(value) => setOpcion2(value)}
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
                        selectedValue={opcion3}
                        onValueChange={(value) => setOpcion3(value)}
                    >
                        {opcionesCampo3.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>

            <View style={styles.pickerWrapper}>
                <Text style={styles.pickerTitle}>Personas</Text>
                <View style={styles.pickerContainer}>
                    <PickerRN
                        selectedValue={opcion4}
                        onValueChange={(value) => setOpcion4(value)}
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
                        selectedValue={opcion5}
                        onValueChange={(value) => setOpcion5(value)}
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
                        selectedValue={opcion6}
                        onValueChange={(value) => setOpcion6(value)}
                    >
                        {opcionesCampo6.map((opcion) => (
                            <PickerRN.Item key={opcion} label={opcion} value={opcion} />
                        ))}
                    </PickerRN>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('TrainingListScreen')}}>
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
