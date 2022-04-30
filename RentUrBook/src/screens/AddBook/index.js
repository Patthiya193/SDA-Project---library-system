import React, { useState, useEffect, Component } from "react";

import { View, ScrollView, Text, TextInput, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity,Dimensions, StatusBar, keyboadType, FlatList, VirtualizedList, LogBox } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faHouse, faBookReader, faPencil, faUserEdit, faBookOpen} from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MultiSelect from 'react-native-multiple-select';

import { body, bookItemStyles } from "../universalStyles";
import { CommonActions, StackActions, useFocusEffect } from "@react-navigation/core";
import { addBook, editBook} from "../../network/bookService"
import {decode, encode} from 'base-64'




if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
var ImagePicker = require('react-native-image-picker');

const AddBook = ({navigation, route}) => {

    useEffect(() => {
        // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        LogBox.ignoreAllLogs();
    }, [])

    const [userData, setUserData] = useState(route.params["userData"])

    const [bookData, setBookData] = useState(route.params["bookData"])
    let ath = bookData["authors"][0]
    bookData['authors'].slice(1).forEach(a => {
        ath += ", " + a
    })
    const [state] = useState(route.params["state"])
    const [bookTitle, setBookTitle] = useState(bookData["bookName"]);
    const [bookAuthor, setBookAuthor] = useState(ath);
    const [bookDes, setBookDes] = useState(bookData["description"]);
    const [bookCover, setBookCover] = useState(bookData["coverImage"])
    const [bookIsbn, setBookIsbn] = useState(bookData["isbn"]);
    const [bookGenre, setBookGenre] = useState(bookData["genre"])
    const [addImageText, setAddImageText] = useState("Add Image")
    const [addImageColor, setAddImageColor] = useState('#EF5DA8')
    const [selectedItems, setSelectedItems] = useState(bookData["genre"]);

    const onPressHome = () => {
        // navigation.dispatch( StackActions.popToTop())
        navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))
    }

    const onPressAdd = () => {
        if (bookTitle.length < 1) {
            Alert.alert("Add Book Failed","Please enter book title.", [{text:"OK"}])
        } else if (bookAuthor.length < 1) {
            Alert.alert("Add Book Failed","Please enter author name.", [{text:"OK"}])
        } else if (bookDes.length < 1) {
            Alert.alert("Add Book Failed","Please enter book description.", [{text:"OK"}])
        } else if (bookCover.length < 1) {
            Alert.alert("Add Book Failed","Please pick book cover.", [{text:"OK"}])
        } else {
            Alert.alert(
                "Comfirm",
                "Click OK to add the book.",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                      var aths = []
                      var temp = bookAuthor.split(', ')
                      temp.forEach(a => {
                          let t2 = a.split(',')
                          t2.forEach(realA => {
                              aths.push(realA)
                          })
                      })
                      console.log("bookCover", bookCover)
                      if (state == "add") {
                        addBook( {
                            bookName: bookTitle,
                            authors: aths,
                            description: bookDes,
                            isbn: bookIsbn,
                            reserverId: 0,
                            curState: 'available',
                            coverImage: bookCover,
                            genre: bookGenre,
                            reserverName: "",
                          })
                      } else if (state == "edit") {
                        editBook( {
                            id: bookData["id"],
                            bookName: bookTitle,
                            authors: aths,
                            description: bookDes,
                            isbn: bookIsbn,
                            reserverId: 0,
                            curState: 'available',
                            coverImage: bookCover,
                            genre: bookGenre,
                            reserverName: "",
                          })

                        }
                        navigation.dispatch( StackActions.replace('MainLoggedIn', {"userData":userData}))

                  } }
                ]
              );
        }
        
    }

    const onPressAddImg = async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 450,
            maxHeight: 600,
            includeBase64: true
        }
        // await ImagePicker.launchImageLibrary(options, response => {
        //     console.log('response', response)
        // })
        var result = await ImagePicker.launchImageLibrary(options)

        if (!result['didCancel']) {
            setAddImageText("Change Image")
            setAddImageColor("#8FD0CA")
        }
        var base64 = result['assets'][0]['base64']
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }

        console.log(bytes.buffer)
        const byteArray = []
        Object.keys(bytes).forEach((key) =>{
            const byteForKey = bytes[key];
            byteArray.push(byteForKey);
        });
        // setBookCover("data:image/jpeg;base64," +result['assets'][0]['base64'])
        // setBookCover(result["asset"])
        setBookCover(byteArray)

    }

    const items = [{
        id: 'ART',
        name: 'Art'
      }, {
        id: 'CARTOON',
        name: 'Cartoon'
      }, {
          id: 'COOKING',
          name: 'Cooking'
      } ,{
        id: 'EDUCATION',
        name: 'Education'
      }, {
        id: 'HEALTH',
        name: 'Health'
      }, {
        id: 'HISTORY',
        name: 'History'
      }, {
        id: 'MAGAZINE',
        name: 'Magazine'
      }, {
        id: 'NOVEL',
        name: 'Novel'
      }, {
        id: 'TECH',
        name: 'Technology'
      }, {
        id: 'TRAVEL',
        name: 'Travel'
    }];


    const onSelectedItemsChange = (selectedItems) => {
      // Set Selected Items
      setSelectedItems(selectedItems);
      setBookGenre(selectedItems);
    };

    return(
        <View style={body.background}>
        
            <SafeAreaView style = {{flex:1}}>
                <ScrollView style = {{flexGrow: 1, width: '100%', height: '100%'}} keyboardShouldPersistTaps={true} horizontal={false} >
                    <View style={styles.top}>
                        
                        <View style={styles.topContainer}>
                            
                            {/* <TouchableOpacity onPress={onPressHome}>
                                <FontAwesomeIcon icon={ faHouse } color='#F9FAFB' size={30}  style={styles.iconStyle}/>
                            </TouchableOpacity> */}

                            <Text style={body.title}>Add Book</Text>
                        </View>
                        
                    </View>
    
            
                    <KeyboardAvoidingView behavior={"padding"} style={styles.mainBody}>
                        
                        <View style={styles.mainBody}>
                            <View style={styles.container}>
                                <Text style={styles.titleText}>Select Genre</Text>
                                <MultiSelect
                                    hideTags
                                    items={items}
                                    uniqueKey="id"
                                    onSelectedItemsChange={onSelectedItemsChange}
                                    selectedItems={selectedItems}
                                    selectText="Pick Genre"
                                    searchInputPlaceholderText="Search ..."
                                    onChangeInput={(text) => console.log(text)}
                                    tagRemoveIconColor="#A8AFB9"
                                    tagBorderColor="#A8AFB9"
                                    tagTextColor="#A8AFB9"
                                    selectedItemTextColor="#EF5DA8"
                                    selectedItemIconColor="#EF5DA8"
                                    itemTextColor="#000"
                                    displayKey="name"
                                    searchInputStyle={{color: '#A8AFB9'}}
                                    submitButtonColor="#6C70EB"
                                    submitButtonText="Submit"
                                />
                            </View>
                            <ScrollView style = {{flex: 1, width: '100%'}} >

                                <View style={styles.inputContainer}>
                                    <FontAwesomeIcon icon={ faPencil } color='#A8AFB9' size={24} style={{margin:5}}/>
                                    <TextInput placeholder='Book Title' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                                    onChangeText={newBookTitle => {
                                        let value = newBookTitle
                                        // value = value.replace(/[^A-Za-z0-9_ ]/gi, "")
                                        setBookTitle(value)
                                    }} 
                                    value={bookTitle} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <FontAwesomeIcon icon={ faUserEdit } color='#A8AFB9' size={24} style={{margin:5}}/>
                                    <TextInput placeholder='Author' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                                    onChangeText={newBookAuthor => {
                                        let value = newBookAuthor
                                        value = value.replace(/[^A-Za-z0-9_ ,]/gi, "")
                                        setBookAuthor(value)
                                    }} 
                                    value={bookAuthor} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <FontAwesomeIcon icon={ faBookReader } color='#A8AFB9' size={24} style={{margin:5}}/>
                                    <TextInput placeholder='ISBN' style={styles.textInput} placeholderTextColor='#A8AFB9' 
                                    
                                    onChangeText={newIsbn => {
                                        let value = newIsbn
                                        value = value.replace(/[^0-9]/gi, "")
                                        if (value.length < 14) {setBookIsbn(value)}
                                    }} 
                                    value={bookIsbn}
                                    keyboardType = "number-pad" />
                                </View>
                                <View style={styles.desContainer}>
                                    <FontAwesomeIcon icon={ faBookOpen } color='#A8AFB9' size={24} style={{margin:5}}/>
                                    <TextInput placeholder='Description' style={styles.destextInput} placeholderTextColor='#A8AFB9' 
                                    multiline={true}
                                    numberOfLines={100}
                                    onChangeText={newBookDes => {
                                        let value = newBookDes
                                        //value = value.replace(/[^a-z0-9_]/gi, "")
                                        setBookDes(value)
                                    }} 
                                    value={bookDes} />
                                </View>

                                <Pressable style = {{
                                    alignItems:'center' ,
                                    width: Dimensions.get('window').width * 0.75,
                                    paddingVertical: 18,
                                    paddingHorizontal: 50,
                                    borderRadius: 16,
                                    backgroundColor: addImageColor,
                                    marginTop: 15,
                                    marginBottom: 15,
                                    }} onPress = {onPressAddImg}>
                                    <Text style={styles.btnText}>{addImageText}</Text>
                                </Pressable>

                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView >
                
                </ScrollView>
            </SafeAreaView>
            

            <View style = {styles.bottomContainer}>
                <Pressable style = {styles.addbuttonStyle} onPress = {onPressAdd}>
                        <Text style={styles.btnText}>Add Book</Text>
                </Pressable>

            </View>  
            

         
                    
        </View>
            
            
        
    );
}
export default AddBook;