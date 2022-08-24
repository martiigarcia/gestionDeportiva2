import * as React from 'react';
import UserList from "../screens/UserList";
import {Button, Icon} from "@rneui/themed";
import UserForm from "../screens/UserForm";
import {createStackNavigator} from "@react-navigation/stack";
import RolForm from "../screens/RolForm";
import RolList from "../screens/RolList";

const Stack = createStackNavigator();

export default function StackRoles(){
    return (

        <Stack.Navigator
            initialRouteName="RolList"
            screenOptions={screenOptions}>
            <Stack.Screen
                name="RolList"
                component={RolList}
                options={({navigation})=>{
                    return {
                        title: "CRUD - Listado de roles",
                        headerRight: ()=> (
                            <Button
                                onPress={()=> navigation.navigate("RolForm")}
                                type="clear"
                                icon={<Icon name="add" size={30} color="#fff"/>}/>
                        )
                    }
                }}/>

            <Stack.Screen
                name="RolForm"
                component={RolForm}
                options={{
                    title: "Formulario de Usuarios"
                }}/>
        </Stack.Navigator>


    );
}

const screenOptions = {
    headerStyle:{
        backgroundColor: '#faf'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}