import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/loginScreen';
import CreateAccount from './screens/createAccountScreen';
import SliderScreen from './screens/sliderScreen';
import BigCardScreen from './screens/bigCardScreen';
import FilterScreen from './screens/filterScreen';
import PlanScreen from './screens/planScreen';
import ProfileScreen from './screens/profileScreen';
import UserListScreen from './screens/userListScreen';
import TrainingListScreen from './screens/trainingListScreen';
import PruebaBD from './bd/pruebaFront';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BigCardScreen" component={BigCardScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="PlanScreen" component={PlanScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SliderScreen" component={SliderScreen} />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccount} />
        <Stack.Screen name="TrainingListScreen" component={TrainingListScreen} />

        <Stack.Screen name="PruebaBD" component={PruebaBD} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
