import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    height: '20%',
                    width: '50%',
                    backgroundColor: 'orange'
                }}
                onPress={() => navigation.navigate('Welcome')}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login
