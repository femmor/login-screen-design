import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    source={require("../../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View animation="fadeInUp" style={styles.footer}>
                <Text style={styles.title}>Stay connected...</Text>
                <Text style={styles.text}>Sign in to account!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                        <LinearGradient
                            colors={['crimson', '#a80101']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>
                                Get Started
                            </Text>
                            <Ionicons
                                name="ios-arrow-forward"
                                color="#fff"
                                size={18}
                                style={{
                                    paddingLeft: 10,
                                    paddingTop: 2
                                }}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get("screen")
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "crimson"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });

export default SplashScreen


