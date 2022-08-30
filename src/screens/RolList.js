import React, { useContext } from 'react';
import { Alert, FlatList} from 'react-native'
import UsersContext from "../contexts/UserContext";
import {Avatar, Button, ListItem, Icon} from "@rneui/themed";
import RolContext from "../contexts/RolContext";
// import { Container } from './styles';

export default props =>{

    const {state, dispatch} = useContext(RolContext)

    function confirmDeletion(rol){
        Alert.alert('Eliminar rol', 'Seguro?', [
            {
                text: 'Segurisimo',
                onPress(){
                    dispatch({
                        type: 'deleteRol',
                        payload: rol
                    })
                }
            },
            {
                text: 'Ñoo'
            }
        ])

    }


    function getUserItem({item: rol}) {
        return (

            <ListItem

                key={rol.id}
                bottomDivider
                onPress={()=> props.navigation.navigate('RolForm', rol)}
            >

                <ListItem.Content>
                    <ListItem.Title>{rol.name}</ListItem.Title>

                </ListItem.Content>
                <Button
                    onPress={()=> props.navigation.navigate('RolForm', rol)}
                    type="clear"

                    icon={<Icon name="edit" size={25} color="orange"/>}/>
                <Button
                    onPress={()=> confirmDeletion(rol)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}/>


            </ListItem>



        )
    }


    return (

        <FlatList
            keyExtractor={rol => rol.id.toString()}
            data={state.roles}
            renderItem={getUserItem}

        />

    )


}