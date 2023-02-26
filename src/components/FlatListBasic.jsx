import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FoodCard from './FoodCard';
import EmptyCard from './EmptyCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) =>
        item.anayemek ? (
          <FoodCard
            date={item.date}
            anayemek={item.anayemek}
            anayemekKalori={item.anayemekKalori}
            corba={item.corba}
            corbaKalori={item.corbaKalori}
            tatli={item.tatli}
            tatliKalori={item.tatliKalori}
            yanyemek={item.yanyemek}
            yanyemekKalori={item.yanyemekKalori}
          />
        ) : (
          <EmptyCard date={item.date} />
        )
      }
      keyExtractor={item => item.date}
    />
  );
};

export default FlatListBasics;
