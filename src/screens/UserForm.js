import React, {useContext, useEffect, useState} from 'react';

import {Text, View, TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'


import UsersContext from "../contexts/UserContext";
import {Button, Stack} from "@react-native-material/core";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import RolesContext from "../contexts/RolContext";
import {rolesArchivo} from "../archivo/roles";
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";


// import { Container } from './styles';

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    const {roles} = useContext(RolesContext)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [rol, setRol] = useState([])
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    useEffect(()=>{
        cargarRoles();
        },[]
    )

    const cargarRoles=()=>{
        setRol(rolesArchivo)

    }

    console.log(user);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.form}>
                        <Text style={styles.text}>Nombre</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={name => setUser({...user, name})}
                            placeholder="Completar"
                            value={user.name}
                        />

                        <Text style={styles.text}>Apellido</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Completar"
                        />
                        <Text style={styles.text}>Dni</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Completar"
                        />

                        <Text style={styles.text}>Email:</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={email => setUser({...user, email})}
                            placeholder="Completar a@a.com"
                            value={user.email}
                        />
                        <Text style={styles.text}>Contraseña:</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Completar"
                        />
                        <Text style={styles.text}>Fecha de nacimiento:</Text>
                        <Button variant={"outlined"} style={styles.buttonDate} title="Seleccionar fecha" onPress={() => setOpen(true)} value={date}/>
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                console.log(moment(date).format("YYYY-MM-DD"))
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />


                        <Text style={styles.text}>Rol en el sistema:</Text>
                        {renderLabel()}


                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={rol}
                            search
                            maxHeight={300}
                            labelField="name"
                            valueField="id"
                            placeholder={!isFocus ? 'Seleccionar rol' : '...'}
                            searchPlaceholder="Buscar por nombre"
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />


                        <Text style={styles.text}>Avatar:</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={avatar => setUser({...user, avatar})}
                            placeholder="Link del avatar"
                            value={user.avatarUrl}
                        />
                        <View style={styles.view}>
                            <Stack fill center spacing={4}>
                                <Button title="Guardar"
                                        style={styles.button}
                                        onPress={() => {
                                            dispatch({
                                                type: user.id ? 'updateUser' : 'createUser',
                                                payload: user
                                            })
                                            navigation.navigate('UserList')
                                        }}/>
                            </Stack>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    view: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        padding: 20,

    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        marginBottom: 10, padding: 10
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        padding: 10
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        marginBottom: 10, padding: 10,

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    buttonDate:{
        height: 50,
        borderWidth: 1,
        margin: 10,
        marginBottom: 10, padding: 10,
        borderColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
});

