import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList, TouchableHighlight, Alert } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faPencil, faUnlock } from '@fortawesome/free-solid-svg-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { ItemDivider} from "../../components/render/itemDivider"
import { styles } from "./styles";
import { Item } from "./item"
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import { CommonActions, StackActions } from "@react-navigation/core";

const Account = ({navigation, userData}) => {
    const [user, setUser] = useState(userData['userData'])
    // console.log("Account: current user", user)

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
            navigation.navigate("AddBook", {userData:user, state:"add",bookData:{ bookName:"", authors:[''], description:'', coverImage:''}})
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

    var showFirstName = ""
    var showLastName = ""

    if (user["username"]) {
        if (user["firstName"].length + user["lastName"].length > 13) {
            if (user["firstName"].length > 10) {
                showFirstName = user["firstName"].substring(0,12 )+"..."
            }
            else {
                showFirstName = user["firstName"]
                showLastName = user["lastName"][0].toUpperCase()+"."
            }
        } else {
            showFirstName = user["firstName"]
            showLastName = user["lastName"]
        }
        return(
            <View style={styles.background}>
                <View style={styles.top}>
                    <View style={styles.rowText}>
                        <Text style={styles.nameText}>{showFirstName} </Text>
                        <Text style={styles.nameText}>{showLastName}</Text>
                    </View>
                    <View style={styles.rowText}>
                        <Text style={styles.idText}>ID: {user["id"]}</Text>
                        <Text style={styles.idText}>Username: {user["username"]}</Text>
                    </View>
                    <View style={styles.rowText}>
                        <Text style={styles.idText}>Contact: {user["contactNumber"]}</Text>
                    </View>
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
                <View style={styles.nonUserTop}>
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