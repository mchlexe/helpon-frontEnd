
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
import api from '../../api/axios';
import { CadastroTwo } from '../CadastroTwo';
import { Alert } from 'react-native';
import { Login } from '../Login';


interface ResponseData {
    message: string;
}

export const CadastroOne = () => {

    const [userName, setUserName] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userType, setUserType] = useState('Consumidor'); //O valor do select começa com "Consumidor"
    const [cadastrado, setCadastrado] = useState(false);

    const handleCadastrar = async () => {
        
        const novoUsuario = {
            nome: userName,
            cpfCnpj, //Sintaxe curta de objetos, mesma coisa que cpfCnpj: CpfCnpj : )
            telefone: telefone,
            email: email,
            senha: senha, 
            tipo: userType,
        }
            const response = await api.post('usuario/inserir', novoUsuario);
            const { message } = response.data as unknown as ResponseData;

            if (message === 'Usuário inserido com sucesso !') {
               
                setCadastrado(true);
            
            } else {

                Alert.alert(
                    'Erro !',
                    'Ocorreu um problema ao realizar o cadastro !',
                    [
                        {
                            text: 'OK',
                            onPress: () => {}
                        }
                    ]
                );
            }
    }

    if (cadastrado) {
     
        if (['Comércio', 'Instituição'].includes(userType)) {
            return <CadastroTwo cpfCnpj={cpfCnpj} />
        } else {
            return <Login />
        }
    }

    return (

        <Container>
            <SubContainer>
                <Logo source={logo} />
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