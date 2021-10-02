
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    SubContainer,
    Logo,
    CaixaSelect,
    Select
} from './style';

import { Button } from '../../components/Button';


export const CadastroOne = () => {

    const [userType, setUserType] = useState('Wendel');

    console.log(userType)

    return (

        <Container>
            <SubContainer>
                <Logo source={logo} />
                <Input
                    placeholder="Nome"
                    icon="user"
                    type="text"

                />
                <Input
                    placeholder="CPF ou CNPJ"
                    icon="key"
                    type="text"
                    
                />
                <Input
                    placeholder="Telefone"
                    icon="phone"
                    type="text"
                />
                <Input
                    placeholder="E-mail"
                    icon="mail"
                    type="text"
                />
                <Input
                    placeholder="Senha"
                    icon="lock"
                    type="password"
                />

                <CaixaSelect>
                    <Select
                         selectedValue={userType}
                         onValueChange={(itemValue, itemIndex) => setUserType(String(itemValue))}
                    >
                        <Select.Item label="Consumidor" value="Consumidor" />
                        <Select.Item label="Instituição" value="Instituição" />
                        <Select.Item label="Comércio" value="Comércio" />
                    </Select>
                </CaixaSelect>

                <Button
                    backgroundColor="#FF8955"
                    textColor="white"
                    text="Continuar"
                    icone="chevron-right"
                />
            </SubContainer>
        </Container>

    );

}