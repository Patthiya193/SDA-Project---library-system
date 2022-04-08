
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const Item = ({item, onPress}) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <FontAwesomeIcon icon={ item.icon } color='#A8AFB9' size={32} style={{margin:10}}/>
        <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
);