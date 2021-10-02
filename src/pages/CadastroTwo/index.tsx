
import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    SubContainer,
    Logo
} from './style';


export const CadastroTwo = () => {

    return (
        <Container>
            <SubContainer>
                <Logo source={logo} />
                <Input 
                    placeholder="Rua"
                    type="text"
                    icon="map-pin"
                />
                <Input 
                    placeholder="Número"
                    type="text"
                    icon="map-pin"
                />
                <Input 
                    placeholder="Cidade"
                    type="text"
                    icon="map-pin"
                />
                <Input 
                    placeholder="Bairro"
                    type="text"
                    icon="map-pin"
                />
                <Input 
                    placeholder="Estado"
                    type="text"
                    icon="map-pin"
                />
                <Input 
                    placeholder="Complemento"
                    type="text"
                    icon="map-pin"
                />
                <Button
                    text="Concluir"
                    backgroundColor="#FF8955"
                    textColor="white"
                    icone="chevron-down"
                />
            </SubContainer>
        </Container>
    );

}