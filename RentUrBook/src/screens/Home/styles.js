
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#6C70EB',
    },
    top: {
        flex: 1.75,
        alignItems: 'center',
        paddingTop: "10%",
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
    footer: {
        
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginBottom: 30,
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
})