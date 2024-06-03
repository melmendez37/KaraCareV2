import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadAsync } from "expo-font";
import React, { useEffect } from "react";
import Form from "./screens/Form.js";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import Splash from './screens/Splash.js';
import Welcome from "./screens/Welcome.js";

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        loadAsync();
    }, []);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Splash" component={Splash}/>
                <Stack.Screen name = "Welcome" component={Welcome}/>
                <Stack.Screen name = "Form" component={Form}/>
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name = "Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;