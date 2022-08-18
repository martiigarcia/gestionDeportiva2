import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../components/Login";
import {AppBar} from "@react-native-material/core";
import Menu from "../components/menu";
import ListadoJugadores from "../components/ListadoJugadores";



const Tab = createBottomTabNavigator(); //menu de abajo


const Navigation = () => {


    return (
        <NavigationContainer>
            <AppBar title="Inicio" centerTitle={true}
            />
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={ {headerTitleAlign: 'center'}}/>
                <Tab.Screen name="Menu" component={Menu} options={ {headerTitleAlign: 'center'}}/>
                <Tab.Screen name="Listado Jugadores" component={ListadoJugadores} options={ {headerTitleAlign: 'center'}}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;