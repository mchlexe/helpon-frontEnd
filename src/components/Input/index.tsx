
import React from 'react';
import { TextInputProps, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
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
                size={24}
            />
            <TextInput
                style={style.textInput}
                {...textInputProps}
                placeholder={placeholder} 
                secureTextEntry={(type === 'password') ? true : false}      
            />
        </ContainerInput>

    );

}

const style = StyleSheet.create({
    textInput: {
        width: '80%',
        height: '100%',
        fontSize: 17,
        marginRight: 10,
        fontFamily: 'Inter_700Bold',
        color: 'darkgrey'
    }
})