import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function UserPage(){
    // O userSelector retorna a store
    // Dizemos que a constante user desse componente é igual a da userData na store
    const userData = useSelector(state => state.user)

    return(
        <Text>{userData.login}</Text>
    );

}
