
import React, { useEffect, useState } from 'react';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import logo from '../../assets/logo/logo.png';
import { getDataStorage } from '../../utils/asyncStorage';



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
    ContainerInformacao,
    Mapa,
    ContainerMapa,
    InfoMarcador,
    TextoMarcador
} from './style';

import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../api/axios';
import { Alert, View } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AppLoading from 'expo-app-loading';

interface UserProps {
    cpfCnpj: string;
}

export interface User {
    cpfCnpj: string;
    fotoPerfil: string; 
    nome: string;
    telefone: string
    email: string;
    senha: string; 
    saldo: number; 
    status: boolean; 
    tipo: string; 
    uf?: string;
    cidade?: string;
    bairro?: string; 
    rua?: string;
    numero?: string; 
    complemento?: string; 
    descricao?: string;
    ramo?: string; 
    cupons?: string;
    doacoes?: string; 
    latitude: number;
    longitude: number; 
  }

export const Perfil = () => {

    const [user, setUser] = useState<User | null>(null);

    const navigation = useNavigation();
    const router = useRoute();
    const { cpfCnpj } = router.params as UserProps;

    async function handleGetUser() {

        const token = await getDataStorage('Auth.token');

        if (token === null) {
            Alert.alert('Token invalido !', 'Você precisa se logar para acessar esta página !');
            return;
        }

        const dados = {
            cpfCnpj
        }

        const response = await api.post('/usuario/listar',
            dados, { headers: { 'x-access-token': `${token}` } }
        );

        const data = response.data as unknown as Array<User>;
        setUser(data[0]);

    }


    useEffect(() => {
        handleGetUser();
    }, []);

    return (

        <Container>

            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PageInfo>Perfil</PageInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>

                {
                    user !== null && (

                        <>
                            <ContainerInfo>
                                <FotoPerfil source={{ uri: user.fotoPerfil }} />
                                <SubContainerInfo>
                                    <UserName>{user.nome}</UserName>

                                    {
                                        user.descricao !== '' && (

                                            <Descricao>{user.descricao}</Descricao>

                                        )
                                    }
                                    {
                                        user.ramo !== '' && (
                                            <Descricao>{user.ramo}</Descricao>
                                        )
                                    }

                                </SubContainerInfo>
                            </ContainerInfo>
                            <DadosPessoais>

                                <ContainerInformacao>
                                    <Titulo>Telefone</Titulo>
                                    <Informacao>{user.telefone}</Informacao>
                                </ContainerInformacao>

                                <ContainerInformacao>
                                    <Titulo>Email</Titulo>
                                    <Informacao>{user.email}</Informacao>
                                </ContainerInformacao>
                                <ContainerInformacao>
                                    <Titulo>Localização</Titulo>
                                    <Informacao>{user.rua}-{user.numero}, {user.cidade}, {user.uf}</Informacao>
                                    <ContainerMapa>
                                        <Mapa 
                                            provider={PROVIDER_GOOGLE}
                                            initialRegion={{
                                                latitude: user.latitude,
                                                longitude: user.longitude,
                                                latitudeDelta: 0.008,
                                                longitudeDelta: 0.008
                                                
                                            }}
                                        >
                                            <Marker 
                                                coordinate={{
                                                    latitude: user.latitude,
                                                    longitude: user.longitude
                                                }}
                                                calloutAnchor={
                                                    {x:3.4, y: 0.8}
                                                }
                                            >

                                                <InfoMarcador tooltip={true}>

                                                  <TextoMarcador>{user.nome}</TextoMarcador>

                                                </InfoMarcador>

                                            </Marker>
                                        </Mapa>
                                    </ContainerMapa>
                                </ContainerInformacao>
                            </DadosPessoais>
                        </>
                    )
                }

                {
                    user === null && (

                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <AppLoading />
                        </View>
                    )
                }


            </InformacoesPerfil>

            <BarraNavegacao />
        </Container>

    );

}