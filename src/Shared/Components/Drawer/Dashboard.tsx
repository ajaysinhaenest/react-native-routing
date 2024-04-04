import {Text, View, Button} from 'react-native';
import React from 'react';

export default function Dashboard({navigation}: any) {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo('Settings')} />
    </View>
  );
}
