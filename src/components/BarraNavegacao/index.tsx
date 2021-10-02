
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
                <Icone name="home" />
                <Page>Início</Page>
            </Link>
            <Link>
                <Icone name="shopping-bag"/>
                <Page>Cupons</Page>
            </Link>
            <Link>
                <Icone name="user"/>
                <Page>Perfil</Page>
            </Link>
        </Container>
    );

}