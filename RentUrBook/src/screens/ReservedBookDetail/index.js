import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

// import { styles } from "./styles";
import { styles } from "../BookDetail/styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalStyles";
import { CommonActions, StackActions } from "@react-navigation/core";

import { BookPic } from "./BookPic";
import { reserveBook } from "../../network/bookService"
import { addFav, removeFav } from "../../network/userService"
import { createOrder } from '../../network/orderService'

const ReservedBookDetail = ({navigation, route}) => {
    console.log("Reserved Book data ", route.params)
    const [book, setBook] = useState(route.params["bookParam"])
    const [userData, setUserData] = useState(route.params["userData"])
    const [contactNum, setContactNumber] = useState(route.params["contactNumber"])
    const [borrowButtonStatus, setBorrowButton] = useState( route.params["borrowButtonState"])

    const [borrowColor, setBorrowColor] = useState({"borrow": "#EF5DA8", "return":"#C1D1DB"})
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
    })
    const onPressBorrow = () => {
        if ( borrowButtonStatus == "borrow") {
            let currentdate = new Date()
            let bDate =  currentdate.getFullYear() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getDate() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

            createOrder({
                bookId : book["id"],
                borrowedBy : book["reserverId"],
                bookName  : book["bookName"],
                borrowDate : bDate,
                curState : "borrowing",
                returnDate : "",
                contactNumber: contactNum,
                borrowerUsername : book["reserverName"],
            })
            onPressHome()
        } else {
            reserveBook(book["id"],userData["id"],userData["username"])
            onPressHome()
        }
        
        clr = borrowColor[borrowButtonStatus]
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
                        <Text style = {styles.bookAuthor}>{author}</Text> 
                        
                        
                    </View>
                
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Description:</Text> 
                            <Text style={styles.text}>{book["description"]}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {{alignItems: 'center',
                            justifyContent: 'center',
                            width: Dimensions.get('window').width * 0.65,
                            paddingVertical: 18,
                            paddingHorizontal: 80,
                            borderRadius: 16,
                            backgroundColor: clr,
                            marginTop: 15,
                            marginBottom: 15,
                            marginRight: 30, }} onPress = {onPressBorrow}>
                                    <Text style={styles.borrowText}>Cancel</Text>
                        </Pressable>
                        

                    </View>        
                
                </View>
            
            </View>
        )}
//ADMIN
    else {
        return(
            <View style={body.background}>
                <View style={styles.top}>
                    
                    <View style={styles.topContainer}>

                        <TouchableOpacity onPress={onPressHome}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStyle}/>
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
                        <Text style = {styles.bookAuthor}>{author}</Text> 
                        
                    </View>
                    
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Reserved by:</Text> 
                            <Text style={styles.text}>{book["reserverName"]}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {{alignItems: 'center',
                            justifyContent: 'center',
                            width: Dimensions.get('window').width * 0.75,
                            paddingVertical: 18,
                            paddingHorizontal: 80,
                            borderRadius: 16,
                            backgroundColor: clr,
                            marginTop: 15,
                            marginBottom: 15,
                            marginRight: 30, }} onPress = {onPressBorrow}>
                                <Text style={styles.borrowText}>Allow Borrowing</Text>
                        </Pressable>
    
                    </View>    
                    
                </View>
            
            </View>
        )}
}

export default ReservedBookDetail;

//HOME
/* */
//                    Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.
/*<View style = {styles.bottomContainer}>
                <Pressable style = {styles.borrowButtonStyleNoFav} onPress = {onPressBorrow}>
                        <Text style={styles.borrowText}> Borrow </Text>
                </Pressable>
            </View> */