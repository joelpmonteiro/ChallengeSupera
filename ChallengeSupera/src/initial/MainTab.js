import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTab from '../components/CustomTabBar';
import Home from '../screens/Home';
import Carrinho from '../screens/Appointments';
//import CartProvider from '../context-Api/card';
const Tab = createBottomTabNavigator();

export default () => (
  //<CartProvider>
  <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Carrinho" component={Carrinho} />
  </Tab.Navigator>
  //</CartProvider>
);
