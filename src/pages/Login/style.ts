import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
`;

export const SubContainer = styled.View`
    width: 85%;
    height: 350px;
    justify-content: space-evenly;
    align-items: center;

`;

export const Logo = styled.Image`
    width: 100%;
    height: 50%;
`;

