import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, images, SIZES} from '../../constants';
import Header from '../components/Header';

const Welcome = ({navigation}) => {
  return (

    <View style={styles.container}>
      <View style={{height: '50%'}}>
        <Image
          source={images.onboardingImage}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        <Header goBack={() => navigation.navigate('Login')} goMenu={() => navigation.openDrawer()}/>
      </View>
      <View
        style={{height: '30%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>
          Digital Tickets
        </Text>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
            paddingHorizontal: SIZES.radius,
            marginTop: SIZES.radius,
            textAlign: 'center',
          }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo beatae,
          temporibus in libero quae natus suscipit magnam nam? Quia maiores,
          rerum a harum est excepturi dolore architecto iste veritatis pariatur.
        </Text>
      </View>
      <View style={{height: '30%', marginTop: SIZES.padding, alignItems: 'center'}}>
      
         <TouchableOpacity
            style={{
                height: '27%',
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 10

            }}
            onPress={() => navigation.navigate('Home')}
        >
          <Text style={{color: COLORS.white, ...FONTS.body2}}>Start</Text>
        </TouchableOpacity> 
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Welcome;
