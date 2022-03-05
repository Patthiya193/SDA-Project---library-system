import React, { useState } from "react";

import { View, Dimensions, ScrollView, Text, TextInput } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";

const SignIn = ({navigation, route}) => {
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
                    <TextInput placeholder='Username' style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faLock } color='#A8AFB9' size={24} />
                    <TextInput placeholder='Password' style={styles.textInput}/>
                </View>
            </View>
        </View>
        
    )
}

export default SignIn;