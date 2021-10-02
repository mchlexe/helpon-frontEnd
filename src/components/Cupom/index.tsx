import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Botao,
    Icone,
} from './style';


interface ButtonProps extends TouchableOpacityProps {
    text: string;
    textColor: string;
    backgroundColor: string;
    icone?: string;
}

export const Cupom = ({ text, textColor, icone, ...btnProps}: ButtonProps) => {


    return (

        <Botao activeOpacity={0.5} {...btnProps}>
            <Icone name={icone} size={50} color={textColor} />
        </Botao>

    

    );

}