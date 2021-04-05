import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { COLORS, icons, SIZES } from '../../constants'

const Header = ({goBack, goMenu}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={goBack}
            >
                <Image
                    source={icons.back}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.gray
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={goMenu}
            >
                <Image
                    source={icons.menu}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.gray
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.radius,
        marginTop: SIZES.radius
    }
})

export default Header
