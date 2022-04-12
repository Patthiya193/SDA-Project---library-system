import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, TextInput, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse, faAddressCard, faPencil, faUserEdit, faBookOpen} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalStyles";
import { CommonActions, StackActions } from "@react-navigation/core";

const AddBokk = () => {
    const [BookTitle, SetBookTitle] = useState("");
    const [bookAuthor, SetBookAuthor] = useState("");
    const [BookDes, setBookDes] = useState("");

    const onPressHome = () => {
        // navigation.dispatch( StackActions.popToTop())
        navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))
    }

    const onPressAdd = () => {
        Alert.alert(
            "Comfirm",
            "Click OK to add the book.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }

    const onPressAddImg = () => {
        console.log("add img pressed")
    }
    return(
        <View style={body.background}>
                <View style={styles.top}>
                    
                    <View style={styles.topContainer}>

                        <TouchableOpacity onPress={onPressHome}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStyle}/>
                        </TouchableOpacity>

                        <Text style={body.title}>Add Book</Text>
                    </View>
                    
                </View>
        
                
                <KeyboardAvoidingView behavior={"padding"} style={styles.mainBody}>
                <View style={styles.mainBody}>
                <Pressable style = {styles.buttonStyle} onPress = {onPressAddImg}>
                                <Text style={styles.btnText}>Add Image</Text>
                        </Pressable>

                    <View style={styles.inputContainer}>
                        <FontAwesomeIcon icon={ faPencil } color='#A8AFB9' size={24} style={{margin:5}}/>
                        <TextInput placeholder='Book Title' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                        onChangeText={newBookTitle => {
                            let value = newBookTitle
                            value = value.replace(/[^a-z0-9_]/gi, "")
                            SetBookTitle(value)
                        }} 
                        value={BookTitle} />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesomeIcon icon={ faUserEdit } color='#A8AFB9' size={24} style={{margin:5}}/>
                        <TextInput placeholder='Author' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                        onChangeText={newBookAuthor => {
                            let value = newBookAuthor
                            value = value.replace(/[^a-z0-9_]/gi, "")
                            SetBookAuthor(value)
                        }} 
                        value={bookAuthor} />
                    </View>
                    <View style={styles.desContainer}>
                        <FontAwesomeIcon icon={ faBookOpen } color='#A8AFB9' size={24} style={{margin:5}}/>
                        <TextInput placeholder='Description' style={styles.destextInput} placeholderTextColor='#A8AFB9' 
                        multiline={true}
                        numberOfLines={100}
                        onChangeText={newBookDes => {
                            let value = newBookDes
                            //value = value.replace(/[^a-z0-9_]/gi, "")
                            setBookDes(value)
                        }} 
                        value={BookDes} />
                    </View>
                </View>

                <View style = {styles.bottomContainer}>
                        <Pressable style = {styles.addbuttonStyle} onPress = {onPressAdd}>
                                <Text style={styles.btnText}>Add Book</Text>
                        </Pressable>
    
                    </View>   
               
        
               
            </KeyboardAvoidingView >
                    
                  
                 
                    
                </View>
            
            
        
    );
}
export default AddBokk;