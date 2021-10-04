
import React, {useState, useEffect} from 'react';
import api from '../../api/axios';
import logo from '../../assets/logo/logo.png';
import { Input } from '../../components/Input';
import {
    Container,
    MenuSuperior,
    Logo,
    ContainerPage,
    ContainerCupom,
    ContainerBody,
    TextoHeader,
    ContainerLoja,
    ContainerInstituicao
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { BarraOrdem } from '../../components/BarraOrdem';
import { Cupom } from '../../components/Cupom';
import { Button } from '../../components/Button';
import { TextoCupom } from '../../components/Cupom/style';
import { FlatList } from 'react-native';
import { Icone } from '../../components/Cupom/style';

const CUPOM = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      texto: "Cupom #1",
      comercio: "Nome da Loja",
      instituicao: "Abrigo Gatil"
    }
  ];
import { useNavigation, useRoute  } from '@react-navigation/native';

interface props {
  id: string;
}

export const CupomAberto = () => {

  const navigation = useNavigation();
  const router = useRoute();
  const cupom_param = router.params as props;
 

  const [isLoading, setLoading] = useState(false);
  const [cupom, setCupom] = useState([]);

  async function handleCupom() {
    const response = await api.get(`/cupom/listar/${cupom_param.id}`);

    console.log(response.data[0]);
    setCupom(response.data[0]);
  }


  //Falta pegar os cupons do próprio usuário para definir qual botão será exibido [Depende do Login]

  useEffect(() => {
    handleCupom();
  }, []);

  return (

      <Container>


        <MenuSuperior>
          <Logo source={logo} />
          <ContainerPage>
                  <TextoHeader textColor={'#FF8955'}>Cupom</TextoHeader>
          </ContainerPage>
        </MenuSuperior>
        

        
        <ContainerBody>
          <ContainerLoja>            
              <Icone name={'store'} size={50} color={'#2C88D9'} />
              <TextoHeader textColor={'#2C88D9'}>{cupom.autorNome}</TextoHeader>
          </ContainerLoja>

          <ContainerCupom>            
              <Icone name={'ticket-alt'} size={150} color={'#FF8955'} />
              <TextoHeader textColor={'#FF8955'}>{cupom.descricao}</TextoHeader>
              <Button 
                    text="Usar cupom"
                    textColor="white"
                    backgroundColor="#1AAE9F"
                    onPress={() => {
                      alert('oi!');
                    }}
              />
              <Button 
                    text="Comprar cupom"
                    textColor="white"
                    backgroundColor="#2C88D9"
              />
              <Button 
                    text="Comprar cupom"
                    textColor="white"
                    backgroundColor="gray"
              />
          </ContainerCupom>

          <ContainerInstituicao>
              <Icone name={'money-bill-wave-alt'} size={50} color={'#1AAE9F'} />
              <TextoHeader textColor={'#1AAE9F'}>{cupom.instituicaoAlvoNome}</TextoHeader>
          </ContainerInstituicao>

        </ContainerBody>

        <BarraNavegacao />

      </Container>

  );

}