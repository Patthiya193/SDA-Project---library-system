
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6C70EB',
    },
    circleIcon: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').height * 0.1,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 48,
        color: '#6C70EB',
    },
    top: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    mainBody: {
        flex: 3,
        backgroundColor: '#F9FAFB',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
        marginBottom: 30,
    },
    inputContainer: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.125,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#A8AFB9',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 16,
    },
    textInput: {
        width: Dimensions.get('window').width * 0.6,
        fontWeight: 'bold',
        paddingLeft: 10,
        margin: 5,
    },
    forgotButtonStyle: {
        color: '#040415',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
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
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },
    signupButtonStyle: {
        
    },
    signupText: {
        fontWeight: 'bold',
    },
})