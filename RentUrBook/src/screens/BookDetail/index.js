import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, Button, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalSyles";
import { CommonActions, StackActions } from "@react-navigation/core";

import { BookPic } from "./BookPic";
import { borrowBook } from "../../network/bookService"
import { addFav, removeFav } from "../../network/userService"

const BookDetail = ({navigation, route}) => {
    //console.log("Book data ", route.params)
    const [book, setBook] = useState(route.params["bookParam"])
    const [userData, setUserData] = useState(route.params["userData"])
    const [fav, setFav] = useState( route.params["favorite"])
    const [borrowButtonStatus, setBorrowButton] = useState( route.params["borrowButtonState"])

    const [favButtonColor, setFavButtonColor] = useState({"fav": "#FF8886", "not fav":"#A8AFB9"})
    const [borrowColor, setBorrowColor] = useState({"available": "#EF5DA8", "return":"#C1D1DB", "reserved":"#999999", "unavailable":"#AAAAA"})
    const [borrowText, setBorrowText] = useState({"available": "Borrow", "return":"Return", "reserved":"Reserved", "unavailable":"Unavailable"})
    console.log("borrow", borrowButtonStatus)

    var clr = borrowColor[borrowButtonStatus]

    console.log("Book", book, userData)
    var author = "by "
    book["authors"].forEach((a, i) => {
        if ( i == book["authors"].length - 1) {
            author = author + a
        }
        else {
            author = author + a + ", "

        }
    })
    const onPressBorrow = () => {
        if ( borrowButtonStatus != "unavailable" && borrowButtonStatus != "reserved") {
            borrowBook(book["id"],userData["id"])
            if (borrowButtonStatus == "available") {
                setBorrowButton("return")
    
            } else if (borrowButtonStatus == "return") {
                setBorrowButton("available")
            }
        }
        
        clr = borrowColor[borrowButtonStatus]
    }
    const addFavorites = () => {
        if ( fav == "fav") {
            setFav("not fav")
            let ind = userData["favoriteBooks"].indexOf(book["id"])
            userData["favoriteBooks"].splice(ind, 1)
            removeFav( userData["id"],book["id"])

        }
        else {
            setFav("fav")
            userData["favoriteBooks"].push(book["id"])
            addFav( userData["id"],book["id"])

        }
        console.log("type: ", typeof book["id"],typeof userData["id"])

    }
    
    const onPressHome = () => {
        // navigation.dispatch( StackActions.popToTop())
        navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))
    }

    if (userData["userType"] == "normal" ){
        console.log(clr)
        return(
            <View style={body.background}>
            <View style={styles.top}>
                
                <View style={styles.topContainer}>

                <TouchableOpacity onPress={onPressHome}>
                        <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStcyle}/>
                    </TouchableOpacity>
                    <Text style={body.title}>Book Detail </Text>
                </View>
            </View>
            <BookPic />
            
            <View style={styles.mainBody}>
                <View style={styles.bookContainer}>
    
                    {/* Book name */}
                    <Text style = {styles.bookName}>{book["bookName"]} </Text> 
                    {/* Book Author */}
                    <Text style = {styles.bookAuthor}> {author} </Text> 
                    
                    
                </View>
                
                <SafeAreaView style={styles.textContainer}>
                    <ScrollView style={styles.scrollView}>
                        {/* Book status */}
                        <Text style = {styles.bookStatus}> Description: </Text> 
                        <Text style={styles.text}>{book["description"]}</Text>
                    </ScrollView>
                </SafeAreaView>
                <View style = {styles.bottomContainer}>
                <Pressable style = {{alignItems: 'center',
            // justifyContent: 'center',
            width: Dimensions.get('window').width * 0.65,
            paddingVertical: 18,
            paddingHorizontal: 80,
            borderRadius: 16,
            backgroundColor: clr,
            marginTop: 15,
            marginBottom: 15, 
            right: 30}} onPress = {onPressBorrow}>
                            <Text style={styles.borrowText}> {borrowText[borrowButtonStatus]} </Text>
                    </Pressable>
                    <TouchableOpacity onPress={() => addFavorites()}>
                    <FontAwesomeIcon icon={ faHeart } color={favButtonColor[fav]} size={35} style={{margin:5}}/>
                    </TouchableOpacity>

    
                </View>
                
                
            </View>
            
    
    
       
        </View>
        )}

    else if (userData["userType"] == "admin" ){
            return(
                <View style={body.background}>
                <View style={styles.top}>
                        
                        <Text style={body.title}>Book Detail </Text>
                </View>
                <BookPic />
                
                <View style={styles.mainBody}>
                    <View style={styles.bookContainer}>
        
                        {/* Book name */}
                        <Text style = {styles.bookName}>{book["bookName"]} </Text> 
                        {/* Book Author */}
                        <Text style = {styles.bookAuthor}> {author} </Text> 
                        
                        
                    </View>
                    
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}> Description: </Text> 
                            <Text style={styles.text}>{book["description"]}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {styles.borrowButtonStyleNoFav} onPress = {onPressBorrow}>
                                <Text style={styles.borrowText}> Edit </Text>
                        </Pressable>
    
        
                    </View>
                    
                    
                </View>
                
        
        
           
            </View>
            )}
    else 
    {return(
        <View style={body.background}>
            <View style={styles.top}>
                
                <View style={styles.topContainer}>

                <TouchableOpacity onPress={onPressHome}>
                        <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStcyle}/>
                    </TouchableOpacity>
                    <Text style={body.title}>Book Detail </Text>
                </View>
            </View>
        <BookPic />
        
        <View style={styles.mainBody}>
            <View style={styles.bookContainer}>

                {/* Book name */}
                <Text style = {styles.bookName}>{book["bookName"]} </Text> 
                {/* Book Author */}
                <Text style = {styles.bookAuthor}> {author} </Text> 
                
                
            </View>
            
            <SafeAreaView style={styles.textContainer}>
                <ScrollView style={styles.scrollView}>
                    {/* Book status */}
                    <Text style = {styles.bookStatus}> Description: </Text> 
                    <Text style={styles.text}>{book["description"]}</Text>
                </ScrollView>
            </SafeAreaView>
            
            
            
            
        </View>
        


   
    </View>

    )}
}

export default BookDetail;

//HOME
/* */
//                    Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.
/*<View style = {styles.bottomContainer}>
                <Pressable style = {styles.borrowButtonStyleNoFav} onPress = {onPressBorrow}>
                        <Text style={styles.borrowText}> Borrow </Text>
                </Pressable>
            </View> */