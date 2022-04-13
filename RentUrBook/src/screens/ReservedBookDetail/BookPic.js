import React from "react";
import { StyleSheet, Dimensions, Image, View, TouchableOpacity } from "react-native";
import { useState } from "react";



export const BookPic = (image) => {

    const [img, setImg] = useState(image);

    return (

        <Image style = {styles.container} 
        source={{uri: `data:image/jpeg;base64,${img['image']}`}} />
        //<TouchableOpacity style = {styles.container} />

    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        left: (Dimensions.get('window').width / 2) - 80,
        top: (Dimensions.get('window').height / 2) - 220,
        width: 160,
        height: 200,
        borderRadius: 16,
        backgroundColor: 'pink',
    }

  });

