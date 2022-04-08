
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6C70EB',
    },
    top: {
        flex: 1.5,
        alignItems: 'center',
        paddingTop: "10%",
    },
    mainBody: {
        flex: 3,
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    footer: {
        backgroundColor: 'white',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginBottom: 30,
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

export const bookItemStyles = StyleSheet.create({
    bookName: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
    },
    bookAuthor: {
        fontSize: 14,
        margin: 10,
    },
    bookContainer: {
        paddingLeft: 0,
        padding: '10%',
    }, 
})