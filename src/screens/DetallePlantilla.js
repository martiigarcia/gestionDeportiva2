import React, {useState} from "react";
import {
    Provider,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text, Stack,
} from "@react-native-material/core";
import {Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {Icon} from "@rneui/base";
import {Input} from "@rneui/themed";

const Separator = () => (
    <View style={styles.separator} />
);
const App = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Text style={styles.textNombre}>Martina</Text>
            <Text style={styles.textTipoFicha}>Kinesiologia - Agosto 2022</Text>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.view}>

                        <Text style={styles.text}>Valor medidas 1: </Text>

                        <Text style={styles.text}>Valor medidas 2: </Text>

                        <Text style={styles.text}>Valor medidas 3: </Text>


                    </View>
                    <Separator />
                    <View >
                        <View style={styles.fixToText}>
                            <Button
                                title="Modificar"
                                onPress={() => Alert.alert('Seguro?')}
                            />
                            <Button
                                title="Eliminar"
                                onPress={() => Alert.alert('Seguriiiisimo?')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>
    );

};

const DetallePlantilla = () => (

    <Provider>
        <App/>

    </Provider>


);


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        paddingTop: StatusBar.currentHeight,
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 20,
    },
    input: {
        paddingTop: StatusBar.currentHeight,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 5
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    textNombre: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    textTipoFicha: {
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
    },
    viewButton: {
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
    },

});

export default DetallePlantilla;