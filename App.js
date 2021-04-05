import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import {Onmoretime, SkyVilla, Splash, Welcome, Login } from './src/screens';
import Tabs from './src/navigation/Tabs';
import { TouchableOpacity, Image } from 'react-native';
import {icons, COLORS, SIZES} from './constants';
import Draw from './src/navigation/Draw';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Splash'
        screenOptions={{
          title: false,
          headerStyle: {
            backgroundColor: COLORS.white,
            elevation: 0,
          }
        }}
      >
        <Stack.Screen  name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen  name='Login'  component={Login} options={{ headerShown: false }}/>
        <Stack.Screen  name='Welcome'  component={Draw} options={{ headerShown: false }}/>
        <Stack.Screen  name='Home'  component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name='Sky Villa' component={SkyVilla} options={{ headerShown: false}}/>
        <Stack.Screen name='One More Time' component={Onmoretime} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;