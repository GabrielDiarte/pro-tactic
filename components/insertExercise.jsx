import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const opcionesCampo1 = ['Futbol', 'Basket'];
const opcionesCampo2 = ['Low', 'Medium', 'Hard'];
const opcionesCampo3 = ['Low', 'Medium', 'Hard'];
const opcionesCampo4 = ['Individual', 'Parejas', 'Grupos'];
const opcionesCampo5 = ['7', '14', '18'];
const opcionesCampo6 = ['Calentamiento', 'Fisico', 'Estiramiento'];

const CreateExerciseScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [deporte, setDeporte] = useState(opcionesCampo1[0]);
    const [dificultad, setDificultad] = useState(opcionesCampo2[0]);
    const [intensidad, setIntensidad] = useState(opcionesCampo3[0]);
    const [personas, setPersonas] = useState(opcionesCampo4[0]);
    const [edad, setEdad] = useState(opcionesCampo5[0]);
    const [objetivo, setObjetivo] = useState(opcionesCampo6[0]);

    const [nameError, setNameError] = useState(false);
    const [descripcionError, setDescripcionError] = useState(false);
    const [ejercicioExistente, setEjercicioExistente] = useState(false);

    const [plan, setPlan] = useState("");

    const getUserFromStorage = async () => {
        try {
          const usuarioGuardadoString = await AsyncStorage.getItem('usuario');
          const usuarioGuardado = JSON.parse(usuarioGuardadoString);
          setPlan(usuarioGuardado[0].plan);
          // Realiza las acciones necesarias con los datos del usuario
        } catch (error) {
          console.error(error);
        }
      };

    const submit = async () => {
        if (name === "") {
            setNameError(true);
        } else {
            await comprobarEjercicio(); // Esperar a que se complete la función
            setNameError(false);
        }

        if (description === "") {
            setDescripcionError(true);
        } else {
            setDescripcionError(false);
        }
    };

    useEffect(() => {
        getUserFromStorage();
        if (name !== "" && description !== "" && !ejercicioExistente) {
            createExercise();
        }

    }, [ejercicioExistente]);

    const comprobarEjercicio = async () => {
        const nombreQuery = "nombre: " + '"' + name + '",';
        const deporteQuery = "deporte: " + '"' + deporte + '",';
        const finalQuery = nombreQuery + deporteQuery;
        const baseUrl = 'http://192.168.1.102:3000/exercises/exercises';
        const filtro = `${encodeURIComponent(finalQuery)}`;
        const url = `${baseUrl}/${filtro}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const checkExercise = JSON.stringify(data);
            console.log('Respuesta:'+ checkExercise+":Respuesta");

            if (checkExercise !== "[]") {
                setEjercicioExistente(true);
            } else {
                setEjercicioExistente(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const createExercise = async () => {
        const baseUrl = 'http://192.168.1.102:3000/insertExercise/exercises';
        const filtro = `${name}/${description}/${deporte}/${dificultad}/${intensidad}/${personas}/${edad}/${objetivo}`;
        const url = `${baseUrl}/${filtro}`;

        try {
            const response = await fetch(url, { method: 'POST' });
            console.log("Ejercicio:" + name + " insertado correctamente");

        } catch (error) {
            console.log("Ejercicio:" + name + " no se ha podido insertar");
            console.error(error);
        }
    };

    return (
        <View style={styles.containerGrande}>
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.tituloTexto}>CREAR EJERCICIO</Text>
                <TextInput style={nameError || ejercicioExistente ? styles.inputError : styles.input}
                    placeholder="Nombre del Ejercicio"
                    value={name}
                    onChangeText={setName}
                />
                <View style={styles.containerError}>
                    {nameError && (
                        <Text style={styles.textoError}>Introduce un nombre válido</Text>
                    )}
                    {ejercicioExistente && (
                        <Text style={styles.textoError}>Ejercicio existente en la base de datos</Text>
                    )}
                </View>
                <TextInput style={descripcionError ? styles.inputError : styles.input}
                    placeholder="Descripción del Ejercicio"
                    value={description}
                    onChangeText={setDescription}
                />
                <View style={styles.containerError}>
                    {descripcionError && (
                        <Text style={styles.textoError}>Introduce una descricpión válida</Text>
                    )}
                </View>
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
                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.buttonText}>Crear Ejercicio</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
              {plan !== 'Pro' && (
                <View style={styles.overlayContainer}>
                  <Text style={styles.overlayText}>¡Este contenido solo está disponible para usuarios Pro!</Text>
                </View>
              )}
              </View>
    );
};

const styles = StyleSheet.create({
    containerGrande: {
      flex: 1,
    },
    container: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    tituloTexto: {
      marginVertical: 10,
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    inputError: {
      width: '100%',
      height: 40,
      borderWidth: 3,
      borderColor: 'red',
      backgroundColor: '#FFCCCC',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    textoError: {
      fontSize: 15,
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'left'
    },
    containerError: {
      width: '100%',
      height: 25,
      justifyContent: 'center',
      textAlign: 'left'
    },
    pickerWrapper: {
      width: '100%',
      marginBottom: 10,
    },
    pickerTitle: {
      marginBottom: 5,
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
  
    // Estilos de la pantalla de aviso
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingHorizontal: 20,
    },
  
    // Estilos del modal
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    modalButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 8,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
  export default CreateExerciseScreen;