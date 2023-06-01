// Impoerts de librerias externas
import React, { useState, useEffect, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useNavigationState, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, ScrollView } from 'react-native';

// Imports de pantallas sin menu
import LoginScreen from './screens/loginScreen';
import CreateAccount from './screens/createAccountScreen';
import PlanScreen from './screens/planScreen';
import ProfileScreen from './screens/profileScreen';

// Imports de pantallas con menu
import ExerciseBigCard from './components/exerciseBigCard';
import FilterComponent from './components/filter';
import SliderComponentScreen from './components/slider';
import UserList from './components/userList';
import TrainingList from './components/trainingList';

// Imports de menus
import MenuInferior from './menuAbajo';
import MenuSuperior from './menuSuperior';
import MenuLateral from './components/menuLateral';

const Stack = createStackNavigator();

const CustomNavigationContainer = () => {
  const navigation = useNavigation();
  const [activeRouteName, setActiveRouteName] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRoute = navigation.getCurrentRoute();
      setActiveRouteName(currentRoute.name);
    });
    return unsubscribe;
  }, [navigation]);

  const cerrarMenu = async () => {
    setIsMenuVisible(false);
    console.log('Valor de Menu: ' + isMenuVisible);
  };

  return (
    <>
      {activeRouteName === 'LoginScreen'
        || activeRouteName === 'CreateAccountScreen'
        || activeRouteName === 'PlanScreen'
        || activeRouteName === 'ProfileScreen'
        || activeRouteName === ''
        ? null : <MenuSuperior onMenuPress={setIsMenuVisible}/>
      }
      <Stack.Navigator style={zIndex = 0} screenOptions={{ headerShown: false }}>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccount} />
        <Stack.Screen name="PlanScreen" component={PlanScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

        <Stack.Screen name="BigCardScreen" component={ExerciseBigCard} />
        <Stack.Screen name="FilterScreen" component={FilterComponent} />
        <Stack.Screen name="SliderScreen" component={SliderComponentScreen} />
        <Stack.Screen name="UserListScreen" component={UserList} />
        <Stack.Screen name="TrainingListScreen" component={TrainingList} />

      </Stack.Navigator>
      {/* <Text>Active Screen: {activeRouteName}</Text> */}
      {activeRouteName === 'LoginScreen'
        || activeRouteName === 'CreateAccountScreen'
        || activeRouteName === 'PlanScreen'
        || activeRouteName === 'ProfileScreen'
        || activeRouteName === ''
        ? null : <MenuInferior />
      }

      {/* En caso de que menuInvisible se encuentre en true, se ""generará"" el menu lateral */}
      {isMenuVisible
        ? (
          <TouchableOpacity style={styles.overlay} onPress={cerrarMenu}>
            <MenuLateral />
          </TouchableOpacity>
        ) : null}
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer >
      <CustomNavigationContainer />
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.4)', // 40% de opacidad
    height: '100%',
    width: '100%',
  },
});

export default App;
