import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
} from 'react-native';

import SignIn from "./screens/SignIn"
import Register from "./screens/Register";
import Main from "./screens/Main"

const AuthStack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName = "SignIn" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name = "SignIn" component = {SignIn} />
            <AuthStack.Screen name = "Register" component = {Register}/>
            <AuthStack.Screen name = "Main" component = {Main} />
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
