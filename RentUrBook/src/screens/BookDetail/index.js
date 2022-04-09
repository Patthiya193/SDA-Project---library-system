import React, { useState } from "react";

import { View, ScrollView, Text, Button, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalSyles";

import { BookPic } from "./BookPic";



const BookDetail = ({navigation, route}) => {

    const onPressBorrow = async () => {
        
        Alert.alert("Borrow", "Please pick the book up within today .", [{text: "OK"}])
        return
    }
    const addFavoritos = async () => {
        console.log("Add to favorite")
    }

    
    return(
        <View style={body.background}>
        <View style={styles.top}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => addFavoritos()}>
                    <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={35} style={styles.iconStyle}/>
                </TouchableOpacity>
                <Text style={body.title}>Book Detail </Text>
            </View>        
        </View>
        <BookPic />
        
        <View style={styles.mainBody}>
            <View style={styles.bookContainer}>

                {/* Book name */}
                <Text style = {styles.bookName}> Harry Potter  </Text> 
                {/* Book Author */}
                <Text style = {styles.bookAuthor}> J.K. Rowling </Text> 
                {/* Book status */}
                <Text style = {styles.bookStatus}> Book Status : </Text> 
                
            </View>
            
            <SafeAreaView style={styles.textContainer}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                    Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <View style = {styles.bottomContainer}>
                <Pressable style = {styles.borrowButtonStyle} onPress = {onPressBorrow}>
                        <Text style={styles.borrowText}> Borrow </Text>
                </Pressable>
                <TouchableOpacity onPress={() => addFavoritos()}>
                    <FontAwesomeIcon icon={ faHeart } color='#A8AFB9' size={35} style={{margin:5}}/>
                </TouchableOpacity>


            </View>
            
            
        </View>
        


   
    </View>

    )
}

export default BookDetail;