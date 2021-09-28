import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
`;


export const SubContainer = styled.View`
    width: 85%;
    height: 280px;
    justify-content: space-evenly;
`;

export const Logo = styled.Image`
    width: 100%;
    height: 50%;
`;

export const ContainerBtns = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;