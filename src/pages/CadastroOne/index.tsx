import React, { useState } from 'react';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';
import userDefaultImage from '../../assets/userDefaultImage/userDefaultImage.png';

import { validaCNPJ, validaCpf,  validaEmail } from '../../utils/validation';

import {
    Container,
    SubContainer,
    Logo,
    CaixaSelect,
    Select,
    ContainerImages,
    FotoPerfil,
    ContainerFotoPerfil,
    Botao,
    Icone
} from './style';

import { Button } from '../../components/Button';
import api from '../../api/axios';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

interface ResponseData {
    message: string;
}

export const CadastroOne = () => {

    const [fotoPerfil, setFotoPerfil] = useState('');
    const [userName, setUserName] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userType, setUserType] = useState('Consumidor'); //O valor do select começa com "Consumidor

    const navigation = useNavigation();
    console.log(fotoPerfil)
    async function handleCadastrar() {

        function validaCampos(){
            let error = false;
            if(!validaEmail(email)){
                // setEmail("E-mail invalido")
                error = true
            }
            const tamanho = cpfCnpj.length;
            if(tamanho <= 11){
                if(!validaCpf(cpfCnpj)){
                    // setCpfCnpj("CPF inválido")
                    error = true
                }
                return !error;
            }
            if(tamanho <= 14 || tamanho >= 14){
                if(!validaCNPJ(cpfCnpj)){
                    // setCpfCnpj("CNPJ inválido")
                    error = true
                }
                return !error;
            }
        }

        if(userName.length == 0 || cpfCnpj.length == 0 || telefone.length == 0 || email.length == 0 || senha.length == 0){
            Alert.alert('Erro!', 'Preencha todo o formulário')
        }
        else{
            if(validaCampos()){
                
                const data = new FormData();

                data.append('nome', userName);
                data.append('cpfCnpj', cpfCnpj)
                data.append('telefone', telefone);
                data.append('email', email);
                data.append('senha', senha);
                data.append('tipo', userType);

                if (fotoPerfil !== '') {

                    data.append('profilePicture', {
                        name: 'fotoDePerfil.jpg',
                        type: 'image/jpeg',
                        uri: fotoPerfil
                    } as any)

                }

                const response = await api.post('/usuario/inserir', data);
                const { message } = response.data as unknown as ResponseData;

                    if (message === 'Usuário inserido com sucesso !') {
                    
                        if (['Comércio', 'Instituição'].includes(userType)) {

                            navigation.navigate('CadastroTwo', { cpfCnpj })
                
                        } else {
                
                            navigation.navigate('Login');
                
                        }

                    } else {
                        Alert.alert('Erro !', 'Desculpe mas houve uma falha ao tentar cadastrar o usuário !');
                    }
                }else{
                    Alert.alert('Erro!', 'Dados invalidos ou incompletos')
                }
            }

    }

    async function handleRecuperarImage() {

        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Erro ', 'Para fazer o upload você precisa permitir que a aplicação tenha acesso a galeria de fotos : )');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.cancelled) {
            Alert.alert('Upload Cancelado');
            return;
        }

        const { uri } = result;

        setFotoPerfil(uri);

    }

    return (

        <Container>
            <SubContainer>

                <ContainerImages>

                    <Logo source={logo} />

                    {
                        fotoPerfil === '' && (
                            <ContainerFotoPerfil>
                                <FotoPerfil source={userDefaultImage} />
                                <Botao onPress={handleRecuperarImage}>
                                    <Icone name="plus" />
                                </Botao>
                            </ContainerFotoPerfil>
                        )
                    }

                    {
                        fotoPerfil !== '' && (
                            <ContainerFotoPerfil>
                                <FotoPerfil source={{ uri: fotoPerfil }} />
                                <Botao onPress={handleRecuperarImage}>
                                    <Icone name="plus" />
                                </Botao>
                            </ContainerFotoPerfil>
                        )
                    }

                </ContainerImages>
                <Input
                    placeholder="Nome"
                    icon="user"
                    type="text"
                    value={userName}
                    onChangeText={setUserName}

                />
                <Input
                    placeholder="CPF ou CNPJ"
                    icon="key"
                    type="text"
                    value={cpfCnpj}
                    onChangeText={setCpfCnpj}

                />
                <Input
                    placeholder="Telefone"
                    icon="phone"
                    type="text"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Input
                    placeholder="E-mail"
                    icon="mail"
                    type="text"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    icon="lock"
                    type="password"
                    value={senha}
                    onChangeText={setSenha}
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
                    onPress={() => handleCadastrar()}
                />
            </SubContainer>
        </Container>

    );

}