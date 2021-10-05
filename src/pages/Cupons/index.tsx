
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
    id: number;
    descricao: number;
    status: boolean
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
    cupons: Array<Cupom>;
    doacoes?: string; 
    latitude: number;
    longitude: number; 
  }

export const Cupons = () => {

    const [cuponsAdquiridos, setCuponsAdquiridos] = useState<Cupom[]>([]);
    const [tipoUsuario, setTipoUsuario] = useState('');

    const navigation = useNavigation();
    const router = useRoute();
    // const { cpfCnpj } = router.params as UserProps;

    async function handleCuponsAdquiridos() {

        const userStorage = await getDataStorage('Auth.user');
        const token = await getDataStorage('Auth.token');

        if (userStorage != null && token !== null) {
             
            const user = JSON.parse(userStorage) as User;

            const dados = {
                cpfCnpj: user.cpfCnpj
            }

            const response = await api.post('/usuario/listar', 
                dados, { headers: { 'x-access-token': `${token}` } }
            );

            const data = response.data as unknown as Array<User>;

            if ( data.length > 0 ) {
                setCuponsAdquiridos(data[0].cupons)
                console.log(data[0].cupons)
                setTipoUsuario(data[0].tipo)
            } 

        } else {
            Alert.alert('Usuário invalido !', 'Você precisa se logar para acessar esta página !');
            return;

        }
    }

    useEffect(() => {
        handleCuponsAdquiridos();
      }, []);


    function handleRedirectToCupomAberto(id: number) {
        navigation.navigate('CupomAberto', {id});
    }

    function handleRedirectToCadastroCupom() {
        navigation.navigate('CadastroCupom');
    }
    
    return (

        <Container>
            {/* Header de clientes */}
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>

                    {tipoUsuario === 'Consumidor' || tipoUsuario === 'Instituição' ?
                        (<TextoHeader textColor={'white'}>Cupons adquiridos</TextoHeader>)
                        :
                        (<Button 
                            text="Novo cupom"
                            icone="plus"
                            textColor="white"
                            backgroundColor="#68BB6C"
                            onPress={() => handleRedirectToCadastroCupom() }
                    />)}                        
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

                        if (item.id) {
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
                        } else {
                            return null;
                        }                        
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