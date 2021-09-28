import styled from 'styled-components/native';


type buttonProps = {
    backgroundColor: string;
}

type textProps = {
    textColor: string
}

export const Botao = styled.TouchableOpacity<buttonProps>`
    background-color: ${(props) => props.backgroundColor};
    height: 45px;
    width: 140px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.Text<textProps>`
    color: ${(props) => props.textColor};
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.bold};
`;