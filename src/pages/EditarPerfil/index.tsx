import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useMyContext } from '../../Context/AuthProvider';


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
import { User } from '../../pages/Perfil'
import { getDataStorage } from '../../utils/asyncStorage';
import { Alert, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import api from '../../api/axios';

interface ResponseData {
    message: string;
}

export const EditarPerfil = () => {

    const navigation = useNavigation();
    const { logout } = useMyContext();

    const [nome, setNome] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userType, setUserType] = useState('');
    const [fotoPerfil, SetFotoPerfil] = useState('');
    const [ramoDescricao, setRamoDescricao] = useState('');


    async function handleTypeData() {

        if (userType === 'Consumidor') {
            return {
                cpfCnpj,
                nome,
                telefone,
                email,
                senha,
            }
        } else if (userType === 'Comércio') {
            return {
                cpfCnpj,
                nome,
                telefone,
                email,
                senha,
                ramo: ramoDescricao
            }
        } else {
            return {
                cpfCnpj,
                nome,
                telefone,
                email,
                senha,
                descricao: ramoDescricao
            }
        }

    }

    async function handleAtualizarDados() {

        const dados = await handleTypeData();

        console.log({ dados })

        const response = await api.put('/usuario/atualizar', dados);
        const { message } = response.data as unknown as ResponseData;

        if (message === 'Usuario atualizado com sucesso!') {

            if (['Comércio', 'Instituição'].includes(userType)) {
                navigation.navigate('EditarPertilTwo', { cpfCnpj });
            } else {
                Alert.alert('Informação', 'Dados atualizados com sucesso !')
                navigation.navigate('EditarPerfil');
            }


        } else {
            Alert.alert('Erro !', 'Desculpe as ocorreu uma falha ao tentar atualizar os dados :(');
        }

    }

    async function handleDesativarConta() {

        const dados = {
            cpfCnpj,
            status: false
        }

        const response = await api.put('/usuario/atualizar', dados);
        const { message } = response.data as unknown as ResponseData;

        if (message === 'Usuario atualizado com sucesso!') {
            logout();
            navigation.navigate('Start');
        }


    }

    async function handleRecuperarUserLogado() {

        const userStorage = await getDataStorage('Auth.user');
        const token = await getDataStorage('Auth.token');

        if (userStorage !== null && token !== null) {

            const { cpfCnpj } = JSON.parse(userStorage) as User;
            console.log(cpfCnpj)
            const dados = {
                cpfCnpj
            }

            const response = await api.post('/usuario/listar',
                dados, { headers: { 'x-access-token': `${token}` } }
            );

            const [user] = response.data as unknown as Array<User>;

            setNome(user.nome);
            setCpfCnpj(user.cpfCnpj);
            setTelefone(user.telefone);
            setEmail(user.email);
            SetFotoPerfil(user.fotoPerfil)
            setUserType(user.tipo);

        } else {

            Alert.alert('Acesso Negado !', 'Você precisa estar logado para ter acesso a esta pagina !');
            navigation.navigate('Login');
        }

    }

    useEffect(() => {
        handleRecuperarUserLogado();
    }, [])

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
                                    icon="user"
                                    placeholder="Nome"
                                    type="text"
                                    value={nome}
                                    onChangeText={setNome}
                                />
                                <Input
                                    icon="key"
                                    placeholder="CPF ou CNPJ"
                                    type="text"
                                    value={cpfCnpj}
                                    editable={false}

                                />
                                {
                                    userType !== 'Consumidor' && (

                                        <Input
                                            icon="clipboard"
                                            placeholder={(userType === 'Comércio') ? 'Ramo' : 'Descrição'}
                                            type="text"
                                            value={ramoDescricao}
                                            onChangeText={setRamoDescricao}

                                        />

                                    )
                                }
                                <Input
                                    icon="phone"
                                    placeholder="Telefone"
                                    type="text"
                                    value={telefone}
                                    onChangeText={setTelefone}
                                />
                                <Input
                                    icon="mail"
                                    placeholder="E-mail"
                                    type="text"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                <Input
                                    icon="lock"
                                    placeholder="Senha"
                                    type="text"
                                    value={senha}
                                    onChangeText={setSenha}
                                />
                                <Acoes>
                                    <Button
                                        text="Desativar"
                                        backgroundColor="#BBBBBB"
                                        textColor="white"
                                        icone="trash"
                                        onPress={() => handleDesativarConta()}
                                    />

                                    <Button
                                        text="Confirmar"
                                        backgroundColor="#68BB6C"
                                        textColor="white"
                                        icone="check"
                                        onPress={() => handleAtualizarDados()}
                                    />
                                </Acoes></>
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