import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList, TouchableHighlight, Alert } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faPencil, faUnlock } from '@fortawesome/free-solid-svg-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { ItemDivider} from "./itemDivider"
import { styles } from "./styles";
import { Item } from "./item"
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import { CommonActions, StackActions } from "@react-navigation/core";

const Account = ({navigation, userData}) => {
    const [user, setUser] = useState(userData['userData'])
    console.log("Account: current user", user)

    const onPressLogin = () => {
        navigation.navigate("SignIn")
    }

    const onPressSignUp = () => {
        navigation.navigate("Register")
    }

    const onPressLogout = () => {
        Alert.alert(
            "Log out",
            "Are you sure you want to logout?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                navigation.dispatch( StackActions.replace('MainGuest', {"userData":{}}))
              } }
            ]
          );
    }
    

    const normalDisplay = [{
        id: "1",
        title: "Logout",
        type: "1",
        key: "logout",
        icon: faUnlock,
        onPress: onPressLogout
    },]

    const adminDisplay = [{
        id: "2",
        title: "Add book",
        type: "1",
        key: "addbook",
        icon: faPencil,
        onPress: () => {
            Alert.alert("add book")
        }
    },{
        id: "1",
        title: "Logout",
        type: "1",
        key: "logout",
        icon: faUnlock,
        onPress: onPressLogout
    }]

    const renderMenu = ({item}) => {
        return <Item item={item} onPress={item.onPress} />
    }

    if (user["username"]) {
        return(
            <View style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.nameText}>{user["firstName"]} {user["lastName"]}</Text>
                </View>
                <View style={{flex:3.5}}>
                    <FlatList style={styles.mainBody}
                    data={user["userType"] == "admin" ? (adminDisplay) : (normalDisplay)}
                    renderItem={renderMenu}
                    ItemSeparatorComponent={ItemDivider}
                    />
                </View>
                
            </View>
    )
    }
    else {
        return(
            <View style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.nameText}>Account</Text>

                </View>
                <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>

                    <Pressable onPress={ onPressLogin
                        // console.log(data);
                     } style={({pressed}) => [{backgroundColor: pressed ? '#AAAAAA':'#FFFFFF'}, styles.loginButtonStyle]}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                    <Pressable onPress={ onPressSignUp
                        // console.log(data);
                     } style={({pressed}) => [{backgroundColor: pressed ? '#AAAAAA':'#FFFFFF'}, styles.loginButtonStyle]}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </Pressable>
                </View>
                
                {/* <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={styles.warnLabel}>Please login to use this feature.</Text>

                    </View> */}
            </View>
        )

        
    }
}

export default Account;