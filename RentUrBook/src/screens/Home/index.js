import React, { useState, useEffect } from "react";

import { View, Text, TextInput, FlatList, Pressable ,Dimensions} from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { body, searchBarStyle } from "../universalSyles";

import { renderTabBar } from "./renderTabBar";

import { ItemDivider } from "../../components/render/itemDivider"
import { Item } from "../../components/render/item";

import { TabView } from 'react-native-tab-view';
import { getAllBook } from "../../network/bookService"
import { CommonActions, StackActions } from "@react-navigation/core";

//Temporary - delete when implement api
const DATA = [{
    id: "1",
    title: "First item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "2",
    title: "Second item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "3",
    title: "Third item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "4",
    title: "Forth item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "5",
    title: "Fifth item",
    subtitle: "subtitle",
    type: "1",
},
]

const Home = ({navigation, route, userData}) => {
    //console.log('Home: current user',userData)
    const [bookData, setBookData] = useState([])
    const [bookDisplayData, setBookDisplayData] = useState([])

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'ALL', title: 'All'},
        { key: 'ART', title: 'Art' },
        { key: 'CARTOON', title: 'Cartoon' },
        { key: 'COOKING', title: 'Cooking' },
        { key: 'EDUCATION', title: 'Education' },
        { key: 'HEALTH', title: 'Health' },
        { key: 'HISTORY', title: 'History' },
        { key: 'MAGAZINE', title: 'Magazine'},
        { key: 'NOVEL', title: 'Novel' },
        { key: 'TECH', title: 'Technology' },
        { key: 'TRAVEL', title: 'Travel' },
    ]);

    const renderBook = ({item, onPress}) => {                

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

    const findBookData = async () => {
        var temp = await getAllBook()
        setBookData(temp)
    }
    
    
    // Only render the scene for 2 routes at each sides (performance purpose)
    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            // console.log(index)
            return <View/>;
        }



        var displayData = [];
        if ( bookData)
        {
                bookData.forEach(book => {
                    if ( route["key"] == "ALL" || book["genre"].includes(route["key"]))
                    {let sub = "by "
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
                    )}
                })

                
            }
        // setBookDisplayData(displayData)

        return <FlatList data={displayData} 
                renderItem={renderBook}
                ItemSeparatorComponent={ItemDivider}
                style={body.mainBody} 
                />;
    };

    useEffect(() => {
        // Update the document title using the browser API
        findBookData()
    });

    return(
        <View style={body.background}>
            <View style={body.top}>
                <Text style={body.title}>Home</Text>
                <View style={searchBarStyle.topContainer}>
                    <View style={searchBarStyle.inputContainer}>
                        <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                        <TextInput placeholder='Search for books' style={searchBarStyle.textInput} placeholderTextColor='#A8AFB9' clearButtonMode="while-editing"/>
                    </View>
                    <Pressable onPress={() => console.log("search") } 
                        style={({pressed}) => [{backgroundColor: pressed ? '#8185eb':'#ffffff'}, searchBarStyle.searchButton]}>
                        <FontAwesomeIcon icon={ faSearch } color='#6C70EB' size={24}  />
                    </Pressable>
                </View>
            </View>
            <TabView style={{flex: 4}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

export default Home;