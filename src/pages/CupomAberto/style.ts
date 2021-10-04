
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
`;

export const ContainerBody = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
    flex-direction: column;
`;


export const TextoHeader = styled.Text<textProps>`
    color: ${(props) => props.textColor};
    font-size: 24px;
    margin-right: 5%;
    font-family: ${(props) => props.theme.fonts.medium};
    text-align: center;
`;

export const ContainerLoja = styled.View`
    width: 90%;
    height: 15%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background-color: #DFE6ED;
    border-radius: 10px;
    margin-bottom: 4%;
`;

export const ContainerCupom = styled.View`
    width: 90%;
    height: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background-color: white;
    border: 3px dashed #FF8955;
    border-radius: 10px;
    margin-bottom: 4%;
`;

export const ContainerInstituicao = styled.View`
    width: 90%;
    height: 15%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background-color: #DFE6ED;
    border-radius: 10px;
    margin-bottom: 4%;
`;