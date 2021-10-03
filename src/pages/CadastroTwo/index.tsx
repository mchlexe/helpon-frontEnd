
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    SubContainer,
    Logo
} from './style';
import api from '../../api/axios';
import { Login } from '../Login';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


interface userProps {
    cpfCnpj: string
}

interface ResponseData {
    message: string;
}

export const CadastroTwo = () => {

    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ complemento, setComplemento ] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const user = route.params as userProps;
    
    
    const handleConfirmarCadastro = async () => {

        const localizacao = {
            cpfCnpj: user.cpfCnpj,
            rua, 
            numero,
            cidade,
            bairro,
            uf: estado, 
            complemento
        }

        const response = await api.put('/usuario/coordenadas', localizacao)
        const { message } = response.data as unknown as ResponseData;

        if (message === 'Localização atribuida com sucesso !') {
        
            navigation.navigate('Login');
        
        } else {

            Alert.alert('Erro','Desculpe, ocorreu um erro ao tentar finalizar o cadastro');

        }
    }

    return (
        <Container>
            <SubContainer>
                <Logo source={logo} />
                <Input 
                    placeholder="Rua"
                    type="text"
                    icon="map-pin"
                    value={rua}
                    onChangeText={setRua}
                />
                <Input 
                    placeholder="Número"
                    type="text"
                    icon="map-pin"
                    value={numero}
                    onChangeText={setNumero}
                    
                />
                <Input 
                    placeholder="Cidade"
                    type="text"
                    icon="map-pin"
                    value={cidade}
                    onChangeText={setCidade}
                />
                <Input 
                    placeholder="Bairro"
                    type="text"
                    icon="map-pin"
                    value={bairro}
                    onChangeText={setBairro}
                />
                <Input 
                    placeholder="Estado"
                    type="text"
                    icon="map-pin"
                    value={estado}
                    onChangeText={setEstado}
                />
                <Input 
                    placeholder="Complemento"
                    type="text"
                    icon="map-pin"
                    value={complemento}
                    onChangeText={setComplemento}
                />
                <Button
                    text="Concluir"
                    backgroundColor="#FF8955"
                    textColor="white"
                    icone="chevron-down"
                    onPress={() => handleConfirmarCadastro()}
                />
            </SubContainer>
        </Container>
    );

}