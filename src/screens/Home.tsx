import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { decremented, incremented } from '../redux/counterSlice';
import { getData } from '../redux/dataSlice';

export default function HomeScreen() {
  const counter = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  console.log(counter);

  useEffect(() => {
    getData(1);
  }, [counter]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <View>
        <Button
          title="+"
          onPress={() => {
            console.log('+');
            dispatch(incremented());
          }}
        />

        <Text>{counter}</Text>

        <Button
          title="-"
          onPress={() => {
            console.log('-');
            dispatch(decremented());
          }}
        />
      </View>
    </View>
  );
}
