import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useLayoutEffect} from 'react';

export default function About({route, navigation}: any) {
  const {name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View>
      <Text>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: 'Codevolution',
          })
        }
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate('Home', {
            result: 'Data from about',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
