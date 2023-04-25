import { registerRootComponent } from 'expo';

import App from './App';
import createAccount from './createAccount';
import MenuAbajo from './menuAbajo';
import MenuSuperior from './menuSuperior';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


//registerRootComponent(App);
//registerRootComponent(createAccount);
registerRootComponent(MenuAbajo);
//registerRootComponent(MenuSuperior);

