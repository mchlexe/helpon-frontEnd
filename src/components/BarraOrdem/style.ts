import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 13%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3%;
`;


export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: darkgray;
    font-size: 13px;
    width: 100%;
`;

export const Link = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

export const Icone = styled(Feather)`
    color: #FF8955;
    font-size: 24px;
`;

export const Page = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: darkgray;
    font-size: 13px;
    margin-right: 24px;
`;
