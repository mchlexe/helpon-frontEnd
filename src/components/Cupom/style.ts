import styled from 'styled-components/native';
import { FontAwesome5  } from '@expo/vector-icons';

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
    height: 70%;
    width: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;


export const TextoCupom = styled.Text<textProps>`
    color: white;
    width: 60%;
    font-size: 18px;
    margin-right: 5%;
    font-family: ${(props) => props.theme.fonts.medium};
    text-align: center;
`;

export const Icone = styled(FontAwesome5)<IconProps>`
    color: ${(props) => props.color};
`;

