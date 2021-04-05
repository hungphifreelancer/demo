import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, FONTS, images, SIZES, icons } from '../../constants'
import Header from '../components/Header'
import Icons from '../components/Icons';

const data = [
    {
        id: 0,
        title: 'Sky Villa',
        img: images.climbingHills
    },
    {
        id: 1,
        title: 'One More Time',
        img: images.frozenHills
    },
    {
        id: 2,
        title: 'Alert',
        img: images.onboardingImage
    },
    {
        id: 3,
        title: 'Forecast',
        img: images.skiVilla
    },
    {
        id: 4,
        title: 'Vinsmoke',
        img: images.skiVillaBanner
    },
]


const Home = ({navigation}) => {

    const renderList = ({item}) => {
        return (
            <View style={{ height: '80%', paddingHorizontal: SIZES.base, alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.title)}
                >
                    <Image
                        source={item.img}
                        resizeMode='cover'
                        style={{
                            height: '100%',
                            width: 100,
                            borderRadius: 10,
                        }}
                    />
                </TouchableOpacity>
                <Text style={{ color: COLORS.black, ...FONTS.body4}}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.constainer}>
            {/* header */}
            <View style={{ height: '5%' }}>
                <Header goBack={() => { navigation.navigate('Welcome')}}/>
            </View>
            {/* Banner */}
            <View style={{ height: '35%', padding: SIZES.padding}}>
                <Image
                    source={images.homeBanner}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>
            {/* List Icon */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
               <Icons icon={icons.airplane} color={COLORS.primary} title={'Flight'} tintColor={COLORS.white}/>
               <Icons icon={icons.train} color='orange' title={'Train'} tintColor={COLORS.white}/>
               <Icons icon={icons.taxi} color='pink' title={'Taxi'} tintColor={COLORS.white}/>
               <Icons icon={icons.eat} color='green' title={'Eat'} tintColor={COLORS.white}/>
               <Icons icon={icons.event} color='violet' title={'Event'} tintColor={COLORS.white}/>
               <Icons icon={icons.bus} color='brown' title={'Bus'} tintColor={COLORS.white}/>
               <Icons icon={icons.user} color='purple' title={'User'} tintColor={COLORS.white}/>
               <Icons icon={icons.bed} color='navy' title={'Bed'} tintColor={COLORS.white}/>
               
            </View>
            {/* FlatList */}
            <View style={{flex: 1, paddingHorizontal: SIZES.padding, marginTop: SIZES.base}}>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={renderList}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    }
})
export default Home
