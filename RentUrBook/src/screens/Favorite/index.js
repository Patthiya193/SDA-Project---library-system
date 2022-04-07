import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";


const Favorite = ({userData}) => {
    console.log("Favorite: current user", userData)
    const [favBook, setFavBook] = useState(userData["favoriteBooks"])

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