import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Product from '../screens/Products';

import MainTab from './MainTab';
const Initial = createStackNavigator();
export default () => (
  <Initial.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Initial.Screen name="Preload" component={Preload} />
    <Initial.Screen name="SignIn" component={SignIn} />
    <Initial.Screen name="SignUp" component={SignUp} />
    <Initial.Screen name="MainTab" component={MainTab} />
    <Initial.Screen name="Product" component={Product} />
  </Initial.Navigator>
);
