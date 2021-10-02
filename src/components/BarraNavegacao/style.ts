import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 10%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-end;
`;

export const Link = styled.View`
    justify-content: center;
    align-items: center;
    padding-left: 13%;
    padding-right: 13%;
`;

export const Icone = styled(Feather)`
    color: #FF8955;
    font-size: 24px;
`;

export const Page = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: darkgray;
    font-size: 13px;
`;