import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';
import {FoodWidget} from './FoodWidget';

export function FoodWidgetPreview({widgetData}) {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <FoodWidget widgetData={widgetData} />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
