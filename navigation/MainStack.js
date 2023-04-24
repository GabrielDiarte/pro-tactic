import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext }  from "react";
import App from "../App";
import createAccount from "../createAccount";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name = "Login"
                    component = { App }
                />
                <Stack.Screen 
                    name = "CreateAccount"
                    component = { createAccount }
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack