import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';


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
    width: 100%;
    height: 30%;
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

