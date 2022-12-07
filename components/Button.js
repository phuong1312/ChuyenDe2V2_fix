import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <View style={styles.btnSettting}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#a85b3c',
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    btnSettting:{
        width: '90%',
        marginTop: 5 ,
        marginHorizontal: 20,
    }
});
