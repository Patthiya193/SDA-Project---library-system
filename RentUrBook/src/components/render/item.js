
import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";

import { bookItemStyles } from "../../screens/universalStyles";

export const Item = ({item, onPress}) =>{ 
    // console.log(item.bookObject)
    // let imageUri = blobToBase64(item.bookObject["coverImage"]);
    // console.log(imager)
    return (    
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        <Image source={{uri: `data:image/jpeg;base64,${item.bookObject["coverImage"]}`}} style={{width: 100, height: 150, paddingBottom:10}} />
        <View style={{justifyContent:'center', paddingLeft: 15, paddingRight: 15}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.subtitle}</Text>
            <Text style={bookItemStyles.bookDetails}>isbn: {item.isbn}</Text>
            <Text style={bookItemStyles.bookDetails}>Status: {item.bookObject["curState"]}</Text>
        </View>
    </TouchableOpacity>
);}