
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6C70EB',
    },
    top: {
        // flex: 1.35,
        alignItems: 'baseline',
        
        paddingTop: "10%",
        paddingLeft: 40
    },
    nonUserTop: {
        // flex: 1.35,
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
    nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginBottom: 5,
        textAlign: 'left'
    },
    inputContainer: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.11,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#A8AFB9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 16,
    },
    textInput: {
        fontWeight: 'bold',
        paddingLeft: 5,
    },
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
    loginButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.125,
        borderRadius: 16,
        elevation: 3,
        marginTop: 15,
        marginBottom: 15,
    },
    loginText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    warnLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        color: 'white',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingLeft: 0,
        padding: '3%',
    },
    idText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'lightgrey',
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'left',
        paddingRight: 20,
        paddingLeft: 10
    },
    rowText: {
        height: 80,
        flexDirection: 'row',
        paddingLeft: 0,
        paddingRight: 0,
        padding: '1%',
    }
})