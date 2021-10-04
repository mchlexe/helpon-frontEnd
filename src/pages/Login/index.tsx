
import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { 
    Container,
    Logo,
    SubContainer
} from './style';
import { useNavigation } from '@react-navigation/core';
import { useMyContext } from '../../Context/AuthProvider';
import { Alert } from 'react-native';

export const Login = () => {

    const navigation = useNavigation();
    const {logar} = useMyContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function redirectToHomePage () {
        navigation.navigate('Perfil');
    }

    async function handleLogin () {
        const logado = await logar(email, password);

        if (logado) {

            redirectToHomePage();

        } else {

            Alert.alert('Credenciais Invalidas !', 'Desculpe, mas não existe nenhum usuário com estas credenciais.');
        
        }


    }

    return (

        <Container>
           <SubContainer>
               <Logo source={logo} />
               <Input 
                    icon="mail" 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
               />
               <Input 
                    icon="lock" 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
               />
               <Button 
                     text="Login"
                     textColor="white"
                     backgroundColor="#FF8955"
                     onPress={() => handleLogin()}
               />
           </SubContainer>
        </Container>
       
    )

}