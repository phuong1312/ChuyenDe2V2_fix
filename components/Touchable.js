import EStyleSheet from 'react-native-extended-stylesheet';
import React, {Image, TouchableOpacity, View } from 'react-native';

const Touchable =(props) => {
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.StyledTouchable}>
                    <Image style={styles.TouchableImage}  ></Image>
                    <Text>props.text</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 



const styles = EStyleSheet.create({
    
});

export default styles;