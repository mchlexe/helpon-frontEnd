import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import {RectButton} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
    justify-content: center;
    align-items: center;
`;

export const SubContainer = styled.View`
    width: 85%;
    justify-content: space-evenly;
    align-items: center;
    height: 600px;   

`;

export const Logo = styled.Image`
    width: 50%;
    height: 85%;
`;

export const CaixaSelect = styled.View`
    width: 100%;
    height: 45px;
    border: 2px solid gainsboro;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Select = styled(Picker)`
    width: 100%;
    color: darkgray;
`;

export const ContainerImages = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

export const FotoPerfil = styled.Image`
    width: 100%;
    height: 90px;
    border-radius: 10px;
`;

export const ContainerFotoPerfil = styled.View`
    flex-direction: row;
    width: 30%;
   
`;

export const Botao = styled(RectButton)`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: #FF8955;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-left: 70px;
    position: absolute;
`;

export const Icone = styled(Feather)`
    font-size: 30px;
    color: white;
`;


