import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from './pages/Login/index';
import { Start } from './pages/Start';
import { CadastroOne } from "./pages/CadastroOne";

const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
    return (

        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}}>
                <Screen name="Start" component={Start}/>
                <Screen name="Login" component={Login} />
                <Screen name="CadastroOne" component={CadastroOne} />
            </Navigator>
        </NavigationContainer>

    );
}

export default Routes;