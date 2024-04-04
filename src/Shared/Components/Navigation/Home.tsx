import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home({navigation, route}: any) {
  return (
    <View>
      <Text>Home {route.params?.result} </Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {
            name: 'Vishwas',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
