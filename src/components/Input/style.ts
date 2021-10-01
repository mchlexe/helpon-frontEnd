
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const ContainerInput = styled.View`
    height: 45px;
    border: 2px solid gainsboro;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Icone = styled(Feather)`
    color: darkgray;
    width: 17%;
    text-align: center;
`;


