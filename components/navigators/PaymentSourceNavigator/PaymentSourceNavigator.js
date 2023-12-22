import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentSourceScreen from '../../screens/buyerMain/PaymentSourceScreen/PaymentSourceScreen';

const PaymentSourceStack = createNativeStackNavigator();

const PaymentSourceNavigator = () => {
  return (
    <PaymentSourceStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="PaymentSource"
    >
        <PaymentSourceStack.Screen 
            name="PaymentSourceMain"
            component={PaymentSourceScreen}
            initialParams={{ key: Math.random().toString() }}
        />
    </PaymentSourceStack.Navigator>
  )
}

export default PaymentSourceNavigator