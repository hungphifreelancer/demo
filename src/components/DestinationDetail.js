import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';

import Header from './Header';
import Icons from './Icons';
import TabInfor from './TabInfor';

const DestinationDetail = ({image1, image2, title, country, number, goBack}) => {
   return (
    <View style={styles.container}>
      <View style={{height: '35%'}}>
        <Image
          source={image1}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.8,
          }}
        />
        <Header goBack={goBack}/>
      </View>
      {/* Tab information */}
      <View
        style={[
          styles.boxShadow,
          {
            position: 'absolute',
            height: '23%',
            position: 'absolute',
            top: 150,
            left: '5%',
            backgroundColor: COLORS.white,
            borderRadius: 10,
            width: '90%',
          },
        ]}>
        <TabInfor
          imge={image2}
          title={title}
          country={country}
          number={number}
        />
      </View>
      {/* Icons */}
      <View
        style={{
          marginTop: 85,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Icons icon={icons.parking} title="Parking" color={COLORS.white} tintColor={COLORS.primary} />
        <Icons icon={icons.villa} title="Villa" color={COLORS.white} tintColor={COLORS.primary}/>
        <Icons icon={icons.wind} title="4 degre" color={COLORS.white} tintColor={COLORS.primary}/>
      </View>
      {/* Information */}
      <View style={{paddingHorizontal: SIZES.radius}}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body3,
            textTransform: 'uppercase',
            marginBottom: SIZES.base,
          }}>
          About
        </Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui numquam
          error inventore eaque velit illum, officia repellendus voluptas!
          Voluptate architecto facilis quam delectus dicta. Veritatis impedit
          excepturi animi voluptates expedita.
        </Text>
      </View>
      {/* Footer */}
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <View
          style={{
            backgroundColor: COLORS.secondary,
            borderRadius: 10,
            flexDirection: 'row',
            padding: 3,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: COLORS.black, ...FONTS.h2}}>$1000</Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: SIZES.base,
              paddingHorizontal: SIZES.padding,
              borderRadius: 10,
            }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3}}>BOOKING</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boxShadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default DestinationDetail;
