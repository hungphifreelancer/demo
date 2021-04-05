 import React from 'react';
 import {View, Text, Image, TouchableOpacity} from 'react-native'

 import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
 
 const Icons = ({icon, title, color, tintColor}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.radius,
          marginBottom: SIZES.radius,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: color,
          }}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
              tintColor: tintColor
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body4,
            marginTop: SIZES.base / 2,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  export default Icons;