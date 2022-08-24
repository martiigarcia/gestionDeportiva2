import React, {useContext, useState} from 'react';

import {Text, View, TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'


import UsersContext from "./UserContext";
import {Button, Stack} from "@react-native-material/core";
import {SafeAreaContext} from "react-native-safe-area-context";


// import { Container } from './styles';

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

//Registro: Mail, contraseña, nombre, apellido, fecha de nacimiento, rol solicitado.
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

                        <TextInput
                            style={styles.input}
                            placeholder="Completar dd-mm-aaaa"
                        />
                        <Text style={styles.text}>Rol en el sistema:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Combo box de roles"

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
})
