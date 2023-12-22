import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsScreen from '../../screens/buyerMain/TransactionsScreen/TransactionsScreen';
import TransactionDetailsScreen from '../../screens/buyerMain/TransactionDetailsScreen/TransactionDetailsScreen';
import TransactionPaymentsScreen from '../../screens/buyerMain/TransactionPaymentsScreen/TransactionPaymentsScreen';
import TransactionDocumentsScreen from '../../screens/buyerMain/TransactionDocumentsScreen/TransactionDocumentsScreen';

const TransactionsStack = createNativeStackNavigator();

const TransactionsNavigator = () => {
  return (
    <TransactionsStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="TransactionsMain"
    >
        <TransactionsStack.Screen 
            name="TransactionsMain"
            component={TransactionsScreen}
            initialParams={{ key: Math.random().toString() }}
        />
        <TransactionsStack.Screen 
            name="TransactionDetails"
            component={TransactionDetailsScreen}
            initialParams={{ key: Math.random().toString() }}
        />
        <TransactionsStack.Screen 
            name="TransactionPayments"
            component={TransactionPaymentsScreen}
            initialParams={{ key: Math.random().toString() }}
        />
        <TransactionsStack.Screen 
            name="TransactionDocuments"
            component={TransactionDocumentsScreen}
            initialParams={{ key: Math.random().toString() }}
        />
    </TransactionsStack.Navigator>
  )
}

export default TransactionsNavigator