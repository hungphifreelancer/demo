import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';

const TabInfor = ({imge, title, country, number}) => {
    var myLoop = [];

    if (number >= 5) {
      for (let i = 0; i <= number; i++) {
        myLoop.push(
          <View key={i}>
            <Image
              source={icons.starFull}
              resizeMode="cover"
              style={{
                width: 10,
                height: 10,
                marginRight: SIZES.base / 2,
              }}
            />
          </View>,
        );
      }
    } else {
      for (let i = 0; i < number; i++) {
        myLoop.push(
          <View key={i}>
            <Image
              source={icons.starFull}
              resizeMode="cover"
              style={{
                width: 10,
                height: 10,
                marginRight: SIZES.base / 2,
              }}
            />
          </View>,
        );
      }

      for (let j = 0; j < 5 - number; j++) {
        myLoop.push(
          <View key={5 - j}>
            <Image
              source={icons.starEmpty}
              resizeMode="cover"
              style={{
                width: 10,
                height: 10,
                marginRight: SIZES.base / 2,
              }}
            />
          </View>,
        );
      }
    }

    return (
      <View style={{padding: SIZES.font}}>
        <View style={{flexDirection: 'row', marginBottom: SIZES.base}}>
          <Image
            source={imge}
            resizeMode="cover"
            style={{
              width: 70,
              height: 70,
              borderRadius: 10,
            }}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h2,
                textTransform: 'uppercase',
              }}>
              {title}
            </Text>
            <Text style={{color: COLORS.black, ...FONTS.body3}}>{country}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {myLoop}
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.body4,
                  marginLeft: SIZES.base,
                }}>
                {number}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          Lorem ipsum dolor sit amet consectetur adipis elit. Animi laborum
          deserunt.
        </Text>
      </View>
    );
  };

  export default TabInfor;