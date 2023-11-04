import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getDataFromSWAPI } from '../requests/getData';
import {
  getData,
  startFetchingData,
  stopFetchingData,
} from '../redux/dataSlice';
import Person from '../components/Person';
import Pagination from '../components/Pagination';

export default function HomeScreen() {
  const { page, data, loading } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  async function fetchData() {
    dispatch(startFetchingData());

    try {
      const result = await getDataFromSWAPI(page);
      dispatch(getData(result));
    } catch (error) {
      console.error('ERROR', error);
    } finally {
      dispatch(stopFetchingData());
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const renderItems = () => {
    return data?.results.map(person => {
      return <Person key={person.url} {...person} />;
    });
  };

  return (
    <View>
      {loading && (
        <View style={style.loaderWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {!loading && data?.results ? (
        <ScrollView style={style.scroll}>{renderItems()}</ScrollView>
      ) : null}

      <Pagination />
    </View>
  );
}

const style = StyleSheet.create({
  scroll: {
    height: '85%',
  },
  loaderWrapper: {
    height: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
