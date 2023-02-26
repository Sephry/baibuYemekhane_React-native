import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function EmptyCard({date}) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewDate}>
        <Text style={styles.date}>{date}</Text>
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
});

export default EmptyCard;
