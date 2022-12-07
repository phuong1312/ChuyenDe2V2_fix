import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledHomeTab, StyledHomeTabImage, StyledHomeTabText } from './styles'


const DrinkTab = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView  >
                <StyledHomeTab style={styles.TouchableImage}  >
                    <StyledHomeTabImage resizeMode="cover" source={require('../assets/image/cup_add.png')} />
                    <StyledHomeTabText>Add Drink </StyledHomeTabText>
                </StyledHomeTab>
                <StyledHomeTab style={styles.TouchableImage}  >
                    <StyledHomeTabImage resizeMode="cover" source={require('../assets/image/cup_add.png')} />
                    <StyledHomeTabText>Add Drink </StyledHomeTabText>
                </StyledHomeTab>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DrinkTab

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        alignItems: 'center',
        flex: 0.5,
        backgroundColor: '#a85b3c'
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 1,
        }
    },
})