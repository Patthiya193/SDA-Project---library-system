import React from "react";
import { StyleSheet, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";



export const BookIcon = () => {

    const [img, setImg] = useState();

    return (

        <Image style = {styles.imageContainer} 
        sorce = {img} />

    );
}

