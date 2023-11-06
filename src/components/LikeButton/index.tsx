import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  FavoriteState,
  addItemToFavorite,
  deleteItemFromFavorite,
} from '../../redux/favoriteSlice';

type LikeButtonProps = {
  name: string;
  gender: keyof FavoriteState;
};

export default function LikeButton({ name, gender }: LikeButtonProps) {
  const favorites = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch();

  const isLiked = (gender: keyof FavoriteState, name: string) => {
    const targetArray = favorites[`${gender}`];

    return Boolean(targetArray?.find(it => it === name));
  };

  const handleAddToFavorite = () => {
    if (!isLiked(gender, name)) {
      dispatch(addItemToFavorite({ name, gender }));
    } else {
      dispatch(deleteItemFromFavorite({ name, gender }));
    }
  };

  return (
    <TouchableOpacity
      style={isLiked(gender, name) ? style.unlike : style.like}
      onPress={() => handleAddToFavorite()}>
      <View>
        <Text style={isLiked(gender, name) ? style.textUnlike : style.textLike}>
          {isLiked(gender, name) ? 'Unlike' : 'Like'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  like: {
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'white',
  },
  textLike: {
    fontSize: 16,
    color: 'red',
    fontWeight: '900',
  },
  unlike: {
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'red',
  },
  textUnlike: {
    fontSize: 16,
    color: 'white',
    fontWeight: '900',
  },
});
