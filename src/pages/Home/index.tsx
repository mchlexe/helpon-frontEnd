
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
import { Button } from '../../components/Button';
import { Texto } from '../../components/Cupom/style';
import { FlatList } from 'react-native';

const CUPONS = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      texto: "Cupom #1",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      texto: "Cupom #2",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      texto: "Cupom #3",
    },
    {
      id: "3ac68afc-c605-48d2-a4f8-fbd91aa97f63",
      texto: "Cupom #4",
    },
    {
      id: "58694a0-3da1-471f-bd96-14557s1e29d72",
      texto: "Cupom #5",
    },
    {
      id: "3ac68afc-c605-4d3-a4f8-fbd91saa97f63",
      texto: "Cupom #6",
    },
    {
      id: "58694a0f-3da1-471fbd96-14557s1e29d72",
      texto: "Cupom #7",
    },
  ];


// const Item = ({cupom}) => {                
//     <ContainerCupom>
//         <Cupom 
//             icone="credit-card"
//             textColor="#FF8955"
//             backgroundColor="white" 
//             text={''}               />
    
//         <Texto textColor={'black'} >cupom.texto</Texto>
//     </ContainerCupom>
// };


export const Home = () => {

    const [selectedId, setSelectedId] = useState(null);

    

    // const renderItem = ({cupom}) => {

    //     ;
    // };

    return (

        <Container>

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

            
            <ContainerLista>
                <BarraOrdem />

                <FlatList
                    data={CUPONS}
                    renderItem={({item}) => {
                        return(   
                            <ContainerCupom>
                                <Cupom 
                                    icone="ticket-alt"
                                    textColor="white"
                                    backgroundColor=""
                                    text={''}               />
                            
                                <Texto textColor={'white'}>{item.texto}</Texto>
                            </ContainerCupom>
                        );
                        
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            
            </ContainerLista>

            <BarraNavegacao />

        </Container>

    );

}