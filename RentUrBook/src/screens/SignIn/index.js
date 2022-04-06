import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
        setData(false)
        var temp = await loginUser( username, password)
        setData(temp)
        // console.log(getUser())
        console.log("data #### ", data)
    
        if ( data == false ) {
            setPassWord("")
            Alert.alert("Login Failed", "Incorrect username or password.", [{text: "OK"}])
    
        } else {
            setUserName("")
            setPassWord("")
            navigation.navigate('Home', {"userData":data})
    
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
                    <FontAwesomeIcon icon={ faUserCircle } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Username' style={styles.textInput} placeholderTextColor='#A8AFB9' onChangeText={newUserName => setUserName(newUserName)} value={username}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor='#A8AFB9' onChangeText={newPassWord => setPassWord(newPassWord)} value={password}  secureTextEntry={true}/>
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