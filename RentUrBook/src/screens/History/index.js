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
import { getUserById } from "../../network/userService"
import { CommonActions, StackActions, useFocusEffect } from "@react-navigation/core";


const History = ({userData, navigation}) => {
    // console.log("History: current user", userData)
    const [userType, setUserType] = useState(userData["userData"]["userType"])
    // console.log("type" , userType)
    const [orderData, setOrderData] = useState([])
    const [bookData, setBookData] = useState([])
    const [index, setIndex] = useState(0);
    //const [orderContact, setOrderContact] = useState([])
    const [reserveContact, setReserveContact] = useState([])

    const [routes] = useState([
        { key: 'ALL', title: 'All'},
        { key: 'BORROWING', title: 'Borrowing' },
        { key: 'RESERVING', title: 'Reserving' },
    ]);

    const renderBook = ({item, onPress}) => {                

        return <Item item={item} onPress={ async () => {
            if ( userType == "admin") {
                borrowButton = 'borrow'
            } else {
                borrowButton = "return"
            }
            let temp = await getUserById(item["bookObject"]["reserverId"])
            console.log("temp rees", temp)
            navigation.dispatch( StackActions.replace("ReservedBookDetail", {contactNumber: temp["contactNumber"], bookParam: item["bookObject"], userData:userData["userData"], borrowButtonState: borrowButton}))
        }}/>
    }

    const renderOrder = ({item, onPress}) => {                

        return <OrderItem item={item} onPress={() => {
            if ( userType == "admin" )
            {
                navigation.dispatch( StackActions.replace("OrderDetail", {orderParam: item["orderObject"], userData:userData["userData"]}))
            }
        }}/>
    }

    const findOrderData = async () => {
        var temp = await getAllOrder()
        setOrderData(temp)
        //var tempCon = []
        /*orderData.forEach(order => {
            let borrower = getuserById(order["borrowerId"])
            let orderId = order["id"]
            tempCon.push({ orderId :borrower["contactNumber"]})
        })
        setOrderContact(tempCon)*/

        var tempBook = await getAllBook()
        setBookData(tempBook)
        var tempResCon = {}
        tempBook.forEach(async book=> {
            if (book["curState"]=="reserved")
            {    console.log("\nreserverId", book["reserverId"])
                let borrower = await getUserById(book["reserverId"])
                console.log('borrower:',borrower)
                let bookId = book["id"]
                tempResCon[bookId] = borrower["contactNumber"]}
        })
        console.log('rescon', tempResCon)
        setReserveContact(tempResCon)

    }
    
    
    // Only render the scene for 2 routes at each sides (performance purpose)
    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            return <View/>;
        }
        var displayData = [];
        if ( bookData && route["key"] == "RESERVING")
        {
            if ( route["key"] == "RESERVING") {
                console.log("reserveContact", reserveContact)
                bookData.forEach(book => {
                    if (book["curState"] == "reserved"){
                        if ( userType == "admin" && book["reserverId"] != 0) {
                            let sub = "reserved by " + book["reserverName"]
                            console.log("cont with book id",reserveContact[book["id"].toString()])

                            displayData.push( 
                                {
                                    id: book["id"],
                                    title: book["bookName"],
                                    subtitle: sub,
                                    contactNumber: reserveContact[book["id"].toString()],
                                    type: "1",
                                    bookObject: book
                                }
                            )
                        } else if (book["reserverId"] == userData['userData']["id"] && book["reserverId"] != 0) {
                            console.log("cont with book id",reserveContact[book["id"].toString()])

                            displayData.push( 
                                {
                                    id: book["id"],
                                    title: book["bookName"],
                                    contactNumber: reserveContact[book["id"].toString()],
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
        if (orderData&& route["key"] != "RESERVING") { 
            if (route["key"] == "BORROWING") {
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
                            contactNumber: order["contactNumber"],
                            orderObject: order
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
                        returnDate: rDate,
                        contactNumber: order["contactNumber"],
                        orderObject: order
                    })}
                })
                
            }
        }
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