import React, { useState, useEffect } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import { body } from "../universalSyles";

import { ItemDivider } from "../../components/render/itemDivider"
import { Item } from "../../components/render/item";
import { getFavBook } from "../../network/userService"
import { CommonActions, StackActions } from "@react-navigation/core";

const Favorite = ({navigation, userData}) => {
    console.log("Favorite: current user", userData)
    const [favBook, setFavBook] = useState([])

    const renderBook = ({item, onPress}) => {                
        // console.log('itemitem)
        return <Item item={item} onPress={() => {
            var fav = "not fav";
            var borrowButton = item["bookObject"]["curState"]
            console.log("item  +++++ press",item["bookObject"], userData["userData"])
            if ( userData["userData"]["favoriteBooks"])
                {if (userData["userData"]["favoriteBooks"].includes(item["id"])) {
                    fav = "fav"
                }
                if ( borrowButton == "reserved" && item["bookObject"]["borrowedBy"] == userData["userData"]["id"]) {
                    borrowButton = "return"
                } }
            // navigation.dispatch( StackActions.popToTop())
            navigation.dispatch( StackActions.replace("BookDetail", {bookParam: item["bookObject"], userData:userData["userData"], 
            favorite:fav, borrowButtonState: borrowButton}))
            // navigation.navigate("BookDetail", {bookParam: item["bookObject"], userData:userData["userData"], favorite:fav})
        }}/>
    }

    const findFavBook = async () => {
        var temp = await getFavBook(userData["userData"]["id"])
        // console.log('fav book',temp)

        setFavBook(temp)
    }

    

    useEffect(() => {
        // Update the document title using the browser API
        findFavBook()
    });

    if (userData["userData"]["favoriteBooks"]) {
        var displayData = [];
        if ( favBook)
        {
                favBook.forEach(book => {
                    let sub = "by "
                    book["authors"].forEach((author, i) => {
                        if ( i == book["authors"].length - 1) {
                            sub = sub + author
                        }
                        else {
                            sub = sub + author + ", "

                        }
                    })
                    displayData.push( 
                        {
                            id: book["id"],
                            title: book["bookName"],
                            subtitle: sub,
                            type: "1",
                            bookObject: book
                        }
                    )
                })

                
            }
        return(
            <View style={body.background}>
                <View style={body.top}>
                    <Text style={body.title}>Favorite</Text>
                </View>
                <View style={{flex: 4.5}}>
                    <FlatList data={displayData} 
                        renderItem={renderBook}
                        ItemSeparatorComponent={ItemDivider}
                        style={body.mainBody} 
                    />
                </View>
            </View>
        )
    }
    else {
        return(
            <View style={body.background}>
                <View style={body.top}>
                    <Text style={body.title}>Favorite</Text>
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={styles.warnLabel}>Please login to use this feature.</Text>
                    </View>
                </View>
                
            </View>
        )
    }

}

export default Favorite;