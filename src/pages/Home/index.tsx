
import React, {useState, useEffect} from 'react';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
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
import { FlatList, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import api from '../../api/axios';
import { useNavigation } from '@react-navigation/native';

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

export const Home = () => {

    const [cupons, setCupons] = useState<Cupom[]>([]);

    async function handleCupom() {

        const response = await api.get('/cupom/listarPorStatus/true');
        
        var result = response.data;

        setCupons(result);
    }

    useEffect(() => {
        handleCupom();
      }, [cupons]);

    const navigation = useNavigation();

    function handleRedirectToCupomAberto(id: number) {
        navigation.navigate('CupomAberto', {id});
    }
    
    return (

        <Container>
            {/* Header de clientes */}
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <Input 
                        icon="search" 
                        type="text"
                        placeholder="Pesquisar"
                    />
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
                    data={cupons}
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
                                    text={''}            />
                            
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