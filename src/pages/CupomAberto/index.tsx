
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

interface Response {
  message: string;
}

export const CupomAberto = () => {

  const navigation = useNavigation();
  const router = useRoute();
  const cupom_param = router.params as props;
  
 

  const [statusCupom, setStatusCupom] = useState('');
  const [cupom, setCupom] = useState([]);

  async function handleUsarCupm() {
    
    const userStorage = await getDataStorage('Auth.user');

    if ( userStorage !== null ) {

      const user = JSON.parse(userStorage) as User;

      const dados = {
        cpfCnpj: user.cpfCnpj,
        cupons: {
          id: cupom.id,
          descricao: cupom.descricao,
          status: false
        }
      };

      const response = await api.put('/usuario/atualizar', dados);
      const { message } = response.data as unknown as Response;

      if ( message === 'Usuario atualizado com sucesso!' ) {
        Alert.alert('Informação', `Código do seu cupom ${cupom._id} !`);
        //setStatusCupom('Usado');
      } else{
        Alert.alert('Erro !','Falha ao usar cumpom !')
      }
        
      handleCupom();

    }

  }

  async function handleComprarCupom() {

      const userStorage = await getDataStorage('Auth.user');

      if (userStorage !== null) {

        const user = JSON.parse(userStorage) as User;

        const dados = {
          cpfCnpj: user.cpfCnpj,
          cupons: {
            id: cupom.id,
            descricao: cupom.descricao,
            status: true
          }
        }

        const response = await api.put('/usuario/atualizar', dados);
        const {message} = response.data as unknown as Response;

        if ( message === 'Usuario atualizado com sucesso!' ) {
          Alert.alert('Informação', 'Cupom comprado com sucesso !');
          //setStatusCupom('Usar');
        } else{
          Alert.alert('Erro !','Falha ao comprar cumpom !')
        }

        handleCupom();

      }

  }


  async function handleCupom() {
    const userStorage = await getDataStorage('Auth.user');
    const token = await getDataStorage('Auth.token');

    let user;

    if (userStorage != null && token !== null) {
         user = JSON.parse(userStorage) as User;
    } else {
        Alert.alert('Usuário invalido !', 'Você precisa se logar para acessar esta página !');
        return;
    }

    const dados = {
      cpfCnpj: user.cpfCnpj
    }

    const responseCupons = await api.post('/usuario/listar', 
                dados, { headers: { 'x-access-token': `${token}` } }
    );
    
    const data = responseCupons.data as unknown;

    const cupomExiste = data[0].cupons.find(cupom => cupom.id == `${cupom_param.id}`); //Cupons
    const response = await api.get(`/cupom/listar/${cupom_param.id}`); //Cupom


    // console.log('AQUI');
    // console.log(data[0].cupons.find(cupom => cupom.id == `${cupom_param.id}`));
    // console.log('AQUI');

    //console.log(response.data[0]);

    if(cupomExiste !== undefined) {
      if(cupomExiste.status) {
        setStatusCupom('Usar');
      } else {        
        setStatusCupom('Usado');
      }
    } else {
      setStatusCupom('Comprar');
    }

    console.log(userStorage);
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
              <TextoHeader textColor={'#2C88D9'}>Valor: R$ {cupom.valor}</TextoHeader>
              <TextoHeader textColor={'#1AAE9F'}>Valor doado: R$ {cupom.valor_doado}</TextoHeader>
              {statusCupom === 'Usar' ? 
                (<Button
                text="Usar cupom"
                textColor="white"
                backgroundColor="#1AAE9F"
                onPress={() => handleUsarCupm()}
                />) : (null) }

              {statusCupom === 'Comprar' ? 
                (<Button 
                  text="Comprar cupom"
                  textColor="white"
                  backgroundColor="#2C88D9"
                  onPress={() => handleComprarCupom()}
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
              <TouchableOpacity
                onPress={() => handleRedirectToPerfil(cupom.instituicaoAlvoCnpj)}>
                <TextoHeader textColor={'#1AAE9F'}>{cupom.instituicaoAlvoNome}</TextoHeader>                                           
              </TouchableOpacity>
          </ContainerInstituicao>

        </ContainerBody>

        <BarraNavegacao />

      </Container>

  );

}