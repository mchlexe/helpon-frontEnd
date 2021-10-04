
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
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { Icone } from '../../components/Cupom/style';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { getDataStorage } from '../../utils/asyncStorage';

interface props {
  id: string;
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

export const CupomAberto = () => {

  const navigation = useNavigation();
  const router = useRoute();
  const cupom_param = router.params as props;
  
 

  const [statusCupom, setStatusCupom] = useState('');
  const [cupom, setCupom] = useState([]);

  async function handleCupom() {
    const userStorage = await getDataStorage('Auth.user');

    let user;

    if (userStorage != null) {
         user = JSON.parse(userStorage) as User;
    } else {
        Alert.alert('Usuário invalido !', 'Você precisa se logar para acessar esta página !');
        return;

    }

    const cupomExiste = user.cupons.find(cupom => cupom.id == `${cupom_param.id}`);
    const response = await api.get(`/cupom/listar/${cupom_param.id}`);

    //console.log(response.data[0]);

    if(cupomExiste != undefined) {
      if(cupomExiste.status) {
        setStatusCupom('Usar');
      } else {        
        setStatusCupom('Usado');
      }
    } else {
      setStatusCupom('Comprar');
    }

    console.log(cupomExiste);

    setCupom(response.data[0]);
  }


  //Falta pegar os cupons do próprio usuário para definir qual botão será exibido [Depende do Login]

  useEffect(() => {
    setStatusCupom('');
    handleCupom();
  }, []);

  function handleRedirectToPerfil(cpfCnpj: Array<String>) {
    navigation.navigate('Perfil', {cpfCnpj});
  }

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
              <TouchableOpacity
                onPress={() => handleRedirectToPerfil(cupom.autorCnpj)}>
                <TextoHeader textColor={'#2C88D9'}>{cupom.autorNome}</TextoHeader>                                                  
              </TouchableOpacity>
            </ContainerLoja>    

          <ContainerCupom>            
              <Icone name={'ticket-alt'} size={150} color={'#FF8955'} />
              <TextoHeader textColor={'#FF8955'}>{cupom.descricao}</TextoHeader>
              {statusCupom === 'Usar' ? 
                (<Button
                text="Usar cupom"
                textColor="white"
                backgroundColor="#1AAE9F"
                onPress={() => {
                  alert('oi!');
                }}
                />) : (null) }

              {statusCupom === 'Comprar' ? 
                (<Button 
                  text="Comprar cupom"
                  textColor="white"
                  backgroundColor="#2C88D9"
                />) : (null) }

                {statusCupom === 'Usado' ? 
                  (<Button 
                    text="Cupom usado"
                    textColor="white"
                    backgroundColor="gray"
                  />) : (null) }
                  
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