import React, { useState } from "react";

import { View, Text, TextInput, FlatList, Pressable } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { body, searchBarStyle } from "../universalSyles";

import { renderTabBar } from "./renderTabBar";

import { ItemDivider } from "../../components/render/itemDivider"
import { Item } from "../../components/render/item";

import { TabView } from 'react-native-tab-view';

//Temporary - delete when implement api
const DATA = [{
    id: "1",
    title: "First item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "2",
    title: "Second item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "3",
    title: "Third item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "4",
    title: "Forth item",
    subtitle: "subtitle",
    type: "1",
},
{
    id: "5",
    title: "Fifth item",
    subtitle: "subtitle",
    type: "1",
},
]

const Home = ({navigation, route, userData}) => {
    console.log('Home: current user',userData)

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'ALL', title: 'All'},
        { key: 'ART', title: 'Art' },
        { key: 'CARTOON', title: 'Cartoon' },
        { key: 'COOKING', title: 'Cooking' },
        { key: 'EDUCATION', title: 'Education' },
        { key: 'HEALTH', title: 'Health' },
        { key: 'HISTORY', title: 'History' },
        { key: 'MAGAZINE', title: 'Magazine'},
        { key: 'NOVEL', title: 'Novel' },
        { key: 'TECH', title: 'Technology' },
        { key: 'TRAVEL', title: 'Travel' },
    ]);

    const renderBook = ({item, onPress}) => {
        return <Item item={item} onPress={console.log("Pressed")}/>
    }
    
    // Only render the scene for 2 routes at each sides (performance purpose)
    const renderScene = ({ route }) => {
        if (Math.abs(index - routes.indexOf(route)) > 2) {
            // console.log(index)
            return <View/>;
        }
        
        const displayData = DATA;

        return <FlatList data={displayData} 
                renderItem={renderBook}
                ItemSeparatorComponent={ItemDivider}
                style={styles.mainBody} 
                />;
    };

    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <Text style={styles.title}>Home</Text>
                <View style={searchBarStyle.topContainer}>
                    <View style={searchBarStyle.inputContainer}>
                        <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                        <TextInput placeholder='Search for books' style={searchBarStyle.textInput} placeholderTextColor='#A8AFB9'/>
                    </View>
                    <Pressable onPress={ console.log("search") } 
                        style={({pressed}) => [{backgroundColor: pressed ? '#8185eb':'#ffffff'}, searchBarStyle.searchButton]}>
                        <FontAwesomeIcon icon={ faSearch } color='#6C70EB' size={24}  />
                    </Pressable>
                </View>
            </View>
            <TabView style={{flex: 4}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

export default Home;