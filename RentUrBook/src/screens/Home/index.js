import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { getUser } from "../../network/loginService";

const SignIn = ({navigation, route}) => {
    const [data, setData] = useState([]);

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <Text style={styles.title}>Rent Ur Book</Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                    <TextInput placeholder='Search for books' style={styles.textInput} placeholderTextColor='#A8AFB9'/>
                </View>
            </View>
            <View style={styles.mainBody}>
                
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}

export default SignIn;