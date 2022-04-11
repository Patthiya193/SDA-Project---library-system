
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";

import { bookItemStyles } from "../../screens/universalStyles";

export const OrderItem = ({item, onPress}) => (
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        <BookIcon/>
        <View style={{justifyContent:'center'}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookAuthor}>Borrowed by: {item.borrowedBy}</Text>
            <Text style={bookItemStyles.bookAuthor}>{item.status}</Text>
            <Text style={bookItemStyles.bookAuthor}>{item.borrowDate}</Text>
            <Text style={bookItemStyles.bookAuthor}>{item.returnDate}</Text>

        </View>
    </TouchableOpacity>
);