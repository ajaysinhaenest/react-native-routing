/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {Pressable, Text} from 'react-native';
import {About, DynamicUI, Home, Networking} from './Shared/Components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#6a51ae'},
        headerTitleStyle: {fontWeight: 'bold'},
        headerTintColor: '#fff',
        contentStyle: {backgroundColor: '#e8e4f3'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome Home',
          headerStyle: {
            backgroundColor: '#6a51ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <Pressable onPress={() => alert('Menu button pressed!')}>
              <Text>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: '#e8e4f3',
          },
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        initialParams={{
          name: 'Guest',
        }}
        // options={({route}) => ({
        //   title: route.params.name,
        // })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      {/* <DynamicUI /> */}
      {/* <Networking /> */}
      <NavigationContainer>
        <AboutStack />
      </NavigationContainer>
    </>
  );
}
