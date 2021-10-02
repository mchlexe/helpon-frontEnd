
import React from 'react';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { 
    Container,
    Logo,
    SubContainer
} from './style';

export const Login = () => {

    return (

        <Container>
           <SubContainer>
               <Logo source={logo} />
               <Input 
                    icon="mail" 
                    type="email"
                    placeholder="E-mail"
               />
               <Input 
                    icon="lock" 
                    type="password"
                    placeholder="Senha"
               />
               <Button 
                     text="Login"
                     textColor="white"
                     backgroundColor="#FF8955"
               />
           </SubContainer>
        </Container>
       
    )

}