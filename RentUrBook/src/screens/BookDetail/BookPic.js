import React from "react";
import { StyleSheet, Dimensions, Image, View, TouchableOpacity } from "react-native";
import { useState } from "react";



export const BookPic = () => {

    const [img, setImg] = useState();

    return (

        <Image style = {styles.container} 
        sorce = {img} />
        //<TouchableOpacity style = {styles.container} />

    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        left: (Dimensions.get('window').width / 2) - 80,
        top: 130,
        width: 160,
        height: 200,
        borderRadius: 16,
        backgroundColor: 'pink',
    }

  });

