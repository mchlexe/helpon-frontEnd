import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from '../pages/Login';
import { Start } from '../pages/Start';
import { CadastroOne } from "../pages/CadastroOne";
import { CadastroTwo } from "../pages/CadastroTwo";
import { CadastroCupom } from '../pages/CadastroCupom';

const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
    return (

        <NavigationContainer>
            <Navigator 
                screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}}
                initialRouteName="CadastroCupom"
            >
                <Screen name="Start" component={Start}/>
                <Screen name="Login" component={Login} />
                <Screen name="CadastroOne" component={CadastroOne} />
                <Screen name="CadastroTwo" component={CadastroTwo} />
                <Screen name="CadastroCupom" component={CadastroCupom} />
            </Navigator>
        </NavigationContainer>

    );
}

export default Routes;