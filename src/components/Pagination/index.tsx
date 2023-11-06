import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import getLastPageNumber from '../../utils/getLastPageNumber';
import { decrementPage, incrementPage } from '../../redux/dataSlice';

export default function Pagination() {
  const { page, data, loading } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const lastPage = data ? getLastPageNumber(data.count, 10) : null;

  return (
    <View style={style.wrapper}>
      <Button
        disabled={page === 1}
        title="Prev"
        onPress={() => dispatch(decrementPage())}
        color={'#FF0000'}
      />

      <View style={style.pageCount}>
        <Text style={style.text}>
          {page}
          {lastPage && `/${lastPage}`}
        </Text>
      </View>

      <Button
        title="Next"
        disabled={page === lastPage}
        onPress={() => dispatch(incrementPage())}
        color={'#FF0000'}
      />
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    paddingHorizontal: '32%',
    backgroundColor: '#767574',
  },
  pageCount: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
});
