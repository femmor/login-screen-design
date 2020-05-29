import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.mainStyle}>
            <Text>Profile screen</Text>
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

export default ProfileScreen


