import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

import Login from "../screens/Login";
import Menu from "../screens/menu";
import CrearPlantilla from "../screens/CrearPlantilla";
import DetallePlantilla from "../screens/DetallePlantilla";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props)
{
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')}/>
        </DrawerContentScrollView>
    );
}

function MyDrawer()
{
    return (

        <Drawer.Navigator
            useLegacyImplementation
            centerTitle={true}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >

            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Menu" component={Menu}/>
            <Drawer.Screen name="Listado Jugadores" component={StackNavigation}/>
            <Drawer.Screen name="Crear Plantilla" component={CrearPlantilla}/>
            <Drawer.Screen name="Detalle Plantilla" component={DetallePlantilla}/>
        </Drawer.Navigator>
    );
}

export default function Navigation(){
    return( <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>)
}

