
import { StyleSheet, Dimensions, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    top: {
        flex: 1.5,
        alignItems: 'center',
        paddingTop: "10%",
        flexDirection: 'row',
        marginTop: 0,
        
    },
    topContainer: {
        flex: 0,
        alignItems: 'center',
        paddingTop: "10%",
        flexDirection: 'row',
        marginTop: -150,
        marginHorizontal:10,
        
    },
    
    iconStyle:{
        marginRight:80, 
        margitLeft:10
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

    borrowButtonStyle: {
        // alignItems: ,
        // justifyContent: 'center',

        paddingVertical: 18,
        paddingHorizontal: 80,
        borderRadius: 16,
        backgroundColor: '#EF5DA8',
        marginTop: 15,
        marginBottom: 15, 
        right: 50,
       },
    borrowText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize:18,
    },

    mainBody:{
        flex: 4.5,
        backgroundColor: '#F9FAFB',  
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingTop: 30,
        alignItems: 'center',
    },


    textContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: '#F9FAFB',
        marginHorizontal: 5,
        marginTop: 30,
        marginBottom: 5,
      },
      text: {
        fontSize: 16,
      },
    bottomContainer:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
    },

    bookContainer:{
        alignItems: 'center',
        marginTop: 100,
        marginBottom:0,

    },
    bookName: {
        fontWeight: 'bold',
        fontSize: 35,
        zIndex: 999,
        margin: 5,
    },
    bookAuthor: {
        fontSize: 18,
        color: '#8C9199',
        marginBottom:8,
    },
    bookStatus:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#EF5DA8',

    },

    

})