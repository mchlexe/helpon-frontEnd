import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type buttonProps = {
    backgroundColor: string;
}

type textProps = {
    textColor: string
}

type IconProps = {
    color: string
}

export const Botao = styled.TouchableOpacity<buttonProps>`
    background-color: ${(props) => props.backgroundColor};
    height: 45px;
    width: 140px;
    border-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

export const Texto = styled.Text<textProps>`
    color: ${(props) => props.textColor};
    font-size: 17px;
    font-family: ${(props) => props.theme.fonts.medium};
`;

export const Icone = styled(Feather)<IconProps>`
    color: ${(props) => props.color};
`;