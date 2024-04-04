/* eslint-disable @typescript-eslint/no-unused-vars */
import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CourseList, Profile} from './Shared/Components';
import TabSettings from './Shared/Components/Tab/TabSettings';
import {AboutStack} from './App';

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'blue',
        }}>
        <Tab.Screen name="Course List" component={CourseList} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'My Profile',
          }}
        />
        <Tab.Screen name="Settings" component={TabSettings} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
