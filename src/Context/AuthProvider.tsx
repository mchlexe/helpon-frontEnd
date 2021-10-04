import React, {createContext, useContext, useEffect, useState, } from 'react';
import { View } from 'react-native';
import api from '../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import { Container } from './styles';

export interface User {
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
  latitude?: number;
  longitude?: number; 
}

interface ResponseData {
  user: User | null;
  logar: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
  logado: boolean;
}

interface Contexto {
  token: string;
  user:User | null;
}


const AuthContext = createContext({} as ResponseData);

export const AuthProvider: React.FC = ({children}) => {

  const [ user, setUser ] = useState<User | null>(null);

  async function logar (email: string, senha: string) {

    const dados = {
      email, senha
    }

    const response = await api.post('/usuario/login', dados);
    const {token, user} = response.data as unknown as Contexto;

    console.log({token, user});

    if ( token ) {

      setUser(user);
      await AsyncStorage.setItem('Auth.user', JSON.stringify(user));
      await AsyncStorage.setItem('Auth.token', token);
      
      return true;
    
    }

    return false;

  }

  async function logout () {

    setUser(null);
    await AsyncStorage.removeItem('Auth.user');
    await AsyncStorage.removeItem('Auth.token');


  }

  async function loadStorage () {

    const userStorage = await AsyncStorage.getItem('Auth.user');
    const tokenStorage = await AsyncStorage.getItem('Auth.token');

    if ( userStorage && tokenStorage ) {

      setUser(JSON.parse(userStorage));

    }

  }

  useEffect(() => {
    loadStorage
  }, []);

  return (

    <AuthContext.Provider value={{user, logar, logout, logado: !!user}}>
      {children}
    </AuthContext.Provider>

  );
}

export function useMyContext () {

  const contexto = useContext(AuthContext);

  return contexto;

}
