/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import userdata from './src/userdata';

AppRegistry.registerComponent(appName, () => userdata);
