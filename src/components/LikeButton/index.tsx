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
    <TouchableOpacity onPress={() => handleAddToFavorite()}>
      <View>
        <Text style={style.text}>
          {isLiked(gender, name) ? 'Unlike' : 'Like'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});
