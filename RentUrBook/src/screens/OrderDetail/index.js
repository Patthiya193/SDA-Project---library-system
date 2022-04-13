import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { body, bookItemStyles } from "../universalStyles";
import { CommonActions, StackActions } from "@react-navigation/core";

import { BookPic } from "./BookPic";
import { reserveBook } from "../../network/bookService"
import { addFav, removeFav } from "../../network/userService"
import { returnBook} from "../../network/orderService"

const OrderDetail = ({navigation, route}) => {
    //console.log("Book data ", route.params)
    const [order, setOrder] = useState(route.params["orderParam"])
    const [userData, setUserData] = useState(route.params["userData"])

    const onPressReturnBook = () => {
        returnBook(order["id"])
        onPressHome()
    }

    const onPressHome = () => {
        // navigation.dispatch( StackActions.popToTop())
        navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))
    }

    if ( order["curState"] == "borrowing") {
        return(
            <View style={body.background}>
                <View style={styles.top}>
                    
                    <View style={styles.topContainer}>
    
                        <TouchableOpacity onPress={onPressHome}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStyle}/>
                        </TouchableOpacity>
    
                        <Text style={body.title}>Order Detail</Text>
                    </View>
                    
                </View>
                <BookPic image ={book["coverImage"]} />
                <View style={styles.mainBody}>
                    <View style={styles.bookContainer}>
        
                        {/* Book name */}
                        <Text style = {styles.bookName}>{order["bookName"]}</Text> 
                        
                    </View>
                    
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Borrowed by: {order["borrowerUsername"]}</Text> 
                            <Text style={styles.text}>Status: {order["curState"]}</Text>
                            <Text style={styles.text}>Borrow Date: {order["borrowDate"]}</Text>
                            <Text style={styles.text}>Contact: {order["contactNumber"]}</Text>

                        </ScrollView>
                    </SafeAreaView>
                    <View style = {styles.bottomContainer}>
                        <Pressable style = {styles.borrowButtonStyleNoFav} onPress = {onPressReturnBook}>
                                <Text style={styles.borrowText}>Return Book</Text>
                        </Pressable>
    
                    </View>    
                    
                </View>
            
            </View>
        )
    }else {
        return(
            <View style={body.background}>
                <View style={styles.top}>
                    
                    <View style={styles.topContainer}>
    
                        <TouchableOpacity onPress={onPressHome}>
                            <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStyle}/>
                        </TouchableOpacity>
    
                        <Text style={body.title}>Order Detail</Text>
                    </View>
                    
                </View>
                <BookPic image ={book["coverImage"]} />
                <View style={styles.mainBody}>
                    <View style={styles.bookContainer}>
        
                        {/* Book name */}
                        <Text style = {styles.bookName}>{order["bookName"]}</Text> 
                        {/* Book Author */}
                        
                    </View>
                    
                    <SafeAreaView style={styles.textContainer}>
                        <ScrollView style={styles.scrollView}>
                            {/* Book status */}
                            <Text style = {styles.bookStatus}>Borrowed by: {order["borrowerUsername"]}</Text> 
                            <Text style={styles.text}>Status: {order["curState"]}</Text>
                            <Text style={styles.text}>Borrow Date: {order["borrowDate"]}</Text>
                            <Text style={styles.text}>Return Date: {order["returnDate"]}</Text>
                            <Text style={styles.text}>Contact: {order["contactNumber"]}</Text>

                        </ScrollView>
                    </SafeAreaView> 
                    
                </View>
            
            </View>
        )
    }
    
    
}

export default OrderDetail;