
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";


export const Item = ({item, onPress}) => (
    <TouchableOpacity style={styles.bookContainer}>
        <Text style={styles.bookName}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.subtitle}</Text>
    </TouchableOpacity>
);