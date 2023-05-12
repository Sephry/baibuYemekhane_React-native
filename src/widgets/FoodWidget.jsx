import React from 'react';
import {FlexWidget, TextWidget} from 'react-native-android-widget';

export function FoodWidget({widgetData}) {

    
  return (
    <FlexWidget
      style={{
        flex: 1,
        borderColor: '#1C366B',
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 20,
        borderWidth: 2,
        margin: 5,
      }}>
      <FlexWidget
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextWidget
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#FF1E1E',
          }}
          text={widgetData.date}
        />
      </FlexWidget>

      <FlexWidget
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
        }}>
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="corba"
        />
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="kalori"
        />
      </FlexWidget>

      <FlexWidget
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
        }}>
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="anayemek"
        />
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="kalori"
        />
      </FlexWidget>

      <FlexWidget
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
        }}>
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="yanyemek"
        />
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="kalori"
        />
      </FlexWidget>

      <FlexWidget
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 4,
        }}>
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="tatli"
        />
        <TextWidget
          style={{
            fontSize: 15,
            color: '#1C366B',
          }}
          text="kalori"
        />
      </FlexWidget>
    </FlexWidget>
  );
}
