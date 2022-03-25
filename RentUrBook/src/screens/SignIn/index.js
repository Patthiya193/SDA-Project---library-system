import React, { useState, useEffect } from "react";

import { View, Dimensions, ScrollView, Text, TextInput } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";

// import { getUser } from "../../network/loginService";

const userUrl = "http://localhost:8080/api/v1/user";
// const userUrl = "https://reactnative.dev/movies.json";

const SignIn = ({navigation, route}) => {
    const [data, setData] = useState([]);
    
    const getUser = async () => {
        
        try {
            const response = await fetch(userUrl);
            const json = await response.json();
            console.log(json);
            setData(json);
        } 
        catch (error) {
            console.error(error);
        }
    
    }

    useEffect(() => {
        getUser();
    }, []);

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
                <View>

                </View>
            </View>
        </View>
        
    )
}

export default SignIn;