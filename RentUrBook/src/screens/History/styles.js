
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    warnLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        color: 'white',
    }
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