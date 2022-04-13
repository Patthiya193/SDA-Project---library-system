
import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";

import { bookItemStyles } from "../../screens/universalStyles";

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

export const Item = ({item, onPress}) =>{ 
    // console.log(item.bookObject)
    // let imageUri = blobToBase64(item.bookObject["coverImage"]);
    // console.log(imager)
    return (    
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        <Image source={{uri: `data:image/jpeg;base64,${item.bookObject["coverImage"]}`}} style={{width: 100, height: 150, paddingBottom:10}} />
        <View style={{justifyContent:'center'}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookAuthor}>{item.subtitle}</Text>
            <Text style={bookItemStyles.bookAuthor}>Status: {item.bookObject["curState"]}</Text>

        </View>
    </TouchableOpacity>
);}