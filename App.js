import React from 'react';
import 'react-native-gesture-handler';
import {UsersProvider} from "./src/screens/UserContext";
import Navigation from "./src/navigations/Navigation";
import {RolesProvider} from "./src/screens/RolContext";
import {DeportesProvider} from "./src/screens/DeporteContext";


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

