
import React from 'react';
import { TextInputProps } from 'react-native';
import {
    CampoDeTexto,
    ContainerInput,
    Icone
} from './style';


interface InputProps extends TextInputProps{
    type: string;
    icon: string;
    placeholder: string;
}

export const Input = ({ type, icon, placeholder, ...textInputProps }:InputProps) => {

    return (

        <ContainerInput>
            <Icone 
                name={icon} 
                size={26}
            />
            <CampoDeTexto 
                placeholder={placeholder} 
                secureTextEntry={(type === 'password') ? true : false}
            />
        </ContainerInput>

    );

}