
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";
import { getBookById } from "../../network/bookService";

import { bookItemStyles } from "../../screens/universalStyles";

export const OrderItem = ({item, onPress}) => 
     {
         const [image, setImage] = useState(null)
    useEffect(() => {
        getBookById(item.bookId)
        .then(book => setImage(book["coverImage"])
    ,[])
        
    })(
        <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        { image ? (<Image source={{uri: `data:image/jpeg;base64,${image}`}} style={{width: 100, height: 150, paddingBottom:10}} />) : 
        (<></>)}
        <View style={{justifyContent:'center'}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookDetails}>Borrowed by: {item.borrowedBy}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.status}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.borrowDate}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.returnDate}</Text>

        </View>
    </TouchableOpacity>
    )
    
};