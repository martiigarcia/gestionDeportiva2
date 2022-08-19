import * as React from 'react';
import {StatusBar, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "../components/Login";
import {AppBar, HStack, IconButton} from "@react-native-material/core";
import Menu from "../components/menu";
import ListadoJugadores from "../components/ListadoJugadores";
import Ionicons from "react-native-vector-icons/Ionicons";
import CrearPlantilla from "../components/CrearPlantilla";
import DetallePlantilla from "../components/DetallePlantilla";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator(); //menu de abajo

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
            <Drawer.Screen name="Listado Jugadores" component={ListadoJugadores}/>
            <Drawer.Screen name="Crear Plantilla" component={CrearPlantilla}/>
            <Drawer.Screen name="Detalle Plantilla" component={DetallePlantilla}/>
        </Drawer.Navigator>
    );
}



export default function Navigation()
{
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    );
}


/*
import * as React from 'react';
import
{
    NavigationContainer
}
from '@react-navigation/native';
import
{
    createStackNavigator
}
from '@react-navigation/stack';
import Login from "../components/Login";
import
{
    createDrawerNavigator
}
from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function Navigation()
{
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} options={{headerShown: false}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
*/

/*
*

<AppBar
    title="Inicio"
    subtitle="Seguimiento jugadores"
    centerTitle={true}
    leading={props => (
        <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
        <IconButton
            icon={props => <Icon name="dots-vertical" {...props} />}
            {...props}
        />
    )}
/>
<Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Login') {
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';

            } else if (route.name === 'Menu') {

                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

            } else if (route.name === 'Listado Jugadores') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

            } else if (route.name === 'Plantilla') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

            } else if (route.name === 'Detalle Plantilla') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Login" component={Login} options={{headerTitleAlign: 'center'}}/>
    <Tab.Screen name="Menu" component={Menu} options={{headerTitleAlign: 'center'}}/>
    <Tab.Screen name="Listado Jugadores" component={ListadoJugadores}
                options={{headerTitleAlign: 'center'}}/>
    <Tab.Screen name="Plantilla" component={CrearPlantilla}
                options={{headerTitleAlign: 'center'}}/>
    <Tab.Screen name="Detalle Plantilla" component={DetallePlantilla}
                options={{headerTitleAlign: 'center'}}/>

</Tab.Navigator>

*
* */