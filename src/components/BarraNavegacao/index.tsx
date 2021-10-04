
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    Container,
    Link,
    LinkActive,
    Icone,
    Page
} from './style';


export const BarraNavegacao = () => {

    
    const navigation = useNavigation();

    function handleRedirectToHome() {
        navigation.navigate('Home');
    }    

    function handleRedirectToCupons() {
        navigation.navigate('Cupons');
    }    

    // function handleRedirectToEditarPerfil(cpfCnpj: string) {
    //     navigation.navigate('CupomAberto', {cpfCnpj});
    // }
        
    

    function handleRedirectToEditarPerfil() {
        navigation.navigate('EditarPerfil');
    }

    return (
        <Container>
            <TouchableOpacity
            
                onPress={() => handleRedirectToHome() }>
                <Link>
                    <Icone name="home" />
                    <Page>Início</Page>
                </Link>                
            </TouchableOpacity>

            
            <TouchableOpacity            
                onPress={() => handleRedirectToCupons() }>
                <Link>
                    <Icone name="shopping-bag"/>
                    <Page>Cupons</Page>
                </Link>                
            </TouchableOpacity>

                        
            <TouchableOpacity            
                onPress={() => handleRedirectToEditarPerfil() }>
                <Link>
                    <Icone name="user"/>
                    <Page>Perfil</Page>
                </Link>                
            </TouchableOpacity>
        </Container>
    );

}