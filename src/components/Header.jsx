import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        Abant İzzet Baysal Üniversitesi
      </Text>
      <Text style={styles.text2}>
        Yemekhane Programı
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: '#1C366B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 5,
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
  },
  text2: {
    margin: 5,
    color: '#fff',
    fontWeight: '400',
    fontSize: 15,
  },
});

export default Header;
