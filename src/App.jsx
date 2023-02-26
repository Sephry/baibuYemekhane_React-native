import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import database from '@react-native-firebase/database';
import FlatListBasics from './components/FlatListBasic';
import Header from './components/Header';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    database()
      .ref('food')
      .once('value')
      .then(snapshot => {
        setData(Object.values(snapshot.val()));
      });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Header />
          <FlatListBasics data={data} />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
