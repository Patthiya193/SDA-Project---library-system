import { StyleSheet, Dimensions } from "react-native";

export const body = StyleSheet.create({
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginBottom: 30,
    },
})
export const searchBarStyle = StyleSheet.create({
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    inputContainer: {
        height: Dimensions.get('window').width * 0.11,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#A8AFB9',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 16,
        marginHorizontal: 10,
    },
    textInput: {
        width: Dimensions.get('window').width * 0.5,
        fontWeight: 'bold',
        paddingLeft: 5,
        margin: 7
    }, 
    searchContainer: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.11,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#A8AFB9',
        alignItems: 'center',
        paddingLeft: 20,
        borderRadius: 16,
    },
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.11,
        borderRadius: 16,
        elevation: 3,
    },
    searchText: {
        color: '#6C70EB',
        fontWeight: 'bold',
    }
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
        flexDirection: 'row',
        paddingLeft: 0,
        padding: '10%',
    }, 
})
