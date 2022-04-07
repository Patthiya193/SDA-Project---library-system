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


const Home = ({navigation, route}) => {
    if (route.params) {
        const [userData, setUser] = useState(route.params["userData"]);
        console.log("Home data ", userData);

    }
    else {
        const [userData, setUser] = useState({});
        console.log("Home data ", userData);

    }

    const [tabBarTab, setTab] = useState(0);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Art' },
        { key: 'second', title: 'Cooking' },
        { key: 'third', title: 'Health' },
        { key: 'fourth', title: 'Novel' },
        { key: 'fifth', title: 'Magazine' },
        { key: 'sixth', title: 'Travel' },
        { key: 'seventh', title: 'History' },
        { key: 'eighth', title: 'Technology' },
        { key: 'ninth', title: 'Education' },
        { key: 'tenth', title: 'Cartoon' },
    ]);

    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            // console.log(index)
            return <View/>;
        }
        return <FlatList style={styles.mainBody} />;
    };

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <Text style={styles.title}>Home</Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                    <TextInput placeholder='Search for books' style={styles.textInput} placeholderTextColor='#A8AFB9'/>
                </View>
            </View>
            <TabView style={{flex: 3.5}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
            <View style={styles.footer}>
                <TabBar
                    activeTab={tabBarTab}
                    onPress={(tabIndex) => { 
                        setTab(tabIndex) 
                        switch (tabIndex) {
                            case 3:
                                navigation.navigate("SignIn")
                                break
                        }
                    }}
                    iconStyle={{ width: 50, height: 50 }}
                    iconActiveTintColor="white"
                    iconInactiveTintColor="#CCCCCC"
                    tintColor="#6C70EB"
                    titleColor="#6C70EB" 
                    values={[
                        { title: "Home", icon: "home", isIcon: true, iconType: iconTypes.Entypo },
                        { title: "Favorites", icon: "heart", isIcon: true, iconType: iconTypes.FontAwesome },
                        { title: "Notification", icon: "notifications", isIcon: true, iconType: iconTypes.MaterialIcons },
                        { title: "Account", icon: "user-alt", isIcon: true, iconType: iconTypes.FontAwesome5 }
                    ]}
                />
            </View>
        </View>
    )
}

export default Home;