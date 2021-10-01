import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    margin-top: 24px;
`;

export const MenuSuperior = styled.View`
    height: 10%;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 57px;
`;

export const ContainerPage = styled.View`
    width: 60%;
`;


export const PaginaInfo = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 25px;
    color: orange;
    text-align: center;
`;

export const InformacoesPerfil = styled.View`
    
    height: 80%;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
`;

export const FotoPerfil = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    border: 5px gainsboro;
`;

export const Acoes = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;


export const MenuInferior = styled.View`
    background-color: gainsboro;
    height: 10%;
`;

