import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalStyles";
import { CommonActions, StackActions } from "@react-navigation/core";

import { BookPic } from "./BookPic";
import { reserveBook, deleteBook } from "../../network/bookService"
import { addFav, removeFav } from "../../network/userService"

const BookDetail = ({navigation, route}) => {
    //console.log("Book data ", route.params)
    const [book, setBook] = useState(route.params["bookParam"])
    const [userData, setUserData] = useState(route.params["userData"])
    const [fav, setFav] = useState( route.params["favorite"])
    const [borrowButtonStatus, setBorrowButton] = useState( route.params["borrowButtonState"])

    const [favButtonColor, setFavButtonColor] = useState({"fav": "#FF8886", "not fav":"#A8AFB9"})
    const [borrowColor, setBorrowColor] = useState({"available": "#EF5DA8", "return":"#C1D1DB", "reserved":"#999999", "unavailable":"#999999"})
    const [borrowText, setBorrowText] = useState({"available": "Reserve", "return":"Cancel", "reserved":"Reserved", "unavailable":"Unavailable"})
    console.log("borrow", borrowButtonStatus)

    var clr = borrowColor[borrowButtonStatus]

    console.log("Book", book, userData)
    var author = "by "
    var isbn = "isbn: " + book["isbn"]

    book["authors"].forEach((a, i) => {
        if ( i == book["authors"].length - 1) {
            author = author + a
        }
        else {
            author = author + a + ", "
        }
    });

    const onPressBorrow = () => {
        if ( borrowButtonStatus != "unavailable" && borrowButtonStatus != "reserved") {
            reserveBook(book["id"],userData["id"], userData['username'])
            if (borrowButtonStatus == "available") {
                setBorrowButton("return")
    
            } else if (borrowButtonStatus == "return") {
                setBorrowButton("available")
            }
        }
        
        clr = borrowColor[borrowButtonStatus]
    }

    const onPressDelete = () => {
        Alert.alert(
            "Comfirm",
            "Are you really want to delete this book?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  deleteBook(book["id"])
                  navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))

              } }
            ]
          );    }

    const onPressEdit = () => {
        navigation.navigate("AddBook", {bookData:book, state:"edit",userData:userData})
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

                        <TouchableOpacity onPress={onPressHome} style={styles.iconContainerStyle}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}/>
                        </TouchableOpacity>

                        <Text style={body.title}>Book Detail</Text>
                    </View>

                </View>
                <BookPic image ={book["coverImage"]} />
            
                <View style={styles.mainBody}>
                    <View style={styles.bookContainer}>
        
                        {/* Book name */}
                        <Text style = {styles.bookName}>{book["bookName"]}</Text> 
                        {/* Book Author */}
                        <Text style = {styles.bookDetails}>{author}</Text> 
                        {/* ISBN number */}
                        <Text style = {styles.bookDetails}>{isbn}</Text>
                        
                    </View>
                
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Description:</Text> 
                            <Text style={styles.text}>{book["description"]}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {[styles.borrowButtonStyle, {backgroundColor: clr}]} 
                            onPress = {onPressBorrow}>
                            <Text style={styles.borrowText}>{borrowText[borrowButtonStatus]}</Text>
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
                    
                    <View style={styles.topContainer}>

                        <TouchableOpacity onPress={onPressHome} style={styles.iconContainerStyle}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}/>
                        </TouchableOpacity>

                        <Text style={body.title}>Book Detail</Text>
                    </View>
                    
                </View>
                <BookPic image ={book["coverImage"]} />
                <View style={styles.mainBody}>
                    <View style={styles.bookContainer}>
        
                        {/* Book name */}
                        <Text style = {styles.bookName}>{book["bookName"]}</Text> 
                        {/* Book Author */}
                        <Text style = {styles.bookDetails}>{author}</Text> 
                        {/* ISBN number */}
                        <Text style = {styles.bookDetails}>{isbn}</Text>
                        
                    </View>
                    
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Description:</Text> 
                            <Text style={styles.text}>{book["description"]}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {[styles.adminButton, {backgroundColor: '#76d938'}]} onPress = {onPressEdit}>
                                <Text style={styles.borrowText}>Edit</Text>
                        </Pressable>
                        <Pressable style = {[styles.adminButton, {backgroundColor: '#FF7974'}]} onPress = {onPressDelete}>
                                <Text style={styles.borrowText}>Delete</Text>
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

                    <TouchableOpacity onPress={onPressHome} style={styles.iconContainerStyle}>
                        <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}/>
                    </TouchableOpacity>
                    <Text style={body.title}>Book Detail </Text>
                </View>
            </View>
            <BookPic image ={book["coverImage"]} />
        
            <View style={styles.mainBody}>
                <View style={styles.bookContainer}>

                    {/* Book name */}
                    <Text style = {styles.bookName}>{book["bookName"]} </Text> 
                    {/* Book Author */}
                    <Text style = {styles.bookDetails}>{author}</Text> 
                    {/* ISBN number */}
                    <Text style = {styles.bookDetails}>{isbn}</Text>
                </View>
            
                <SafeAreaView style={styles.textContainer}>
                    <ScrollView style={styles.scrollView}>
                        {/* Book status */}
                        <Text style = {styles.bookStatus}>Description:</Text> 
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