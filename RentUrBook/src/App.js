import React, {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignIn from "./screens/SignIn"
import Register from "./screens/Register/index.js";

const AuthStack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName = "SignIn">
            <AuthStack.Screen name = "SignIn" component = {SignIn} />
            <AuthStack.Screen name = "Register" component = {Register}/>
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
