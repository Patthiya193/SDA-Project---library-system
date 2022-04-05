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
import Register from "./screens/Register";
import Home from "./screens/Home";

const AuthStack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName = "SignIn" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name = "SignIn" component = {SignIn} />
            <AuthStack.Screen name = "Register" component = {Register}/>
            <AuthStack.Screen name = "Home" component = {Home} />
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
