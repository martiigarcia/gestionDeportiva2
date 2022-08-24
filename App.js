import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {UsersProvider} from "./src/screens/UserContext";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserForm from "./src/screens/UserForm";
import UserList from "./src/screens/UserList";
import {Button, Icon} from "@rneui/themed";
import Navigation from "./src/navigations/Navigation";
import {RolesProvider} from "./src/screens/RolContext";
/*
const App = () => {
    return (

    );
}
export default App;
*/


export default function App() {
    return (
        <UsersProvider>
            <RolesProvider>
                <Navigation/>
            </RolesProvider>
        </UsersProvider>

    );
}

