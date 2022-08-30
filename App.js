import React from 'react';
import 'react-native-gesture-handler';
import {UsersProvider} from "./src/contexts/UserContext";
import Navigation from "./src/navigations/Navigation";
import {RolesProvider} from "./src/contexts/RolContext";
import {DeportesProvider} from "./src/screens/DeporteContext";
import Login from "./src/screens/Login";


export default function App() {
    return (
        <UsersProvider>
            <RolesProvider>
                <DeportesProvider>
                    <Navigation/>
                </DeportesProvider>
            </RolesProvider>
        </UsersProvider>

    );
}

