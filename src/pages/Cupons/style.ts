
import styled from 'styled-components/native';


type textProps = {
    textColor: string
}

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: space-between;
    margin-top: 24px;
`;

export const MenuSuperior = styled.View`
    height: 10%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 58px;
`;

export const ContainerPage = styled.View`
    width: 60%;
    align-items: center;
`;

export const ContainerCupom = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background-color: #F7BE6F;
    border-radius: 10px;
    border: 3px dashed #FF8955;
    margin-bottom: 4%;
    margin-left: 4%;
`;


export const ContainerLista = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
    flex-direction: column;
`;

export const TextoHeader = styled.Text<textProps>`
    color: #FF8955;
    font-size: 24px;
    margin-right: 5%;
    font-family: ${(props) => props.theme.fonts.medium};
    text-align: center;
`;