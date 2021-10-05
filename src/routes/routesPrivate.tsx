import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { CadastroCupom } from '../pages/CadastroCupom';
import { CupomAberto } from '../pages/CupomAberto';
import { Cupons } from '../pages/Cupons';
import { EditarPerfil } from '../pages/EditarPerfil';
import { Perfil } from '../pages/Perfil';
import { Home } from '../pages/Home';
import { EditarPerfilTwo } from '../pages/EditarPerdilTwo';


const {Navigator, Screen} = createStackNavigator();

const RoutesPrivate: React.FC = () => {
  return (

            <Navigator 
              screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}} 
            >
               <Screen name="Home" component={Home}/>
               <Screen name="CadastroCupom" component={CadastroCupom}/>
               <Screen name="CupomAberto" component={CupomAberto}/>
               <Screen name="Cupons" component={Cupons}/>
               <Screen name="EditarPerfil" component={EditarPerfil}/>
               <Screen name="EditarPertilTwo" component={EditarPerfilTwo}/>
            </Navigator>

  );
}

export default RoutesPrivate;