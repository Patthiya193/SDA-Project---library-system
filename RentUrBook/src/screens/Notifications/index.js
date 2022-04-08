import React, { useState, useEffect } from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import { body } from "../universalSyles";

import { ItemDivider } from "../../components/render/itemDivider";
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

const Notifications = ({userData}) => {
    console.log("Notifications: current user", userData)
    const [favBook, setFavBook] = useState(userData["userData"]["favoriteBooks"])

    const renderBook = ({item, onPress}) => {
        return <Item item={item} onPress={console.log("Pressed")}/>
    }

    const flatlistHeader = () => {
        return (
            <View style={{
              width: "100%",
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Text style={styles.text}>The Book is now Available!</Text>
            </View>
          );
    }

    if (favBook) {
        return(
            <View style={body.background}>
                <View style={body.top}>
                    <Text style={body.title}>Notification</Text>
                </View>
                <View style={styles.body}>
                    <FlatList data={DATA} 
                        renderItem={renderBook}
                        ItemSeparatorComponent={ItemDivider}
                        ListHeaderComponent={flatlistHeader}
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
                    <Text style={body.title}>Notifications</Text>
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={styles.warnLabel}>Please login to use this feature.</Text>

                    </View>
                </View>
                
            </View>
        )

        
    }
}

export default Notifications;