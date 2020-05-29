import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.mainStyle}>
            <Text>Settings screen</Text>
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

export default SettingsScreen


