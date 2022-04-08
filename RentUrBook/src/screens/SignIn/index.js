import React, { useState } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button, Alert } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { loginUser, getUser } from "../../network/loginService";



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
            navigation.navigate('Main', {"userData":temp})
        }
        

    }

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <View style={styles.circleIcon}>
                    <Text style={styles.iconText}> B </Text>
                </View>
            </View>
            <View style={styles.mainBody}>
                <Text style={styles.title}> Login to RentUrBook </Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faUserCircle } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Username' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                    onChangeText={newUserName => {
                        let value = newUserName
					    value = value.replace(/[^A-Za-z0-9_]/gi, "")
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
            </View>
        </View>
        
    )
}

export default SignIn;