import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';
import DashboardNavigator from '../DashboardNavigator/DashboardNavigator';
import PaymentSourceNavigator from '../PaymentSourceNavigator/PaymentSourceNavigator';
import TransactionsNavigator from '../TransactionsNavigator/TransactionsNavigator';

const Tab = createBottomTabNavigator();

const TabBarProps = (route) => ({
    tabBarIcon: () => {
        if (route.name === "Dashboard") {
            return <MaterialIcons name="dashboard" size={40} color={colors.primary.primary500} />;
        } else if (route.name === "Payment Sources") {
            return <MaterialIcons name="credit-card" size={40} color={colors.primary.primary500} />;
        } else if (route.name === "Transactions") {
            return <Ionicons name="ios-receipt" size={40} color={colors.primary.primary500} />;
        }
    },
    tabBarInactiveBackgroundColor: colors.basic.white50,
    tabBarActiveBackgroundColor: '#FCD3BA33',
    tabBarStyle: {
        backgroundColor: colors.basic.white50,
        position: "relative",
        height: 80,
        alignContent: "center",
        justifyContent: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 10,
    },
    tabBarItemStyle: {
        paddingVertical: 0,
    },
    tabBarLabelStyle: {
        fontFamily: fonts.MEDIUM,
        color: colors.primary.primary500,
        fontSize: 12,
        paddingTop: 0,
    },
    headerShown: false,
    tabBarOnPress: ({ navigation, defaultHandler }) => {
        const { name } = route;
        const shouldReplaceStack = name === 'Dashboard' || name === 'Payment Sources' || name === 'Transactions'; // Adjust conditions as needed
    
        if (shouldReplaceStack) {
          // Replace the stack with the desired screen
            navigation.replace(name);
        } else {
          defaultHandler(); // Let the default handling occur for other tabs
        }
    },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
            ...TabBarProps(route, navigation),
        })}
    >
        <Tab.Screen name="Dashboard" component={DashboardNavigator} initialParams={{ key: Math.random().toString() }}/>
        <Tab.Screen name="Payment Sources" component={PaymentSourceNavigator} initialParams={{ key: Math.random().toString() }}/>
        <Tab.Screen name="Transactions" component={TransactionsNavigator} initialParams={{ key: Math.random().toString() }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator