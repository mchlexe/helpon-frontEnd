import React from 'react';
import {
    Container,
    Logo,
    SubContainer,
    ContainerBtns
} from './style';

import logo from '../../assets/logo/logo.png';
import { Button } from '../../components/Button';


export const Start = () => {

    return (

       <Container>
           <SubContainer>
                <Logo source={logo}/>
                <ContainerBtns>
                    <Button 
                        text="Login"
                        textColor="darkred"
                        backgroundColor="#F9CECE"
                    />
                    <Button 
                        text="Cadastro"
                        textColor="darkorange"
                        backgroundColor="#FAE0B2"
                    />
                </ContainerBtns>
           </SubContainer>
       </Container>

    )

}