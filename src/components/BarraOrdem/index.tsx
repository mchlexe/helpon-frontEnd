
import React from 'react';

import {
    Container,
    Link,
    Icone,
    Page,
    Title
} from './style';

export const BarraOrdem = () => {

    return (
        <Container>            
            <Title>Ordenar cupons por:</Title>
            <Link>
                <Icone name="dollar-sign" />
                <Page>Valor</Page>
                <Icone name="clock"/>
                <Page>Criação</Page>
                <Icone name="calendar"/>
                <Page>Validade</Page>
            </Link>
        </Container>
    );

}