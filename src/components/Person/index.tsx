import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StarWarsCharacter } from '../../types';
import LikeButton from '../LikeButton';
import { useNavigation } from '@react-navigation/native';
import { FavoriteState } from '../../redux/favoriteSlice';

export default function Person({ name, gender, url }: StarWarsCharacter) {
  const navigation = useNavigation();

  function genderCategory(category: string): keyof FavoriteState {
    if (category === 'male') {
      return 'male';
    } else if (category === 'female') {
      return 'female';
    } else {
      return 'other';
    }
  }

  return (
    <View style={style.wrapper}>
      <TouchableOpacity
        style={style.link}
        onPress={() => navigation.navigate('Detail', { url })}>
        <View style={style.inner}>
          <Text style={style.text}>Name: {name}</Text>
          <Text style={style.text}>Gender: {gender}</Text>
        </View>
      </TouchableOpacity>

      <LikeButton name={name} gender={genderCategory(gender)} />
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    paddingRight: 25,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#c2c0bf',
  },
  link: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
