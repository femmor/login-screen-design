import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.mainStyle}>
            <Text>About Us</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AboutScreen


