import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FoodCard({
  date,
  corba,
  corbaKalori,
  anayemek,
  anayemekKalori,
  yanyemek,
  yanyemekKalori,
  tatli,
  tatliKalori,
}) {
  return (
    <View style={styles.viewMain}>

      <View style={styles.viewDate}>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.viewYemek}>
        <Text style={styles.yemek}>{corba}</Text>
        <Text style={styles.yemekKalori}>{corbaKalori}</Text>
      </View>

      <View style={styles.viewYemek}>
        <Text style={styles.yemek}>{anayemek}</Text>
        <Text style={styles.yemekKalori}>{anayemekKalori}</Text>
      </View>

      <View style={styles.viewYemek}>
        <Text style={styles.yemek}>{yanyemek}</Text>
        <Text style={styles.yemekKalori}>{yanyemekKalori}</Text>
      </View>

      <View style={styles.viewYemek}>
        <Text style={styles.yemek}>{tatli}</Text>
        <Text style={styles.yemekKalori}>{tatliKalori}</Text>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  viewMain: {
    borderColor: '#1C366B',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    margin: 5,
  },
  viewDate: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF1E1E',
  },
  viewYemek: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  yemek: {
    fontSize: 15,
    color: '#1C366B',
  },
  yemekKalori: {
    fontSize: 15,
    color: '#1C366B',
  },
});

export default FoodCard;
