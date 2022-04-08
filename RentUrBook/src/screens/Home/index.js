import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { renderTabBar } from "./renderTabBar";
import { ItemDivider } from "./itemDivider";
import { Item } from "./item";

import { getUser } from "../../network/loginService";

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";

import { TabView } from 'react-native-tab-view';

const DATA = [{
    id: "1",
    title: "First item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "2",
    title: "Second item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "3",
    title: "Third item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "4",
    title: "Forth item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "5",
    title: "Fifth item",
    subtitle: "subtitle",
    type: "1",
},
]

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
        { key: 'second', title: 'Cartoon' },
        { key: 'third', title: 'Cooking' },
        { key: 'fourth', title: 'Education' },
        { key: 'fifth', title: 'Health' },
        { key: 'sixth', title: 'History' },
        { key: 'seventh', title: 'Magazine'},
        { key: 'eighth', title: 'Novel' },
        { key: 'ninth', title: 'Technology' },
        { key: 'tenth', title: 'Travel' },
    ]);

    const renderBook = ({item, onPress}) => {
        return <Item item={item} onPress={console.log("Pressed")}/>
    }
    
    // Only render the scene for 2 routes at each sides (performance purpose)
    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            // console.log(index)
            return <View/>;
        }
        
        const displayData = DATA;

        return <FlatList data={displayData} 
                renderItem={renderBook}
                ItemSeparatorComponent={ItemDivider}
                style={styles.mainBody} 
                />;
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