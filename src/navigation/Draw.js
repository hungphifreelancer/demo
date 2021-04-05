import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from './Tabs';
import { Login, Welcome } from '../screens';

const Drawer = createDrawerNavigator();

const Draw = () => {
    return (
            <Drawer.Navigator >
                <Drawer.Screen name="Welcome" component={Welcome} />
                <Drawer.Screen name="Home" component={Tabs} />
                <Drawer.Screen name="Login" component={Login} />
            </Drawer.Navigator>
    )
}

export default Draw;
