import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from './pages/Login/index';

const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
    return (

        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}}>
                <Screen name="Login" component={Login}/>
            </Navigator>
        </NavigationContainer>

    );
}

export default Routes;