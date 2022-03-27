import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { getUser } from "../../network/loginService";

const userUrl = "http://192.168.1.110:8080/api/v1/user";

const SignIn = ({navigation, route}) => {
    const [data, setData] = useState([]);

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
                    <TextInput placeholder='Username' style={styles.textInput} placeholderTextColor='#A8AFB9'/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor='#A8AFB9' secureTextEntry={true}/>
                </View>
                <View>
                    <Pressable onPress={() => {console.log("Pressed1")}} style={styles.forgotButtonStyle} >
                        <Text>Forgot Your Password ?</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => {
                        setData(getUser());
                    } } style={styles.loginButtonStyle}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Don't have an account ? </Text>
                    <Pressable onPress={() => {console.log("Pressed3")}} style={styles.signupButtonStyle}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        
    )
}

export default SignIn;