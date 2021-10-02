
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


interface userProps {
    cpfCnpj: string
}

interface ResponseData {
    message: string;
}

export const CadastroTwo = ({ cpfCnpj }:userProps) => {

    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [cadastroFinalizado, setCadastroFinalizado] = useState(false);
    
    const handleConfirmarCadastro = async () => {

        const localizacao = {
            cpfCnpj,
            rua, 
            numero,
            cidade,
            bairro,
            estado, 
            complemento
        }

        const response = await api.put('/usuario/atualizar', localizacao)
        const { message } = response.data as unknown as ResponseData;

        if (message === 'Usuario atualizado com sucesso!') {
        
            setCadastroFinalizado(true)
        
        } else {

            Alert.alert(
                'Erro',
                'Desculpe, ocorreu um erro ao tentar finalizar o cadastro',
                [
                    {
                        text: 'OK',
                        onPress: () => {}
                    }
                ]
            );

        }


    }

    if ( cadastroFinalizado ) {
        return <Login />
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