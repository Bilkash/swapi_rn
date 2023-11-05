import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { RootStackParamList, StarWarsCharacter } from '../types';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { getDetailDataFromSWAPI } from '../requests/getDetailData';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: Props) {
  const { url } = route.params;
  const [person, setPerson] = useState<StarWarsCharacter | null>(null);

  async function fetchDetailData() {
    try {
      const result = await getDetailDataFromSWAPI(url);
      setPerson(result);
    } catch (error) {
      console.error('ERROR', error);
    }
  }

  useEffect(() => {
    fetchDetailData();
  }, [url]);

  console.log({ person });

  const renderPersonInfo = () => {
    if (person) {
      return Object.entries(person).map(item => {
        if (typeof item[1] === 'string') {
          return (
            <Text key={item[0]} style={styles.text}>
              <Text style={styles.title}>{item[0]}</Text>: {item[1]}
            </Text>
          );
        }
      });
    }
  };

  if (!person) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return <View style={styles.wrapper}>{renderPersonInfo()}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontWeight: '700',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
