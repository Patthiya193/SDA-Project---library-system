import { StyleSheet, Dimensions, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    top: {
        flex: 1,
    },
    topContainer: {
        alignItems: 'center',
        paddingTop: "10%",
        flexDirection: 'row',
        // marginTop: -150,
        // marginLeft:30,
        // marginRight: Dimensions.get('window').width * 0.205,
        justifyContent: 'center',

    },
    
    iconStyle:{
        // marginRight: 10,
        // margitLeft: 10,
        position: 'absolute',
        top: -15,
        right: 40,
    },
    
    buttonStyle: {
        alignItems:'center' ,
        // justifyContent: 'center',
        //textAlign: 'center',
        width: Dimensions.get('window').width * 0.75,
        paddingVertical: 18,
        paddingHorizontal: 80,
        borderRadius: 16,
        backgroundColor: '#EF5DA8',
        marginTop: 15,
        marginBottom: 15, 
       },

       addbuttonStyle: {
        alignItems:'center' ,
        // justifyContent: 'center',
        //textAlign: 'center',
        width: Dimensions.get('window').width * 0.75,
        paddingVertical: 18,
        paddingHorizontal: 80,
        borderRadius: 16,
        backgroundColor: '#6C70EB',
        marginTop: 15,
        marginBottom: 15, 
       },


    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize:18,
    },

    mainBody:{
        flex: 3,
        flexGrow: 4,
        backgroundColor: '#F9FAFB',  
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingTop: 30,
        alignItems: 'center',
    },



    bottomContainer:{
        flex: 0,
        backgroundColor: '#F9FAFB',  
        //lexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
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
    desContainer: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.225,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: '#A8AFB9',
        paddingLeft: 10,
        borderRadius: 16,
    },
    destextInput: {
        width: Dimensions.get('window').width * 0.6,
        fontWeight: 'bold',
        paddingLeft: 10,
        margin: 5,
    },
    textInput: {
        width: Dimensions.get('window').width * 0.6,
        fontWeight: 'bold',
        paddingLeft: 10,
        margin: 5,
    },
    title:{
        fontSize: 22,
        textAlign: 'left',
    },

    container: {
        flex: 0.2,
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 16,
    },

    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
    
})