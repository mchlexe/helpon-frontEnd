import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const Link = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Icone = styled(Feather)`

`;

export const Page = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    color: darkgray;
    font-size: 15px;
`;