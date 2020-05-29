import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, Platform, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const SignInScreen = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        checkTextInputChange: false,
        secureTextEntry: true
    })

    // Text Input
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false
            })
        }
    }

    // Password Input
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
            checkTextInputChange: true
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInLeft" style={styles.text_header}>Welcome</Animatable.Text>
            </View>

            <Animatable.View animation="fadeInUp" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="crimson"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Enter your email" 
                        style={styles.textInput} 
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    { data.checkTextInputChange ? (<Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />) : null }
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="crimson"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Enter your password" 
                        style={styles.textInput} 
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    {
                        data.checkTextInputChange ? (<Feather
                            name="eye-off"
                            color="green"
                            size={20}
                        />) : null
                    }
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'crimson'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

export default SignInScreen


