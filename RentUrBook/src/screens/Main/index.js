import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Home from "../Home"
import { styles } from "./styles";

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";
import Favorite from "../Favorite"


import { TabView } from 'react-native-tab-view';

const Main = ({navigation, route}) => {
    console.log("params",route.params)
    const [userData, setUserData] = useState(route.params);

    console.log("Main data ", userData);


    const [tabBarIndex, setTabIndex] = useState(0);
    const [tabBarRoute, setTabRoute] = useState (
        [
            {
              key: 'home',
              title: 'Home',
            },
            {
              key: 'favorite',
              title: 'Favorite',
            },
            // {
            //   key: 'notification',
            //   title: 'Notification',
            // },
            // {
            //   key: 'favorite',
            //   title: 'Favoriteb',
            // },
          ]
    );

    const _handleIndexChange = (index) => {
        setTabIndex(index) 

    }

    const _tabBarPress = (tabIndex) => {
        if (tabIndex == 3) {
            navigation.navigate("SignIn")
        }
        _handleIndexChange(tabIndex)
    }
    const _renderTabScene = BottomNavigation.SceneMap({
        home: () => <Home userData={userData["userData"]}/>,
        favorite: () => <Favorite userData={userData["userData"]} />,
    })

    return(
        <View style={{flex:1}}>
            <BottomNavigation
            navigationState={{index: tabBarIndex, routes: tabBarRoute}}
            onIndexChange={_handleIndexChange}
            renderScene={_renderTabScene}
            barStyle={{
                display: 'none',
            }}
            />
            <TabBar
                activeTab={tabBarIndex}
                onPress={(tabIndex) => { 
                    _tabBarPress(tabIndex)
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
    )
}

export default Main;