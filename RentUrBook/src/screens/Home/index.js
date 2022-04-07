import React, { useState } from "react";

import { View, Text, TextInput, FlatList } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { styles } from "./styles";
import { renderTabBar } from "./renderTabBar";
import { ItemDivider } from "./itemDivider";
import { Item } from "./item";

import { TabView } from 'react-native-tab-view';

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
        { key: 'first', title: 'Art' },
        { key: 'second', title: 'Cartoon' },
        { key: 'third', title: 'Cooking' },
        { key: 'fourth', title: 'Education' },
        { key: 'fifth', title: 'Health' },
        { key: 'sixth', title: 'History' },
        { key: 'seventh', title: 'Magazine'},
        { key: 'eighth', title: 'Novel' },
        { key: 'ninth', title: 'Technology' },
        { key: 'tenth', title: 'Travel' },
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
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={ faSearch } color='#A8AFB9' size={24}  />
                    <TextInput placeholder='Search for books' style={styles.textInput} placeholderTextColor='#A8AFB9'/>
                </View>
            </View>
            <TabView style={{flex: 3.5}}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        
        </View>
    )
}

export default Home;