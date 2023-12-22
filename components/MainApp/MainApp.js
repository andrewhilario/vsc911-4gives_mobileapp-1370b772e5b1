import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from '../navigators/AuthNavigator/AuthNavigator';
import TabNavigator from '../navigators/TabNavigator/TabNavigator';
import SettingsNavigator from '../navigators/SettingsNavigator/SettingsNavigator';

import UserStore from '../../stores/UserStore';
import BuyerNavigator from '../navigators/BuyerNavigator/BuyerNavigator';

const Stack = createNativeStackNavigator();

const MainApp = () => {
    const isLoggedIn = UserStore(state => state.isLoggedIn)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isLoggedIn === true ? (
                        <>
                            <Stack.Screen
                                name="AppScreens"
                                component={TabNavigator}
                            />
                            <Stack.Screen name="Buyer" component={BuyerNavigator} />
                            <Stack.Screen name="Settings" component={SettingsNavigator} />
                        </>
                    ) : (
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainApp