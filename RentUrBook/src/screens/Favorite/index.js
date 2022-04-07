import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";


const Favorite = ({userData}) => {
    console.log("Favorite: current user", userData)
    const [favBook, setFavBook] = useState(userData["userData"]["favoriteBooks"])

    if (favBook) {
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
    else {
        return(
            <View style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.title}>Favorite</Text>
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={styles.warnLabel}>Please login to use this feature.</Text>

                    </View>
                </View>
                
            </View>
        )

        
    }
}

export default Favorite;