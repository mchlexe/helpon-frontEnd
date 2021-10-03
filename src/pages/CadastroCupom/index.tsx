import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';
import api from '../../api/axios';
import { Alert } from 'react-native';

import {
    Container,
    MenuSuperior,
    Logo,
    PaginaInfo,
    InformacoesPerfil,
    FotoPerfil,
    ContainerPage,
    Acoes
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { ScrollView } from 'react-native-gesture-handler';
import { Icone } from '../../components/Cupom/style';

export const CadastroCupom = () => {

    const [descricao, setdescricao] = useState('');
    const [validade, setvalidade] = useState('');
    const [valor, setvalor] = useState('');
    const [doacao, setdoacao] = useState('');

    async function handleCadastrar() {

        if (descricao.length == 0 || validade.length == 0 || valor.length == 0 || doacao.length == 0){
            Alert.alert('Erro!', 'Preencha todo o formulário')
        }
        else{
            Alert.alert('Sucesso!', 'Cupom cadastrado com sucesso')
        }

    }

    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PaginaInfo>Novo cupom</PaginaInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>
                <Icone name={'ticket-alt'} size={100} color={'#FF8955'} />
                <Input
                        icon="align-left"
                        placeholder="Descrição"
                        type="text"
                        value={descricao}
                        onChangeText={setdescricao}
                    />
                    <Input
                        icon="calendar"
                        placeholder="Validade"
                        type="text"
                        value={validade}
                        onChangeText={setvalidade}
                        // Colocar tipo data
                    />
                    <Input
                        icon="dollar-sign"
                        placeholder="Valor do cupom"
                        type="text"
                        value={valor}
                        onChangeText={setvalor}
                    />
                    <Input
                        icon="gift"
                        placeholder="Valor da doação"
                        type="text"
                        value={doacao}
                        onChangeText={setdoacao}
                    />
                    <Input
                        icon="power"
                        placeholder="Status"
                        type="text"
                        //Colocar opçòes true or false
                    />
                <Acoes>
                    <Button
                        text="Confirmar"
                        backgroundColor="#68BB6C"
                        textColor="white"
                        icone="check"
                        onPress={() => handleCadastrar()}
                    />
                </Acoes>
            </InformacoesPerfil>

            {/* <MenuInferior> */}
                <BarraNavegacao />
            {/* </MenuInferior> */}
        </Container>

    );

}