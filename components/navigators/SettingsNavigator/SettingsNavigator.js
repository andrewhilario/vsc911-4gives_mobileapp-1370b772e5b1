import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsMenuScreen from '../../screens/settings/SettingsMenuScreen/SettingsMenuScreen';
import AccountDetailsMenuScreen from '../../screens/settings/AccountDetailsMenuScreen/AccountDetailsMenuScreen';
import BasicInformationScreen from '../../screens/settings/BasicInformationScreen/BasicInformationScreen';
import UpdateEmailScreen from '../../screens/settings/UpdateEmailScreen/UpdateEmailScreen';
import UpdateMobileNumberScreen from '../../screens/settings/UpdateMobileNumberScreen/UpdateMobileNumberScreen';
import AddressScreen from '../../screens/settings/AddressScreen/AddressScreen';
import ChangePasswordScreen from '../../screens/settings/ChangePasswordScreen/ChangePasswordScreen';
import AccountSecurityScreen from '../../screens/settings/AccountSecurityScreen/AccountSecurityScreen';
import DocumentsMainScreen from '../../screens/settings/DocumentsMainScreen/DocumentsMainScreen';
import DocumentsCameraScreen from '../../screens/settings/DocumentsCameraScreen/DocumentsCameraScreen';
import DocumentsStatusScreen from '../../screens/settings/DocumentsStatusScreen/DocumentsStatusScreen';
import NotificationsSettingsScreen from '../../screens/settings/NotificationsSettingsScreen/NotificationsSettingsScreen';

import SettingsOTPVerificationScreen from '../../screens/settings/SettingsOTPVerificationScreen/SettingsOTPVerificationScreen';
import UpdateMobileVerificationScreen from '../../screens/settings/UpdateMobileVerificationScreen/UpdateMobileVerificationScreen';
import NotificationMailScreen from '../../screens/buyerMain/NotificationMailScreen/NotificationMailScreen';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SettingsMenu'
        >
            <Stack.Screen name="UserNotificationMail" component={NotificationMailScreen} initialParams={{ type: '', key: Math.random().toString() }}/>

            <Stack.Screen name="SettingsMenu" component={SettingsMenuScreen} initialParams={{ key: Math.random().toString() }}/>
            <Stack.Screen name="AccountDetailsMenu" component={AccountDetailsMenuScreen}/>
            <Stack.Screen name="BasicInformation" component={BasicInformationScreen}/>
            <Stack.Screen name="UpdateEmail" component={UpdateEmailScreen}/>
            <Stack.Screen name="UpdateMobileNumber" component={UpdateMobileNumberScreen}/>
            <Stack.Screen name="UpdateMobileNumberVerify" component={UpdateMobileVerificationScreen}/>
            <Stack.Screen name="Address" component={AddressScreen}/>
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
            <Stack.Screen name="AccountSecurity" component={AccountSecurityScreen}/>
            <Stack.Screen name="DocumentsMain" component={DocumentsMainScreen} initialParams={{ key: Math.random().toString() }}/>
            <Stack.Screen name="DocumentsCamera" component={DocumentsCameraScreen}/>
            <Stack.Screen name="DocumentsStatus" component={DocumentsStatusScreen}/>
            <Stack.Screen name="NotificationsSettings" component={NotificationsSettingsScreen}/>
            
            <Stack.Screen name="SettingsOTP" component={SettingsOTPVerificationScreen}/>
        </Stack.Navigator>
    )
}

export default SettingsNavigator