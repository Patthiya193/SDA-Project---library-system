import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { renderTabBar } from "./renderTabBar";

import { getUser } from "../../network/loginService";

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";

import { TabView } from 'react-native-tab-view';


const Favorite = ({navigation, route, userData}) => {
    console.log("Favorite: current user", userData)
    // if (route.params) {
    //     const [userData, setUser] = useState(route.params["userData"]);
    //     console.log("Favorite data ", userData);

    // }
    // else {
    //     const [userData, setUser] = useState({});
    //     console.log("Favorite data ", userData);

    // }

    const [tabBarTab, setTab] = useState(1);

    // const renderScene = ({ route }) => {
    //     if (Math.abs(index - routes.indexOf(route)) > 2) {
    //         // console.log(index)
    //         return <View/>;
    //     }
    //     return <FlatList style={styles.mainBody} />;
    // };

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <Text style={styles.title}>Favorite</Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                    <TextInput placeholder='Search for books' style={styles.textInput} placeholderTextColor='#A8AFB9'/>
                </View>
            </View>
            <View style={styles.mainBody}>
                <FlatList style={styles.mainBody}/>
            </View>
            
        </View>
    )
}

export default Favorite;