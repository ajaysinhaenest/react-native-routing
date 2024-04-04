/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import AppDrawer from './src/AppDrawer';
import AppTab from './src/AppTab';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppTab);
