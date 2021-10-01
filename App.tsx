import React from 'react';
import { Perfil } from './src/pages/Perfil';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
 } from '@expo-google-fonts/inter';




export default function App() {

  const [fontsLoaded] = useFonts({ //useFonts é um hook que carrega as fonts e retorna true caso elas sejam carregadas e falso caso o contrário.
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })


  if ( !fontsLoaded ) { //Se as fontes não forem carregadas
      <AppLoading />
  }

  return (

    <ThemeProvider theme={theme} >
      <Perfil />
    </ThemeProvider>

  );
}


