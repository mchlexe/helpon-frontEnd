import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Botao,
    Texto,
    Icone
} from './style';


interface ButtonProps extends TouchableOpacityProps {
    text: string;
    textColor: string;
    backgroundColor: string;
    icone?: string;
}

export const Button = ({ text, backgroundColor, textColor, icone, ...btnProps}: ButtonProps) => {


    if (icone) {

        return (

            <Botao backgroundColor={backgroundColor} activeOpacity={0.5} {...btnProps}>
                <Texto textColor={textColor} >{text}</Texto>
                <Icone name={icone} size={20} color={textColor} />
            </Botao>

        );

    }

    return (

        <Botao backgroundColor={backgroundColor} activeOpacity={0.5} {...btnProps}>
            <Texto textColor={textColor} >{text}</Texto>
        </Botao>

    );

}