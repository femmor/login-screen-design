import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookmarkScreen = () => {
    return (
        <View style={styles.mainStyle}>
            <Text>Bookmark screen</Text>
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

export default BookmarkScreen


