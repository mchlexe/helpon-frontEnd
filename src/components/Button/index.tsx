import React from 'react';
import { 
    Botao,
    Texto
 } from './style';


interface ButtonProps {
    text: string;
    textColor: string;
    backgroundColor: string;
}

export const Button = ({ text, backgroundColor, textColor }: ButtonProps) => {

    return (

        <Botao backgroundColor={backgroundColor} activeOpacity={0.5}>
            <Texto textColor={textColor} >{text}</Texto>
        </Botao>

    );

}