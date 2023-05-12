import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import database from '@react-native-firebase/database';
import FlatListBasics from './components/FlatListBasic';
import Header from './components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {FoodWidgetPreview} from './widgets/FoodWidgetPreview';

function App() {
  const [data, setData] = useState('');
  const [widgetData, setWidgetData] = useState('');

  useEffect(() => {
    database()
      .ref('food')
      .once('value')
      .then(snapshot => {
        setData(Object.values(snapshot.val()));
        setWidgetData(Object.values(snapshot.val()))
      });
  }, []);
  console.log(widgetData)

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {/* <FoodWidgetPreview widgetData={widgetData} /> */}
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
    backgroundColor: '#fff',
  },
});

export default App;
