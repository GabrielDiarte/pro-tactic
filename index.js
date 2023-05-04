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
registerRootComponent(planScreen);
