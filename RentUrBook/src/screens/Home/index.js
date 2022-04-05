import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { getUser } from "../../network/loginService";

const SignIn = ({navigation, route}) => {
    const [data, setData] = useState([]);

    return(
        <View style={styles.background}>
            
        </View>
    )
}

export default SignIn;