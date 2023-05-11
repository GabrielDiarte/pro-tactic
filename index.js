import { registerRootComponent } from 'expo';

import App from './App';
import createAccount from './createAccount';
import MenuAbajo from './menuAbajo';
import MenuSuperior from './menuSuperior';
import TrainingList from './trainingList';
import MenuLateral from './components/menuLateral';
import profileScreen from './screens/profileScreen';
import { AppRegistry } from 'react-native';
import planScreen from './screens/planScreen';
import userList from './components/userList';
import userListScreen from './screens/userListScreen';
import exerciseBigCard from './components/exerciseBigCard';
import BigCardScreen from './screens/bigCardScreen';
import SliderComponent from './components/slider';
import SliderComponentScreen from './components/slider';
import sliderScreen from './screens/sliderScreen';
import filterComponent from './components/filter';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

//registerRootComponent(App);
//registerRootComponent(createAccount);
//registerRootComponent(MenuAbajo);
//registerRootComponent(MenuSuperior);
//registerRootComponent(TrainingList);
//registerRootComponent(MenuLateral);
//registerRootComponent(profileScreen);
//registerRootComponent(planScreen);
//registerRootComponent(userList)
//registerRootComponent(userListScreen)
//registerRootComponent(exerciseBigCard)
//registerRootComponent(BigCardScreen)
//registerRootComponent(sliderComponent)
//registerRootComponent(sliderScreen)
registerRootComponent(filterComponent)
