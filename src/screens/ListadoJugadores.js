import React from "react";
import {Button, ListItem} from "@react-native-material/core";
import {Icon} from "@rneui/base";
import {DataTable} from 'react-native-paper';

import {StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, ScrollView} from "react-native";
import {Cell, TableWrapper} from "react-native-table-component";
import {isThenable} from "@babel/core/lib/gensync-utils/async";



const DATA = [
    {
        title: "basket",
        data: ["pepito", "pepito2", "pepito3"]
    },
    {
        title: "voley",
        data: ["maria", "maria1", "maria2"]
    },
    {
        title: "fulbol",
        data: ["messi", "messi1", "messi2", "messi3", "messi4", "messi5", "messi6", "messi7"]
    },
    {
        title: "handball",
        data: ["olvia", "capo"]
    }
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}
            <View style={styles.viewButtons}>
                <Button style={styles.button} title="a"/>
                <Button style={styles.button} title="d"/>
            </View>
        </Text>

    </View>
);
/*
<SafeAreaView style={styles.container1}>
    <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item}/>
        }
        renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
        )}
    />
</SafeAreaView>*/
export default function ListadoJugadores() {

    return(
    <>


        <SafeAreaView style={styles.container1}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Jugador</DataTable.Title>
                            <DataTable.Title>Botones</DataTable.Title>
                        </DataTable.Header>





                        <DataTable.Row>
                            <DataTable.Cell>John</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>


                        <DataTable.Row>
                            <DataTable.Cell>Bob</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Mei</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>John</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Bob</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Mei</DataTable.Cell>
                            <DataTable.Cell>
                                <Button style={styles.button} title="a"/>
                                <Button style={styles.button} title="d"/>
                            </DataTable.Cell>
                        </DataTable.Row>

                    </DataTable>
                </View>
            </ScrollView>
        </SafeAreaView>


    </>)
};


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    container: {
        paddingTop: 100,
        paddingHorizontal: 30,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,

    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    },
    button: {
        alignItems: "flex-end",
        paddingLeft: 5
    },
    viewButtons: {
        alignItems: "flex-end"
    }
});



/*
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {Button} from "@react-native-material/core";

export default class ExampleFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Jugadores', 'Opciones'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd']
            ]
        }
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
                <View style={styles.btn}>
                    <Button style={styles.button} title="a"/>

                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});*/