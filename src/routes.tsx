import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from './pages/Login/index';
import { Start } from './pages/Start';
import { CadastroOne } from "./pages/CadastroOne";
import { CadastroTwo } from './pages/CadastroTwo';
import { CupomAberto } from './pages/CupomAberto';
import { Cupons } from './pages/Cupons';
import { EditarPerfil } from './pages/EditarPerfil';
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';

const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
    return (

        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}}>
                <Screen name="Start" component={Start}/>
                <Screen name="Login" component={Login} />
                <Screen name="CadastroOne" component={CadastroOne} />
                <Screen name="CadastroTwo" component={CadastroTwo}/>
                <Screen name="CupomAberto" component={CupomAberto}/>
                <Screen name="Cupons" component={Cupons}/>
                <Screen name="EditarPerfil" component={EditarPerfil}/>
                <Screen name="Home" component={Home}/>
                <Screen name="Perfil" component={Perfil}/>
            </Navigator>
        </NavigationContainer>

    );
}

export default Routes;