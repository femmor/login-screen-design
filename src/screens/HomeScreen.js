import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.mainStyle}>
            <Text>Home Screen</Text>
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

export default HomeScreen
