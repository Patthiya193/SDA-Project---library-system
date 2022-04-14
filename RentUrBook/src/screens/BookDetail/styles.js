
import { StyleSheet, Dimensions, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    top: {
        flex: 1.75,
    },
    topContainer: {
        alignItems: 'center',
        paddingTop: "10%",
        flexDirection: 'row',
        // marginTop: -150,
        // marginLeft:30,
        // marginRight: Dimensions.get('window').width * 0.305,
        justifyContent: 'center',

    },

    iconContainerStyle: {
        position: 'absolute',
        bottom: 37,
        left: 40,
    },

    adminButton: {
        alignItems:'center',
        width: Dimensions.get('window').width * 0.4,
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 16,
        margin: 15,
    },

    borrowText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize:18,
    },

    
    mainBody:{
        flex: 3,
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
        width: '100%',
        height:'53%',

      },
      scrollView: {
        backgroundColor: '#F9FAFB',
        marginHorizontal: 5,
        marginTop: 30,
        marginBottom: 5,
        
        
      },
      text: {
        fontSize: 16,
        textAlign: 'left',
      },
    bottomContainer:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 10,
        paddingRight: 10
        
    },

    bookContainer:{
        alignItems: 'center',
        marginTop: 100,
        marginBottom:0,

    },
    bookName: {
        fontWeight: 'bold',
        fontSize: 30,
        zIndex: 999,
        margin: 5,
    },
    bookDetails: {
        fontSize: 18,
        color: '#8C9199',
        marginBottom: 5,
    },
    bookStatus:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#EF5DA8',
        marginBottom: 10,
        textAlign: 'left',

    },
    borrowButtonStyle: {
            
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.65,
        paddingVertical: 18,
        paddingHorizontal: 80,
        borderRadius: 16,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 30, 
                
    },
    
})