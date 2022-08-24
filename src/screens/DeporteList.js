import React, { useContext } from 'react';
import { Alert, FlatList} from 'react-native'
import UsersContext from "./UserContext";
import {Avatar, Button, ListItem, Icon} from "@rneui/themed";
import RolContext from "./RolContext";
import DeportesContext from "./DeporteContext";
// import { Container } from './styles';

export default props =>{

    const {state, dispatch} = useContext(DeportesContext)

    function confirmDeletion(deporte){
        Alert.alert('Eliminar deporte', 'Seguro?', [
            {
                text: 'Segurisimo',
                onPress(){
                    dispatch({
                        type: 'deleteRol',
                        payload: deporte
                    })
                }
            },
            {
                text: 'Ñoo'
            }
        ])

    }


    function getUserItem({item: deporte}) {
        return (

            <ListItem

                key={deporte.id}
                bottomDivider
                onPress={()=> props.navigation.navigate('DeporteForm', deporte)}
            >

                <ListItem.Content>
                    <ListItem.Title>{deporte.name}</ListItem.Title>

                </ListItem.Content>
                <Button
                    onPress={()=> props.navigation.navigate('DeporteForm', deporte)}
                    type="clear"

                    icon={<Icon name="edit" size={25} color="orange"/>}/>
                <Button
                    onPress={()=> confirmDeletion(deporte)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}/>


            </ListItem>



        )
    }


    return (

        <FlatList
            keyExtractor={deporte => deporte.id.toString()}
            data={state.deportes}
            renderItem={getUserItem}

        />

    )


}