import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadAsync } from "expo-font";
import React, { useEffect } from "react";
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

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;