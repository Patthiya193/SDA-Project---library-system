import React from 'react';
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
} from 'react-native';

import SignIn from "./screens/SignIn"
import Register from "./screens/Register";
import Main from "./screens/Main"
import BookDetail from './screens/BookDetail';
import OrderDetail from './screens/OrderDetail'
import ReservedBookDetail from './screens/ReservedBookDetail'
import AddBook from './screens/AddBook'
const AuthStack = createStackNavigator();

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName = "MainGuest" screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name = "SignIn" component = {SignIn} />
            <AuthStack.Screen name = "Register" component = {Register}/>
            <AuthStack.Screen name = "MainGuest" component = {Main} initialParams={{userData:{}}}/>
            <AuthStack.Screen name = "MainLoggedIn" component = {Main} />
            <AuthStack.Screen name = "BookDetail" component ={BookDetail} initialParams ={{bookParam:{}}}/>
            <AuthStack.Screen name = "OrderDetail" component ={OrderDetail} initialParams ={{orderParam:{}}}/>
            <AuthStack.Screen name = "ReservedBookDetail" component ={ReservedBookDetail} initialParams ={{bookParam:{}}}/>
            <AuthStack.Screen name = "AddBook" component = {AddBook} />
            
        </AuthStack.Navigator>
    </NavigationContainer>

    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C70EB',
  },
})

export default App;
