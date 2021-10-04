import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { AuthProvider } from './src/Context/AuthProvider';
import RoutesMain from './src/routes/routesMain';
import { NavigationContainer } from '@react-navigation/native';






export default function App() {

  let [fontsLoaded] = useFonts({ //useFonts é um hook que carrega as fonts e retorna true caso elas sejam carregadas e falso caso o contrário.
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });


  if (!fontsLoaded) { //Se as fontes não forem carregadas
    <AppLoading />
  } else {

    return (


      <NavigationContainer>

        <ThemeProvider theme={theme} >

          <AuthProvider>

            <RoutesMain />

          </AuthProvider>

        </ThemeProvider>

      </NavigationContainer>




    );
  }

  return null;
}


