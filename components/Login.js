import React from 'react';
import {View, StatusBar, SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native';
import {Icon, Input} from '@rneui/themed';
import {Button, Stack, Text} from "@react-native-material/core";

const Login = () => {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Ingresar sesion</Text>
                        <Input style={styles.input}
                               placeholder="Email"
                               keyboardType="email-address"
                        />
                        <Input style={styles.input}
                               placeholder="Contraseña"
                               password={true}
                               secureTextEntry={true}
                               errorStyle={{color: 'red'}}
                               errorMessage='La contraseña no coincide'
                        />
                    </View>
                    <View style={styles.view}>
                        <Stack fill center spacing={4}>
                            <Button style={styles.button}
                                    title="Iniciar Sesión"
                                    onPress={() => Alert.alert('Iniciando')}
                            />
                        </Stack>
                    </View>
                </ScrollView>
            </SafeAreaView>


        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
        textAlign: 'center',
    },
    view: {
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        paddingTop: StatusBar.currentHeight,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Login;