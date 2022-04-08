import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, StyleSheet, Button, Alert, Pressable } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock, faPencil,faEnvelope, faPeopleRoof, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { styles } from "./styles";


const Register = ({navigation}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");

    async function onPressRegister() {
        () => {Alert.alert("Confirm to register")}
    }

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <View style={styles.circleIcon}>
                    <Text style={styles.iconText}> B </Text>
                </View>
            </View>
            <View style={styles.mainBody}>
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
                    <FontAwesomeIcon icon={ faAddressCard } color='#A8AFB9' size={24} style={{margin:5}}/>
                    <TextInput placeholder='Username' style={styles.textInput} 
                    onChangeText={newUserName => {
                        let value = newUserName
					    value = value.replace(/[^A-Za-z0-9_]/gi, "")
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
            </View>
        </View>
    
    )
}

export default Register;