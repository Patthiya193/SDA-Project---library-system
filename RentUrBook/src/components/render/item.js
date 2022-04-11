
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BookIcon } from "../../screens/Home/bookIcon";

import { bookItemStyles } from "../../screens/universalStyles";

export const Item = ({item, onPress}) => (
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        <BookIcon/>
        <View style={{justifyContent:'center'}}>
            <Text style={bookItemStyles.bookName}>{item.title}</Text>
            <Text style={bookItemStyles.bookAuthor}>{item.subtitle}</Text>
        </View>
    </TouchableOpacity>
);