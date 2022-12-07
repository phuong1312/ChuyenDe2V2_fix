import React from "react";
import Button from '../components/Button';
import {
    StyledFormHome,
    StyledDrinkTouchable,
    StyledDrinkTouchableImage,
    StyledDrinkTouchableText,
    StyledDrinkTouchableSmallText,
    StyledDrinkTouchablePrice,
    StyledDrinkTouchableBtn,
    Line,
} from "../components/styles"
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

//Colors 
const Test = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView  >
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cf.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableBtn  onPress={() => navigation.navigate('Notification')} >
                            <Text style={styles.btnDrText}>+</Text>
                        </StyledDrinkTouchableBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/capu.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> CaPuChino</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableBtn  onPress={() => navigation.navigate('Notification')} >
                            <Text style={styles.btnDrText}>+</Text>
                        </StyledDrinkTouchableBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/sting.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Nước uống Sting</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableBtn  onPress={() => navigation.navigate('Notification')} >
                            <Text style={styles.btnDrText}>+</Text>
                        </StyledDrinkTouchableBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/macha.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Macha Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableBtn  onPress={() => navigation.navigate('Notification')} >
                            <Text style={styles.btnDrText}>+</Text>
                        </StyledDrinkTouchableBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
                <StyledFormHome style={styles.twocl} >
                    <StyledDrinkTouchable style={styles.TouchableImage}  onPress={() => navigation.navigate('Notification')} >
                        <StyledDrinkTouchableImage resizeMode="cover" source={require('../assets/image/cfsua.png')} ></StyledDrinkTouchableImage>
                        <StyledDrinkTouchableText> Cà Phê Sữa Đá</StyledDrinkTouchableText>
                        <StyledDrinkTouchableSmallText numberOfLines={3} >The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property</StyledDrinkTouchableSmallText>
                        <StyledDrinkTouchablePrice>50$</StyledDrinkTouchablePrice>
                        <StyledDrinkTouchableBtn  onPress={() => navigation.navigate('Notification')} >
                            <Text style={styles.btnDrText}>+</Text>
                        </StyledDrinkTouchableBtn>
                    </StyledDrinkTouchable>
                </StyledFormHome>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:20
    },
    twocl: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    TouchableImage: {
        padding: 20,
        shadowColor: "#000000",
        shadowOpacity: .25,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 3
        }
    },
    btnDrText: {
        position: "absolute",
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        top: 5,
        marginHorizontal: 15,
    }
});

export default Test;


