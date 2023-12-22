import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyerDashboardScreen from '../../screens/buyerMain/BuyerDashboardScreen/BuyerDashboardScreen';
import InstallmentCalculatorScreen from '../../screens/buyerMain/InstallmentCalculatorScreen/InstallmentCalculatorScreen';
import MerchantsScreen from '../../screens/buyerMain/MerchantsScreen/MerchantsScreen';

const DashboardStack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="Dashboard"
    >
        <DashboardStack.Screen 
            name="DashboardMain"
            component={BuyerDashboardScreen}
            initialParams={{ key: Math.random().toString() }}
        />
        <DashboardStack.Screen 
            name="InstallmentCalculator"
            component={InstallmentCalculatorScreen}
            initialParams={{ key: Math.random().toString() }}
        />
        <DashboardStack.Screen 
            name="Merchants"
            component={MerchantsScreen}
            initialParams={{ key: Math.random().toString() }}
        />
    </DashboardStack.Navigator>
  )
}

export default DashboardNavigator