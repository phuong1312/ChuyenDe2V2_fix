import React from 'react';

import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { PageTitle, StyledHomeBrownImage, StyledHomeBrownText, StyledHomeBrownZone, StyledTouchable, StyledTouchableImage, StyledTouchableText } from '../components/styles';

import styled from 'styled-components';
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const data = [{ key: 'Bàn 1' },
{ key: 'Bàn 2' },
{ key: 'Bàn 3' },
{ key: 'Bàn 4' },
{ key: 'Bàn 5' },
{ key: 'Bàn 6' },
{ key: 'Bàn 7' },];
const numColumns = 2;


import { Colors } from '../components/styles';
const { brand, darkLight, black, primary, secondary, neon_blur, light_brand } = Colors;
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)
    let munberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (munberOfElementsLastRow !== numColumns && munberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${munberOfElementsLastRow}`, empty: true });
        munberOfElementsLastRow = munberOfElementsLastRow + 1;
    }
    return data;
}

export default class TableChoosing extends React.Component {
    renderItem = ({ item, index , navigation }) => {
        if (item.empty === true) {
            return (
                <TouchableOpacity >
                    <MaterialCommunityIcons style={styles.icons} name='desk' />
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.item}>
                <TouchableOpacity >
                    <MaterialCommunityIcons style={styles.icons} name='desk' />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center', flexDirection: "row" }}>
                    <Text style={{ color: brand, fontSize: 20, marginHorizontal:"3%", justifyContent: 'center', alignItems: 'center'}}>{item.key}</Text>
                    <Text style={{ color: brand, fontSize: 20, marginHorizontal:"3%", justifyContent: 'center', alignItems: 'center'}}>{item.key}</Text>
                </View>
            </View >
        );
    };
    render( navigation) {
        return (
            <View style={styles.container}>
                <PageTitle>TableChoosing</PageTitle>
                <FlatList
                    data={data}
                    style={styles.container}
                    renderItem={this.renderItem}
                    // keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: Dimensions.get('window').width / numColumns-30,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: brand,
        fontSize: 20,
    },
    home: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    title: {
        textAlign: 'center',
    },
    iconic: {
        height: 100,
        width: 100
    },
    icons: {
        fontSize: 140,
        color: '#a85b3c',
        marginHorizontal: 20,
    },
    scll: {
        width: '50%' // is 50% of container width
    },
    sclr: {
        width: '-50%' // is 50% of container width
    }

});