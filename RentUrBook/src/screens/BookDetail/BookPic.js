import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
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
        zIndex: 10,
        right: 130,
        top: 150,
        width: 160,
        height: 200,
        backgroundColor: 'pink',
        
      
    }

  });

