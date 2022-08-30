import React, {useContext, useState} from 'react';

import {Text, View, TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'


import UsersContext from "../contexts/UserContext";
import {Button, Stack} from "@react-native-material/core";
import {SafeAreaContext} from "react-native-safe-area-context";
import DeportesContext from "./DeporteContext";


// import { Container } from './styles';

export default ({route, navigation}) => {
    const [deporte, setDeporte] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(DeportesContext)

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.form}>
                        <Text style={styles.text}>Nombre</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={name => setDeporte({...deporte, name})}
                            placeholder="Completar"
                            value={deporte.name}
                        />


                        <View style={styles.view}>
                            <Stack fill center spacing={4}>
                                <Button title="Guardar"
                                        style={styles.button}
                                        onPress={() => {
                                            dispatch({
                                                type: deporte.id ? 'updateDeporte' : 'createDeporte',
                                                payload: deporte
                                            })
                                            navigation.navigate('DeporteList')
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
