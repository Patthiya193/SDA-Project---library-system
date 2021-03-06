import React, { useState } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button, Alert, KeyboardAvoidingView } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { loginUser, getUser } from "../../network/userService";
import { CommonActions, StackActions } from "@react-navigation/core";



const SignIn = ({navigation, route}) => {
    const [data, setData] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");

    async function onPressLogin() {
        // setData(false)
        if ( username != "admin") {
            if ( username.length == 0 ) {
                Alert.alert("Login Failed", "Please enter your username.", [{text: "OK"}])
                return
            } else if ( password.length == 0 ) {
                Alert.alert("Login Failed", "Please enter your password.", [{text: "OK"}])
                return
            } else if ( username.length < 8 ) {
                Alert.alert("Login Failed", "Username should be at least 8 characters long.", [{text: "OK"}])
                return
            } else if ( password.length < 8) {
                Alert.alert("Login Failed", "Password should be at least 8 characters long.", [{text: "OK"}])
                return
            } 
        }
        var temp = await loginUser( username, password)
        console.log("temp", temp)

        if (temp == false ) {
            setPassWord("")
            Alert.alert("Login Failed", "Incorrect username or password.", [{text: "OK"}])
        }
        else {
            setData(temp)
            setUserName("")
            setPassWord("")
            console.log("send user", temp)
            // navigation.dispatch (CommonActions.reset({
            //     index:1,
            //     routes: [{ name: 'SignIn'},
            //     { name: 'MainLoggedIn', params: {"userData":{temp}} },
            //     { name: 'Register' },
            //     { name:'MainGuest', params: {"userData":{}}}],
            // }));
            navigation.dispatch( StackActions.popToTop())
            navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":temp}))
            // navigation.navigate('MainLoggedIn', {"userData":temp})
        }
        

    }

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <View style={styles.circleIcon}>
                    <Text style={styles.iconText}> B </Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior={"padding"} style={styles.mainBody}>
                <Text style={styles.title}> Login to RentUrBook </Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faAddressCard } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Username' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                    onChangeText={newUserName => {
                        let value = newUserName
					    value = value.replace(/[^a-z0-9_]/gi, "")
                        setUserName(value)
                    }} 
                    value={username} />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                    onChangeText={newPassWord => {
                        let value = newPassWord
					    value = value.replace(/[^A-Za-z0-9_]/gi, "")
                        setPassWord(value)
                    }} 
                    value={password}  secureTextEntry={true}/>
                </View>
                <View>
                    <Pressable onPress={ onPressLogin
                        // console.log(data);
                     } style={({pressed}) => [{backgroundColor: pressed ? '#8185eb':'#6C70EB'}, styles.loginButtonStyle]}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Don't have an account ? </Text>
                    <Pressable onPress={() => {
                            navigation.navigate('Register')
                        }}>
                        {({ pressed }) => (
                            <Text style={[{color: pressed ? '#434594':'#6C70EB'}, styles.signupText]}>
                                Sign Up
                            </Text>
                        )}
                    </Pressable>
                </View>
            </KeyboardAvoidingView >
        </View>
        
    )
}

export default SignIn;