
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: 'pink',
        marginRight: 16,
    },
})

export const tabBarStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'transparent',
        marginBottom: '5%',
        // paddingLeft: "10%",
    },
    tabBarStyle: {
        width: 'auto',
    },
    tabBarIndicator: {
        backgroundColor: '#ffffff',
        height: 1,
    },
    tabBarIndicatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})