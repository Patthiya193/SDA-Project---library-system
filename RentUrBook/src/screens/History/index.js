import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList, Pressable ,Dimensions} from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { body, searchBarStyle } from "../universalStyles";

import { renderTabBar } from "./renderTabBar";

import { ItemDivider } from "../../components/render/itemDivider"
import { Item } from "../../components/render/item";
import { OrderItem } from "../../components/render/orderItem"

import { TabView } from 'react-native-tab-view';
import { getAllBook, getBookById } from "../../network/bookService"
import { getAllOrder } from "../../network/orderService"
import { getuserById } from "../../network/userService"
import { CommonActions, StackActions, useFocusEffect } from "@react-navigation/core";


const History = ({userData, navigation}) => {
    // console.log("History: current user", userData)
    const [userType, setUserType] = useState(userData["userData"]["userType"])
    // console.log("type" , userType)
    const [orderData, setOrderData] = useState([])
    const [bookData, setBookData] = useState([])
    const [index, setIndex] = useState(0);


    const [routes] = useState([
        { key: 'ALL', title: 'All'},
        { key: 'BORROWING', title: 'Borrowing' },
        { key: 'RESERVING', title: 'Reserving' },
    ]);

    const renderBook = ({item, onPress}) => {                

        return <Item item={item} onPress={() => {
            if ( userType == "admin") {
                borrowButton = 'borrow'
            } else {
                borrowButton = "return"
            }
            navigation.dispatch( StackActions.replace("BookDetail", {bookParam: item["bookObject"], userData:userData["userData"], borrowButtonState: borrowButton}))
        }}/>
    }

    const renderOrder = ({item, onPress}) => {                

        return <OrderItem item={item} onPress={() => {
            if ( userType == "admin" )
            {// var fav = "not fav";
            // var borrowButton = item["bookObject"]["curState"]
            // console.log("item  +++++ press",item["bookObject"], userData["userData"])
            // if ( userData["userData"]["favoriteBooks"])
            //     {if (userData["userData"]["favoriteBooks"].includes(item["id"])) {
            //         fav = "fav"
            //     }
            //     if ( borrowButton == "reserved" && item["bookObject"]["reservedBy"] == userData["userData"]["id"]) {
            //         borrowButton = "return"
            //     } }
            // // navigation.dispatch( StackActions.popToTop())
            // navigation.dispatch( StackActions.replace("BookDetail", {bookParam: item["bookObject"], userData:userData["userData"], 
            // favorite:fav, borrowButtonState: borrowButton}))
            // // navigation.navigate("BookDetail", {bookParam: item["bookObject"], userData:userData["userData"], favorite:fav})}
        }}/>
    }

    const findOrderData = async () => {
        var temp = await getAllOrder()
        setOrderData(temp)
        var tempBook = await getAllBook()
        setBookData(tempBook)

    }
    
    
    // Only render the scene for 2 routes at each sides (performance purpose)
    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            return <View/>;
        }
        var displayData = [];
        if ( bookData)
        {
            if ( route["key"] == "RESERVING") {
                bookData.forEach(book => {
                    if (book["curState"] == "reserved"){
                        if ( userType == "admin" && book["reservedBy"] != 0) {
                            let sub = "reserved by " + book["reservedBy"]
                            displayData.push( 
                                {
                                    id: book["id"],
                                    title: book["bookName"],
                                    subtitle: sub,
                                    type: "1",
                                    bookObject: book
                                }
                            )
                        } else if (book["reservedBy"] == userData['userData']["id"]) {
                            displayData.push( 
                                {
                                    id: book["id"],
                                    title: book["bookName"],
                                    subtitle: "",
                                    type: "1",
                                    bookObject: book
                                }
                            )
                        }
                    } 
                })
            } 
        }
        if (orderData) 
        { if (route["key"] == "BORROWING") {
            orderData.forEach(order => {
                if (order["curState"] == "borrowing")
                {
                    if ( userType == "admin" || order["borrowerId"] == userData["userData"]["id"]) {
                    let stat = "Status: "+order["curState"]
                    let bDate = 'Borrowed: ' + order["borrowDate"]
                    displayData.push( 
                    {
                        id: order["id"],
                        title: order["bookName"],
                        borrowedBy: order["borrowerUsername"],
                        status: stat,
                        borrowDate: bDate,
                    }
                )}
                }
            })
            
        } else {
            orderData.forEach(order => {
                if ( userType == "admin" || order["borrowerId"] == userData["userData"]["id"]) {
                let stat = "Status: "+order["curState"]
                let bDate = 'Borrowed: ' + order["borrowDate"]
                let rDate = "Returned: " + order["returnDate"]
                displayData.push( 
                {
                    id: order["id"],
                    title: order["bookName"],
                    borrowedBy: order["borrowerUsername"],
                    status: stat,
                    borrowDate: bDate,
                    returnDate: rDate
                })}
            })
            
        }}
        if ( route["key"] == "RESERVING") {
            return <FlatList data={displayData} 
                renderItem={renderBook}
                ItemSeparatorComponent={ItemDivider}
                style={body.mainBody}/>;
        } else {
            return <FlatList data={displayData} 
            renderItem={renderOrder}
            ItemSeparatorComponent={ItemDivider}
            style={body.mainBody}/>;
        }
    };

    useFocusEffect(
        // Update the document title using the browser API
        React.useCallback(() => {
            findOrderData()
        }, [userData])    
    );

    if (userType) {
        return(
            <View style={body.background}>
            <View style={body.top}>
                <Text style={body.title}>History</Text>
            </View>
            <TabView style={{flex: 6.5}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
        )
    }
    else {
        return(
            <View style={body.background}>
                <View style={body.top}>
                    <Text style={body.title}>Notifications</Text>
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={styles.warnLabel}>Please login to use this feature.</Text>

                    </View>
                </View>
                
            </View>
        )

        
    }
}

export default History;