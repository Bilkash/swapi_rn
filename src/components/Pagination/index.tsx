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
      />

      <View style={style.pageCount}>
        <Text>
          {page}
          {lastPage && `/${lastPage}`}
        </Text>
      </View>

      <Button
        title="Next"
        disabled={page === lastPage}
        onPress={() => dispatch(incrementPage())}
      />
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: -50,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: '32%',
  },
  pageCount: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
