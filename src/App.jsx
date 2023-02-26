import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import database from '@react-native-firebase/database';
import FlatListBasics from './components/FlatListBasic';
import Header from './components/Header';
import { FoodWidgetPreviewScreen } from './widget/FoodWidgetPreviewScreen';

function App() {
  const [data, setData] = useState('');

  async function readData() {
    await database()
      .ref('food')
      .once('value')
      .then(snapshot => {
        setData(Object.values(snapshot.val()));
      });
  }
  readData();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <FoodWidgetPreviewScreen /> */}
        <Header />
        <FlatListBasics data={data} />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
