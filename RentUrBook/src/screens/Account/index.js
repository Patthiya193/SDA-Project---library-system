import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { styles } from "./styles";


const Account = ({navigation, userData}) => {
    const [user, setUser] = useState(userData['userData'])
    console.log("Account: current user", user)

    const onPressLogin = () => {
        navigation.navigate("SignIn")
    }

    const onPressSignUp = () => {
        navigation.navigate("Register")
    }

    if (user["username"]) {
        return(
            <View style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.nameText}>{user["firstName"]} {user["lastName"]}</Text>
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