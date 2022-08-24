import React, {useContext, useState} from 'react';

import {Text, View, TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'


import UsersContext from "./UserContext";
import {Button, Stack} from "@react-native-material/core";
import {SafeAreaContext} from "react-native-safe-area-context";
import RolesContext from "./RolContext";


// import { Container } from './styles';

export default ({route, navigation}) => {
    const [rol, setRol] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(RolesContext)


    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.form}>
                        <Text style={styles.text}>Nombre del rol</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={name => setRol({...rol, name})}
                            placeholder="Completar"
                            value={rol.name}
                        />


                        <View style={styles.view}>
                            <Stack fill center spacing={4}>
                                <Button title="Guardar"
                                        style={styles.button}
                                        onPress={() => {
                                            dispatch({
                                                type: rol.id ? 'updateRol' : 'createRol',
                                                payload: rol
                                            })
                                            navigation.navigate('RolList')
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
