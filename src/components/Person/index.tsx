import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StarWarsCharacter } from '../../types';

export default function Person({
  name,
  gender,
  height,
  mass,
}: StarWarsCharacter) {
  return (
    <View style={style.wrapper}>
      <View style={style.inner}>
        <Text>Name: {name}</Text>
        <Text>Gender: {gender}</Text>
      </View>

      <View style={style.inner}>
        <Text>Height: {height}</Text>
        <Text>Mass: {mass}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  inner: {
    width: '50%',
    padding: 15,
  },
});
