import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/logo/logo.png';

import {
    Container,
    MenuSuperior,
    Logo,
    PaginaInfo,
    InformacoesPerfil,
    FotoPerfil,
    ContainerPage,
    Acoes
} from './style';
import { BarraNavegacao } from '../../components/BarraNavegacao';
import { ScrollView } from 'react-native-gesture-handler';
import { Icone } from '../../components/Cupom/style';

export const CadastroCupom = () => {

    return (

        <Container>
            <MenuSuperior>
                <Logo source={logo} />
                <ContainerPage>
                    <PaginaInfo>Novo cupom</PaginaInfo>
                </ContainerPage>
            </MenuSuperior>
            <InformacoesPerfil>
                <Icone name={'ticket-alt'} size={100} color={'#FF8955'} />
                <Input
                        icon="align-left"
                        placeholder="Descrição"
                        type="text"
                    />
                    <Input
                        icon="calendar"
                        placeholder="Validade"
                        type="text"
                        // Colocar tipo data
                    />
                    <Input
                        icon="dollar-sign"
                        placeholder="Valor do cupom"
                        type="text"
                    />
                    <Input
                        icon="gift"
                        placeholder="Valor da doação"
                        type="text"
                    />
                    <Input
                        icon="power"
                        placeholder="Status"
                        type="text"
                        //Colocar opçòes true or false
                    />
                <Acoes>
                    <Button
                        text="Confirmar"
                        backgroundColor="#68BB6C"
                        textColor="white"
                        icone="check"
                    />
                </Acoes>
            </InformacoesPerfil>

            {/* <MenuInferior> */}
                <BarraNavegacao />
            {/* </MenuInferior> */}
        </Container>

    );

}