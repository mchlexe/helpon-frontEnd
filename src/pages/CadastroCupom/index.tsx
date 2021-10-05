import React, { useEffect, useState } from 'react';
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
    ContainerPage,
    Acoes,
    CaixaSelect,
    Select
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { Icone } from '../../components/Cupom/style';
import { getDataStorage } from '../../utils/asyncStorage';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../Context/AuthProvider';

interface Response {
    message: string;
}

export const CadastroCupom = () => {

    const navigation = useNavigation();

    const [descricao, setdescricao] = useState('');
    const [validade, setvalidade] = useState('');
    const [valor, setvalor] = useState(0);
    const [doacao, setdoacao] = useState(0);
    const [instituicoes, setInstituicoes] = useState<Array<User>>([]);
    const [instituicaoSelected, setInstituicaoSelected] = useState('');

    console.log({ instituicaoSelected });

    async function handleCadastrar() {

        if (descricao.length == 0 || validade.length == 0 || valor == 0 || doacao == 0) {
            Alert.alert('Erro!', 'Preencha todo o formulário')
        }
        else {

            const userStorage = await getDataStorage('Auth.user');

            if (userStorage !== null) {

                const user = JSON.parse(userStorage) as User;

                const dados = {
                    autor: user.cpfCnpj,
                    instituicaoAlvo: instituicaoSelected,
                    data_validade: validade,
                    descricao,
                    valor_doado: doacao,
                    valor
                }

                const response = await api.post('/cupom/inserir', dados);
                const { message } = response.data as unknown as Response;

                if (message === 'Cupom inserido com sucesso !') {
                    Alert.alert('Sucesso!', 'Cupom cadastrado com sucesso');
                    navigation.navigate('Home');
                } else {
                    Alert.alert('Erro !', 'Falha ao cadastrar cupom: ' + message);
                }

            } else {
                Alert.alert('Erro', 'Você precisa estar logado para ter acesso a essa pagina');
                navigation.navigate('Login');
            }

        }
    }

    async function handleRecuperarInstituicoes() {

        const token = await getDataStorage('Auth.token');

        if (token !== null) {

            const dados = {
                tipo: 'Instituição'
            }

            const response = await api.post('/usuario/listar',
                dados, { headers: { 'x-access-token': `${token}` } }
            );

            const instituicoes = response.data as unknown as Array<User>;
            console.log(instituicoes)
            if (instituicoes.length === 0) {
                Alert.alert(
                    'Informação',
                    'Não é possivel criar um cupom no momento pois não existe nenhuma instituição cadastrada no sistema !'
                );
                navigation.navigate('Cupons');
            } else {

                setInstituicoes(instituicoes);
            }

        } else {
            Alert.alert('Informação', 'Desculpe mas você precisa estar logado para ter acesso a esta pagina !');
            navigation.navigate('Login');

        }

    }

    useEffect(() => {
        handleRecuperarInstituicoes();
    }, [])

    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PaginaInfo>Novo cupom</PaginaInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>
                {
                    instituicoes.length > 0 && (
                        <>
                            <Icone name={'ticket-alt'} size={100} color={'#FF8955'} />
                            <CaixaSelect>
                                <Select
                                    selectedValue={setInstituicaoSelected}
                                    onValueChange={(itemValue, itemIndex) => setInstituicaoSelected(String(itemValue))}
                                >
                                    {
                                        instituicoes.map((instituicao, index) => (
                                            <Select.Item
                                                value={instituicao.cpfCnpj}
                                                label={instituicao.nome}
                                                key={index}
                                            />

                    ))
                                    }

                                </Select>
                            </CaixaSelect>

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
                            />
                            <Input
                                icon="dollar-sign"
                                placeholder="Valor do cupom"
                                type="text"
                                onChangeText={(text) => setvalor(parseInt(text))}
                            />
                            <Input
                                icon="gift"
                                placeholder="Valor da doação"
                                type="text"
                                onChangeText={(text) => setdoacao(parseInt(text))}
                            />

                            <Acoes>
                                <Button
                                    text="Confirmar"
                                    backgroundColor="#68BB6C"
                                    textColor="white"
                                    icone="check"
                                    onPress={() => handleCadastrar()} />
                            </Acoes>
                        </>
                    )
                }

            </InformacoesPerfil>

            {/* <MenuInferior> */}
            <BarraNavegacao />
            {/* </MenuInferior> */}
        </Container>

    );

}