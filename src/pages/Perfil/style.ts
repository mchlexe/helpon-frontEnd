import styled from 'styled-components/native';
import MapView, { Callout } from 'react-native-maps';

export const Container = styled.View`
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

export const PageInfo = styled.Text`
    text-align: center;
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 25px;
    color: orange;
`;

export const InformacoesPerfil = styled.ScrollView`
    width: 100%;
    height: 80%;
    padding: 18px;
`;

export const FotoPerfil = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SubContainerInfo = styled.View`
    justify-content: space-around;

    width: 70%;
`;

export const UserName = styled.Text`
    font-size: 22px;
    font-family: ${(props) => props.theme.fonts.bold};
    color: gray;
`;

export const Descricao = styled.Text`
    font-family: ${(props) => props.theme.fonts.medium};
    color: darkgray;
    font-size: 13px;
`;

// export const MenuInferior = styled.View`
//     height: 10%;
// `;

export const DadosPessoais = styled.View`
    height: 500px;
    justify-content: space-evenly;
    align-items: center;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    font-family: ${(props) => props.theme.fonts.bold};
    color: gray;
`;

export const Informacao = styled.Text`
    font-size: 15px;
    font-family: ${(props) => props.theme.fonts.medium};
    color: darkgray;
`;

export const ContainerInformacao = styled.View`
    width: 100%;
`;

export const ContainerMapa = styled.View`
    width: 100%;
    height: 220px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
`;

export const Mapa = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const InfoMarcador = styled(Callout)`
    background-color: orange;
`;

export const TextoMarcador = styled.Text`
    color: white;
    font-family: ${props => props.theme.fonts.bold};
`;