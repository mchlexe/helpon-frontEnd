
import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { validaEmail } from '../../utils/validation';


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
        navigation.navigate('Home');
    }

    function validaCampos(){
        let error = false;
        if(!validaEmail(email)){
            // setEmail("E-mail invalido")
            error = true
        }
        return !error;
    }

    async function handleLogin () {

            if (email.length == 0 || password.length == 0){
                Alert.alert('Erro!','Preencha todos os campos')
            }else{
                if(validaCampos()){
                    const logado = await logar(email, password);

                    if (logado) {

                        redirectToHomePage();

                    } else {

                        Alert.alert('Credenciais Invalidas !', 'Desculpe, mas não existe nenhum usuário com estas credenciais.');
                    
                    }
            }else{
                Alert.alert('Error','Informe um E-mail valido');
            }
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