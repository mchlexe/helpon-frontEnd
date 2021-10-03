import React from 'react';
import {
    Container,
    Logo,
    SubContainer,
    ContainerBtns
} from './style';

import logo from '../../assets/logo/logo.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



export const Start = () => {

    const navigation = useNavigation();
    
    function handleRedirectToLogin() {
       navigation.navigate('Login');
    }

    function handleRedirectToCadastro(){
        navigation.navigate('CadastroOne');
    }


    return (

       <Container>
           <SubContainer>
                <Logo source={logo}/>
                <ContainerBtns>
                    <Button 
                        text="Login"
                        textColor="darkred"
                        backgroundColor="#F9CECE"
                        onPress={handleRedirectToLogin}
                    />
                    <Button 
                        text="Cadastro"
                        textColor="darkorange"
                        backgroundColor="#FAE0B2"
                        onPress={handleRedirectToCadastro}
                    />
                </ContainerBtns>
           </SubContainer>
       </Container>

    )

}