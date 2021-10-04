
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
import { FlatList } from 'react-native';
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

export const Cupons = () => {

    const [cupons, setCupons] = useState<Cupom[]>([]);

    async function handleCupom() {

        const response = await api.get('/cupom/listarPorStatus/true');
        
        var result = response.data;

        console.log(result);
        setCupons(result);
    }

    useEffect(() => {
        handleCupom();
      }, []);

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
                <BarraOrdem />

                <FlatList
                    data={cupons}
                    renderItem={({item}) => {
                        return(   
                            // Falta estilo condicional para o cupom que já foi usado
                            <ContainerCupom>
                                <Cupom 
                                    icone="ticket-alt"
                                    textColor="white"
                                    backgroundColor=""
                                    text={''}
                                    onPress={() => handleRedirectToCupomAberto(item.id) }               />
                                    {/* É pra quando clicar aqui enviar para a tela
                                    CupomAberto */}
                            
                                <TextoCupom textColor={'white'}>{item.descricao}</TextoCupom>
                            </ContainerCupom>
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