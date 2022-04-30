
import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";

import { bookItemStyles } from "../../screens/universalStyles";

export const OrderItem = ({item, onPress}) => (
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        {/* <Image source={{uri: `data:image/jpeg;base64,${item.bookObject["coverImage"]}`}} style={{width: 100, height: 150, paddingBottom:10}} /> */}
        <View style={{justifyContent:'center'}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookDetails}>Borrowed by: {item.borrowedBy}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.status}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.borrowDate}</Text>
            <Text style={bookItemStyles.bookDetails}>{item.returnDate}</Text>

        </View>
    </TouchableOpacity>
);