import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const InputBox = (props) => {
    const [text, onChangeText] = React.useState(props.Text);

    return (
        <View>
            <Text style={styles.inputText}>
                {props.text}
            </Text>
            <TextInput
                style={[styles.input,styles.shadowProp]}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        borderColor: "#606068",
        fontFamily: 'Helvetica Neue',
    },
    inputText: {
        textTransform: 'capitalize',
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        fontSize:17,
        color: '#a85b3c',
        letterSpacing: 0.5,
    },
    shadowProp: {
        shadowOffset: { width: 1, height: 2 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});

export default InputBox;