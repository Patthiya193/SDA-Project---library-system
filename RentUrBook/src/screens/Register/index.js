import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, StyleSheet, Button, Alert, Pressable } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock, faPencil,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";



const Register = () => {

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
                    <FontAwesomeIcon icon={ faPencil } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Name' style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faUserCircle } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Username' style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Password' style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faEnvelope } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Email' style={styles.textInput}/>
                </View>
                
                <Pressable style = {styles.RegisterButtonStyle} onPress = {Alert.alert("Confirm to register")}>
                    <Text style={styles.ReText}> Register </Text>
                
                </Pressable>
                <Text> Already have an account ? </Text>
                    <Pressable>
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