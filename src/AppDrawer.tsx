/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import React from 'react';
import {Dashboard, Settings} from './Shared/Components';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'My dashboard',
            drawerLabel: 'Dashboard label',
            drawerActiveTintColor: '#333',
            drawerActiveBackgroundColor: 'lightblue',
            drawerContentStyle: {
              backgroundColor: '#c6cbef',
            },
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
