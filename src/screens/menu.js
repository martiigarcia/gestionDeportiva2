import React, {useState} from "react";
import {
    Provider,
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
} from "@react-native-material/core";
import {Image, StyleSheet} from "react-native";
import {Icon} from "@rneui/base";

const App = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Icon name={'home'}></Icon>

            <Button
                title="Boton de dialogo"
                style={{margin: 16}}
                onPress={() => setVisible(true)}
            />
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title="Prueba de cartel"/>
                <DialogContent>
                    <Image
                        source={{
                            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                        }}
                        style={{width: 200, height: 200}}
                    />

                    <Text>
                        Soy un {props.name} {isHungry ? "hambriento" : "lleno"}!
                    </Text>
                    <Button
                        onPress={() => {
                            setIsHungry(false);
                        }}
                        disabled={!isHungry}
                        title={isHungry ? "dame de comer" : "gracias"}
                    />
                </DialogContent>
                <DialogActions>

                    <Button
                        disabled={isHungry}
                        title="ya comi"
                        compact
                        variant="text"
                        onPress={() => {

                            setIsHungry(true);
                            setVisible(false);
                        }
                        }
                    />
                </DialogActions>
            </Dialog>

        </>
    );

};

const Menu = () => (

    <Provider>
        <App name="Gato"/>

    </Provider>


);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});

export default Menu;