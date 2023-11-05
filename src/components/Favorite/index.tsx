import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { resetFavorite } from '../../redux/favoriteSlice';

export default function Favorite() {
  const { male, female, other } = useSelector(
    (state: RootState) => state.favorite,
  );
  const dispatch = useDispatch();

  console.log({ male, female, other });

  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Male: {male.length}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Female: {female.length}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Other: {other.length}</Text>
      </View>
      <TouchableOpacity
        style={[styles.item, styles.reset]}
        onPress={() => dispatch(resetFavorite())}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    gap: 5,
  },
  item: {
    width: '49%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
  },
  itemText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
  },
  reset: {
    borderColor: 'red',
    borderWidth: 3,
  },
  resetText: {
    color: 'red',
    fontWeight: '700',
    fontSize: 18,
  },
});
