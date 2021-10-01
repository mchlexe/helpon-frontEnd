
import React from 'react';

import {
    Container,
    Link,
    Icone,
    Page
} from './style';

export const BarraNavegacao = () => {

    return (
        <Container>
            <Link>
                <Icone name="home" size={30} color="darkgray"/>
                <Page>Início</Page>
            </Link>
            <Link>
                <Icone name="shopping-bag" size={30} color="darkgray"/>
                <Page>Cupons</Page>
            </Link>
            <Link>
                <Icone name="user" size={30} color="darkgray"/>
                <Page>Perfil</Page>
            </Link>
        </Container>
    );

}