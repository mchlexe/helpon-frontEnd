
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

const CUPONS = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      texto: "Cupom #1",
      ativo: "True",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      texto: "Cupom #2",
      ativo: "True",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      texto: "Cupom #3",
      ativo: "False",
    }
  ];


export const Cupons = () => {

    const [selectedId, setSelectedId] = useState(null);

    
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
                    data={CUPONS}
                    renderItem={({item}) => {
                        return(   
                            // Falta estilo condicional para o cupom que já foi usado
                            <ContainerCupom>
                                <Cupom 
                                    icone="ticket-alt"
                                    textColor="white"
                                    backgroundColor=""
                                    text={''}               />
                            
                                <TextoCupom textColor={'white'}>{item.texto}</TextoCupom>
                            </ContainerCupom>
                        );
                        
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            
            </ContainerLista>

            {/* Falta estilo condicional para destacar a página atual da navegaçào */}
            <BarraNavegacao />

        </Container>

    );

}