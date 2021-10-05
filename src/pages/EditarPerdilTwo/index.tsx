import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';


import {
    Container,
    MenuSuperior,
    Logo,
    PaginaInfo,
    InformacoesPerfil,
    FotoPerfil,
    ContainerPage,
    Acoes,
    Scroll
} from './style';

import { BarraNavegacao } from '../../components/BarraNavegacao';
import { Alert, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import api from '../../api/axios';
import { getDataStorage } from '../../utils/asyncStorage';



interface UserCnpj {
    cpfCnpj: string;
}

interface Response {
    bairro: string;
    cidade: string;
    complemento: string;
    numero: string;
    rua: string;
    uf: string;
    fotoPerfil: string;
}

interface Message {
    message: string;
}

export const EditarPerfilTwo = () => {

    const navigation = useNavigation();
    const router = useRoute();

    const { cpfCnpj } = router.params as UserCnpj;

    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState('');
    async function handleAtualizarLocalizacao () {
        
        const dados = {
            cpfCnpj, 
            rua, 
            numero,
            cidade,
            uf: estado,
            complemento, 
            bairro,
        }

        const response = await api.put('/usuario/coordenadas', dados);
        const { message } = response.data as unknown as Message;

        if ( message === 'Localização atribuida com sucesso !') {

            navigation.navigate('EditarPerfil');

        } else {

            Alert.alert('Erro !', 'Não foi possivél atribuir a localização !');

        }

    }

    async function handleRecuperarUser() {

        const token = await getDataStorage('Auth.token');

        if (token !== null) {

            const dados = {
                cpfCnpj
            }

            const response = await api.post('/usuario/listar',
                dados, { headers: { 'x-access-token': `${token}` } }
            );

            const [user] = response.data as unknown as Array<Response>;
            console.log(user);
            setRua(user.rua);
            setCidade(user.cidade);
            setNumero(user.numero);
            setEstado(user.uf)
            setComplemento(user.complemento);
            setBairro(user.bairro);
            setFotoPerfil(user.fotoPerfil)

        }
    }

    useEffect(() => {
        handleRecuperarUser();
    }, []);


    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PaginaInfo>Editar Perfil</PaginaInfo>
                </ContainerPage>
            </MenuSuperior>
            <Scroll>
                <InformacoesPerfil>
                    {
                        cpfCnpj !== '' && (
                            <>
                                {
                                    fotoPerfil !== '' && (
                                        <FotoPerfil source={{ uri: fotoPerfil }} />
                                    )
                                }
                                <Input
                                    icon="map-pin"
                                    placeholder="Rua"
                                    type="text"
                                    value={rua}
                                    onChangeText={setRua}

                                />
                                <Input
                                    icon="map-pin"
                                    placeholder="Número"
                                    type="text"
                                    value={numero}
                                    onChangeText={setNumero}

                                />
                                <Input
                                    icon="map-pin"
                                    placeholder="Cidade"
                                    type="text"
                                    value={cidade}
                                    onChangeText={setCidade}

                                />
                                <Input
                                    icon="map-pin"
                                    placeholder="Bairro"
                                    type="text"
                                    value={bairro}
                                    onChangeText={setBairro}

                                />
                                <Input
                                    icon="map-pin"
                                    placeholder="Estado"
                                    type="text"
                                    value={estado}
                                    onChangeText={setEstado}
                                />
                                <Input
                                    icon="map-pin"
                                    placeholder="Complemento"
                                    type="text"
                                    value={complemento}
                                    onChangeText={setComplemento}

                                />


                                <Button
                                    text="Confirmar"
                                    backgroundColor="#FF8955"
                                    textColor="white"
                                    icone="chevron-down"
                                    onPress={() => handleAtualizarLocalizacao()} 
                                />
                            </>
                        )
                    }
                    {
                        cpfCnpj === '' && (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <AppLoading />
                            </View>
                        )
                    }

                </InformacoesPerfil>
            </Scroll>
            <BarraNavegacao />
        </Container>

    );

}