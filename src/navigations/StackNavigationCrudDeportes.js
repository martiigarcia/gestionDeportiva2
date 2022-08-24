import * as React from 'react';
import UserList from "../screens/UserList";
import {Button, Icon} from "@rneui/themed";
import UserForm from "../screens/UserForm";
import {createStackNavigator} from "@react-navigation/stack";
import RolForm from "../screens/RolForm";
import RolList from "../screens/RolList";
import DeporteList from "../screens/DeporteList";
import DeporteForm from "../screens/DeporteForm";

const Stack = createStackNavigator();

export default function StackDeportes(){
    return (

        <Stack.Navigator
            initialRouteName="DeporteList"
            screenOptions={screenOptions}>
            <Stack.Screen
                name="DeporteList"
                component={DeporteList}
                options={({navigation})=>{
                    return {
                        title: "CRUD - Listado de deportes",
                        headerRight: ()=> (
                            <Button
                                onPress={()=> navigation.navigate("DeporteForm")}
                                type="clear"
                                icon={<Icon name="add" size={30} color="#fff"/>}/>
                        )
                    }
                }}/>

            <Stack.Screen
                name="DeporteForm"
                component={DeporteForm}
                options={{
                    title: "Formulario de deportes"
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