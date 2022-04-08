
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
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