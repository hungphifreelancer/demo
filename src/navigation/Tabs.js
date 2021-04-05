import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import { Home } from '../screens';
import { COLORS, icons } from '../../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{ showLabel: false}}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: (({focused}) => (
                    <Image
                        source={icons.home}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                )),
            }} />
            <Tab.Screen name='Search' component={Home} options={{
                tabBarIcon: (({focused}) => (
                    <Image
                        source={icons.search}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}/>
            <Tab.Screen name='Info' component={Home} options={{
                tabBarIcon: (({focused}) => (
                    <Image
                        source={icons.bookmark}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}/>
            <Tab.Screen name='User' component={Home} options={{
                tabBarIcon: (({focused}) => (
                    <Image
                        source={icons.user}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ))
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs;