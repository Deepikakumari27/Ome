import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { OrderStatus } from './src/components/OrderStatus/OrderStatus';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import AppNavigation from "./AppNavigation";

const Stackroot = createNativeStackNavigator();
const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState(null);

  return (
    <AppNavigation initialRouteName={initialRouteName} />
  );
};
export default App;