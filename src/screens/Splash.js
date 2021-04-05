import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {navigation.navigate('Login')}, 3000)
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/re.png')}
                style={{
                    height: 200,
                    width: 200,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbdefb',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Splash;
