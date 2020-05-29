import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, Platform, TextInput, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = useState({
        email: "",
        password: "",
        confirm_password: "",
        checkTextInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
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
            password: val
        })
    }

    // Confirm Password Input
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        })
    }

    // SecureTextEntry
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    // Confirm SecureTextEntry
    const confirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="crimson" barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInLeft" style={styles.text_header}>Create an account</Animatable.Text>
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
                        name="key"
                        color="crimson"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Enter your password" 
                        style={styles.textInput} 
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                    {
                        data.secureTextEntry ? (<Feather
                            name="eye-off"
                            color="green"
                            size={20}
                        />) : (<Feather
                            name="eye"
                            color="green"
                            size={20}
                        />)
                    }
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="key"
                        color="crimson"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirm your password" 
                        style={styles.textInput} 
                        autoCapitalize="none"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={confirmSecureTextEntry}>
                    {
                        data.confirm_secureTextEntry ? (<Feather
                            name="eye-off"
                            color="green"
                            size={20}
                        />) : (<Feather
                            name="eye"
                            color="green"
                            size={20}
                        />)
                    }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                <LinearGradient
                    colors={['#43a047', '#186b1b']}
                    style={styles.signIn}>
                    <Text style={[styles.textSign, {color: "#fff"}]}>
                        Sign Up
                    </Text>
                </LinearGradient>
                <View
                    style={[styles.signUp, {
                        borderWidth: 1,
                        borderColor: "#186b1b",
                        marginTop: 15
                    }]}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignInScreen")}>
                        <Text style={[styles.textSign, {color: "#186b1b"}]}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
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

    signUp: {
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

export default SignUpScreen


