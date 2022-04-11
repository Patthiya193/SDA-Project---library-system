import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, StyleSheet, Button, Alert, Pressable, KeyboardAvoidingView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock, faPencil,faEnvelope, faPeopleRoof, faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { styles } from "./styles";
import { registerUser, getUser, checkUserName } from "../../network/userService";
import { platform } from "os";

const Register = ({navigation}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");

    const onPressRegister = async () => {
        if ( firstName.length == 0) {
            Alert.alert("Invalid Registration", "Please enter your first name.", [{text: "OK"}])
            return
        } else if ( lastName.length == 0 ) {
            Alert.alert("Invalid Registration", "Please enter your last name.", [{text: "OK"}])
            return
        }else if ( username.length == 0 ) {
            Alert.alert("Invalid Registration", "Please enter your username.", [{text: "OK"}])
            return
        } else if ( password.length == 0 ) {
            Alert.alert("Invalid Registration", "Please enter your password.", [{text: "OK"}])
            return
        } else if ( username.length < 8 ) {
            Alert.alert("Invalid Registration", "Username should be at least 8 characters long.", [{text: "OK"}])
            return
        } else if ( password.length < 8) {
            Alert.alert("Invalid Registration", "Password should be at least 8 characters long.", [{text: "OK"}])
            return
        } 
        var tempFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
        var tempLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
        

        var temp = await checkUserName(username);
        if (temp) {
            Alert.alert("Invalid Registration", "Username already existed!", [{text: "OK"}])
        } else {
            registerUser( {"firstName": tempFirstName,
            "lastName": tempLastName,
            "username": username,
            "password":password,
            "userType":"normal",
            "favoriteBooks":[]})
            Alert.alert("You are all set!", "Congratulations, your account has been successfully created!", [{text: "OK"}])
            setFirstName("")
            setLastName("")
            setUserName("")
            setPassWord("")
            navigation.navigate("SignIn")
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
                <Text style={styles.title}> Welcome ! </Text>

                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faUserCircle } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='First name' style={styles.textInput}
                    onChangeText={newFirstName => {
                        let value = newFirstName
					    value = value.replace(/[^A-Za-z]/gi, "")
                        setFirstName(value)
                    }} value={firstName}/>
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faPeopleRoof } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Last name' style={styles.textInput}
                    onChangeText={newLastName => {
                        let value = newLastName
					    value = value.replace(/[^A-Za-z]/gi, "")
                        setLastName(value)
                    }} value={lastName}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faPhone } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Phone Number' style={styles.textInput}/>
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faAddressCard } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Username' style={styles.textInput} 
                    onChangeText={newUserName => {
                        let value = newUserName
					    value = value.replace(/[^a-z0-9_]/gi, "")
                        setUserName(value)
                    }} value={username}/>
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true}
                    onChangeText={newPassWord => {
                        let value = newPassWord
					    value = value.replace(/[^A-Za-z0-9_]/gi, "")
                        setPassWord(value)
                    }} value = {password}/>
                </View>
                
                <Pressable style = {styles.RegisterButtonStyle} onPress = {onPressRegister}>
                    <Text style={styles.ReText}> Register </Text>
                
                </Pressable>
                <Text style={{paddingBottom: 10}}> Already have an account ? </Text>
                    <Pressable onPress={() => {
                            navigation.navigate('SignIn')
                        }}>
                        {({ pressed }) => (
                            <Text style={[{color: pressed ? '#434594':'#6C70EB'}]}>
                                Log In
                            </Text>
                        )}
                    </Pressable>  
            </KeyboardAvoidingView >
        </View>
    
    )
}

export default Register;