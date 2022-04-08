import React, { useState, useEffect } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import { body } from "../universalSyles";

import { ItemDivider } from "../../components/render/itemDivider"
import { Item } from "../../components/render/item";

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

const Favorite = ({userData}) => {
    console.log("Favorite: current user", userData)
    const [favBook, setFavBook] = useState(userData["userData"]["favoriteBooks"])

    const renderBook = ({item, onPress}) => {
        return <Item item={item} onPress={console.log("Pressed")}/>
    }

    if (favBook) {
        return(
            <View style={body.background}>
                <View style={body.top}>
                    <Text style={body.title}>Favorite</Text>
                </View>
                <View style={{flex: 4.5}}>
                    <FlatList data={DATA} 
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