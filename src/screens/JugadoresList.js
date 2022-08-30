import React, {useContext, useEffect,useState} from 'react';
import {Alert, FlatList, Text} from 'react-native'
import UsersContext from "../contexts/UserContext";
import {Avatar, Button, ListItem, Icon} from "@rneui/themed";



export default props =>{

    const {state, dispatch} = useContext(UsersContext)
    const [usuariosfiltrados, setUsuarioFiltrado]= useState([]);

    useEffect(()=>{
           if (state.users)
               filtrarUsuario()
        },[state]
    )

    const filtrarUsuario = () => {
        setUsuarioFiltrado(state.users.filter(u => u.rol === "Jugador"));
        console.log(usuariosfiltrados);
    }

    function confirmDeletion(user){
        Alert.alert('Eliminar jugador', 'Seguro?', [
            {
                text: 'Segurisimo',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Ñoo'
            }
        ])

    }


    function getJugadorItem({item: user}) {
        return (

            <ListItem

                key={user.id}
                bottomDivider
                //onPress={()=> props.navigation.navigate('UserForm', user)}
            >

                <Avatar source={{uri: user.avatarUrl}} />


                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    <ListItem.Subtitle>{user.rol}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                 //   onPress={()=> props.navigation.navigate('UserForm', user)}
                    title="N"
                    color={ "#ff4500"}
                    />
                <Button
                  //  onPress={()=> confirmDeletion(user)}
                    title="K"
                    color={ "#32cd32"}
                />
                <Button
                  //  onPress={()=> confirmDeletion(user)}
                    title="D"
                    color={ "#8a2be2"}
                />

            </ListItem>

        )
    }


    return (

        <FlatList
            keyExtractor={user => user.id.toString()}
            data={usuariosfiltrados}
            renderItem={getJugadorItem}

        />

    )

}
