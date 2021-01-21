/**
 * @format
 */
import 'react-native-gesture-handler' // Se importa aca para que cuando la App cargue ya haya cargado la libreria de gestos
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
