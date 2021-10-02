
import React from 'react';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    MenuSuperior,
    Logo,
    ContainerPage,
    PageInfo,
    InformacoesPerfil,
    FotoPerfil,
    ContainerInfo,
    SubContainerInfo,
    UserName,
    Descricao,
    // MenuInferior,
    DadosPessoais,
    Titulo,
    Informacao,
    ContainerInformacao
} from './style';

import { Button } from '../../components/Button';

export const Perfil = () => {

    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PageInfo>Perfil</PageInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>
                <ContainerInfo>
                    <FotoPerfil source={{ uri: 'https://avatars.githubusercontent.com/u/50963829?v=4' }} />
                    <SubContainerInfo>
                        <UserName>Wendel Alves</UserName>
                        <Descricao>Desenvolver FullStack em preparação.</Descricao>
                    </SubContainerInfo>
                </ContainerInfo>
                <DadosPessoais>

                    <ContainerInformacao>
                        <Titulo>Telefone</Titulo>
                        <Informacao>(83)99122-3344</Informacao>
                    </ContainerInformacao>

                    <ContainerInformacao>
                        <Titulo>Email</Titulo>
                        <Informacao>wendel.alves@academico.ifpb.edu.br</Informacao>
                    </ContainerInformacao>

                    <Button
                        text="Localização"
                        textColor="white"
                        backgroundColor="teal"
                        icone="map"

                    />

                </DadosPessoais>
            </InformacoesPerfil>
            {/* <MenuInferior> Removi para ficar um único componente sendo reutilizado  */}
                <BarraNavegacao />
            {/* </MenuInferior> */}

        </Container>

    );

}