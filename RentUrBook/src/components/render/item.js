
import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { bookItemStyles } from "../../screens/universalSyles";

export const Item = ({item, onPress}) => (
    <TouchableOpacity style={bookItemStyles.bookContainer} onPress = {onPress}>
        <Text style={bookItemStyles.bookName}>{item.title}</Text>
        <Text style={bookItemStyles.bookAuthor}>{item.subtitle}</Text>
    </TouchableOpacity>
);