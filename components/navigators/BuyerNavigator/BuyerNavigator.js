import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuyerDashboardScreen from '../../screens/buyerMain/BuyerDashboardScreen/BuyerDashboardScreen';
import OfferDetailScreen from '../../screens/buyerMain/OfferDetailScreen/OfferDetailScreen';
import TransactionDetailsScreen from '../../screens/buyerMain/TransactionDetailsScreen/TransactionDetailsScreen';
import NotificationMailScreen from '../../screens/buyerMain/NotificationMailScreen/NotificationMailScreen';
import PaymentOrderScreen from '../../screens/buyerMain/PaymentOrderScreen/PaymentOrderScreen';
import PaymentDocumentsScreen from '../../screens/buyerMain/PaymentDocumentsScreen/PaymentDocumentsScreen';
import PaymentOTPScreen from '../../screens/buyerMain/PaymentOTPScreen/PaymentOTPScreen';


const Stack = createNativeStackNavigator();

const BuyerNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='BuyerDashboard'
        >
            <Stack.Screen name="BuyerDashboard" component={BuyerDashboardScreen} initialParams={{ key: Math.random().toString() }}/>
            <Stack.Screen name="BuyerTransactionDetails" component={TransactionDetailsScreen}/>
            <Stack.Screen name="OfferDetails" component={OfferDetailScreen}/>
            <Stack.Screen name="PaymentOrder" component={PaymentOrderScreen} initialParams={{ isDocumentsApproved: false }}/>
            <Stack.Screen name="PaymentDocuments" component={PaymentDocumentsScreen}/>
            <Stack.Screen name="PaymentOTP" component={PaymentOTPScreen}/>
        </Stack.Navigator>
    )
}

export default BuyerNavigator