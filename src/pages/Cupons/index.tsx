
import React, {useState, useEffect} from 'react';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
import { Alert, TouchableOpacity, View } from 'react-native';
import {
    Container,
    MenuSuperior,
    Logo,
    ContainerPage,
    ContainerCupom,
    ContainerLista
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { BarraOrdem } from '../../components/BarraOrdem';
import { Cupom } from '../../components/Cupom';
import { TextoCupom } from '../../components/Cupom/style';
import { TextoHeader } from '../Cupons/style';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import api from '../../api/axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getDataStorage } from '../../utils/asyncStorage';

interface UserProps {
    cpfCnpj: string;
}

interface Cupom {
    autor: string;
    autorNome: string;
    instituicaoAlvo: string;
    instituicaoAlvoNome: string;
    data_validade: Date;
    descricao: string;
    status: boolean;
    valor_doado: number;
    valor: number;
    id: number;
}

interface User {
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

export const Cupons = () => {

    const [cuponsAdquiridos, setCuponsAdquiridos] = useState<Cupom[]>([]);

    const navigation = useNavigation();
    const router = useRoute();
    // const { cpfCnpj } = router.params as UserProps;

    async function handleCuponsAdquiridos() {

        const userStorage = await getDataStorage('Auth.user');
        let user;

        if (userStorage != null) {
             user = JSON.parse(userStorage) as User;
        } else {
            Alert.alert('Usuário invalido !', 'Você precisa se logar para acessar esta página !');
            return;

        }

        // const response = await api.post('/usuario/listar',
        //     dados, { headers: { 'x-access-token': `${token}` } }
        // );

        const response = await api.get('/cupom/listarPorStatus/false');
        
        var result = response.data;

        console.log(user.cupons);
        setCuponsAdquiridos(user.cupons);
    }

    useEffect(() => {
        handleCuponsAdquiridos();
      }, []);


    function handleRedirectToCupomAberto(id: number) {
        navigation.navigate('CupomAberto', {id});
    }
    
    return (

        <Container>
            {/* Header de clientes */}
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                        <TextoHeader textColor={'white'}>Cupons adquiridos</TextoHeader>
                </ContainerPage>
            </MenuSuperior>

            {/* Header de inst/loja */}
            {/* <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>                        
                    <Button 
                            text="Novo cupom"
                            textColor="white"
                            backgroundColor="#68BB6C"
                    />
                </ContainerPage>
            </MenuSuperior> */}

            
            <ContainerLista>
                <FlatList
                    data={cuponsAdquiridos}
                    renderItem={({item}) => {
                        return(   
                            // Falta estilo condicional para o cupom que já foi usado
                            
                            <TouchableOpacity                            
                            onPress={() => handleRedirectToCupomAberto(item.id) }>
                                <ContainerCupom>
                                    <Cupom 
                                        icone="ticket-alt"
                                        textColor="white"
                                        backgroundColor=""
                                        text={''}             />
                                        {/* É pra quando clicar aqui enviar para a tela
                                        CupomAberto */}
                                
                                    <TextoCupom textColor={'white'}>{item.descricao}</TextoCupom>
                                </ContainerCupom>                                            
                            </TouchableOpacity>
                        );
                        
                    }}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                />
            
            </ContainerLista>

            {/* Falta estilo condicional para destacar a página atual da navegaçào */}
            <BarraNavegacao />

        </Container>

    );

}