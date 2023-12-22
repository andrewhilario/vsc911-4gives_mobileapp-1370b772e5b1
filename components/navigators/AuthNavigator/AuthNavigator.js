import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/auth/LoginScreen/LoginScreen';

import SignUpScreen from '../../screens/auth/SignUpScreen/SignUpScreen';
import SetupProfileScreen from '../../screens/auth/SetupProfileScreen/SetupProfileScreen';
import BuyerOTPVerificationScreen from '../../screens/auth/BuyerOTPVerificationScreen/BuyerOTPVerificationScreen';
import SignUpConfirmationScreen from '../../screens/auth/SignUpConfirmationScreen/SignUpConfirmationScreen';
import LoginStatusScreen from '../../screens/auth/LoginStatusScreen/LoginStatusScreen';
import SignUpStatusScreen from '../../screens/auth/SignUpStatusScreen/SignUpStatusScreen';
import UpdateEmailVerificationScreen from '../../screens/settings/UpdateEmailVerificationScreen/UpdateEmailVerificationScreen';
import SignUpDocumentsMainScreen from '../../screens/auth/SignUpDocumentsMainScreen/SignUpDocumentsMainScreen';
import SignUpDocumentsCameraScreen from '../../screens/auth/SignUpDocumentsCameraScreen/SignUpDocumentsCameraScreen';
import SignUpDocumentsStatusScreen from '../../screens/auth/SignUpDocumentsStatusScreen/SignUpDocumentsStatusScreen';
import SignUpBiometricSetupScreen from '../../screens/auth/SignUpBiometricSetupScreen/SignUpBiometricSetupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="LoginStatus" component={LoginStatusScreen}/>
            <Stack.Screen name="UpdateEmailVerify" component={UpdateEmailVerificationScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            

            <Stack.Screen name="BuyerOTPVerification" component={BuyerOTPVerificationScreen}/>
            <Stack.Screen name="SignUpStatus" component={SignUpStatusScreen}/>
            <Stack.Screen name="SignUpConfirmation" component={SignUpConfirmationScreen}/>
            <Stack.Screen name="SignUpDocumentsMain" component={SignUpDocumentsMainScreen}/>
            <Stack.Screen name="SignUpDocumentsCamera" component={SignUpDocumentsCameraScreen}/>
            <Stack.Screen name="SignUpDocumentsStatus" component={SignUpDocumentsStatusScreen}/>
            <Stack.Screen name="SignUpBiometricSetup" component={SignUpBiometricSetupScreen}/>
            <Stack.Screen name="SetupProfile" component={SetupProfileScreen}/>
            {/* <Stack.Screen name="ForgotPassword" component={}/> */}
        </Stack.Navigator>
    )
}

export default AuthNavigator