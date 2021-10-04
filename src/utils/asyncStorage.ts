import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getDataStorage (chave:string) {

    const data = await AsyncStorage.getItem(chave);

    if (data) {
      
        return data;
    }

    return null;

}

export async function setDataStorage(chave:string, valor:string) {
    
    await AsyncStorage.setItem(chave, valor);

    return true;

}