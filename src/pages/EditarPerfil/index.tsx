import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    MenuSuperior,
    Logo,
    PaginaInfo,
    InformacoesPerfil,
    FotoPerfil,
    MenuInferior,
    ContainerPage,
    Acoes
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { ScrollView } from 'react-native-gesture-handler';

export const EditarPerfil = () => {

    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PaginaInfo>Editar Perfil</PaginaInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>
                <FotoPerfil source={{ uri: 'https://avatars.githubusercontent.com/u/50963829?v=4' }} />
                    <Input
                        icon="user"
                        placeholder="Nome"
                        type="text"
                    />
                    <Input
                        icon="key"
                        placeholder="CPF ou CNPJ"
                        type="text"
                    />
                    <Input
                        icon="phone"
                        placeholder="Telefone"
                        type="text"
                    />
                    <Input
                        icon="mail"
                        placeholder="E-mail"
                        type="text"
                    />
                    <Input
                        icon="lock"
                        placeholder="Senha"
                        type="text"
                    />
                <Acoes>
                    <Button
                        text="Desativar"
                        backgroundColor="gray"
                        textColor="white"
                        icone="trash"
                    />

                    <Button
                        text="Confirmar"
                        backgroundColor="green"
                        textColor="white"
                        icone="check"
                    />
                </Acoes>
            </InformacoesPerfil>

            <MenuInferior>
                <BarraNavegacao />
            </MenuInferior>
        </Container>

    );

}