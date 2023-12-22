import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableOpacity, View, Text } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

import { SelectorButtonText, SelectorButtonsContainer, SelectorContainer, TransactionsContainer, TransactionsListText, TransactionScrollContainer, TransactionsListTextContainer, TransactionsTitleContainer, TransactionsTitleText } from './styles'

import TransactionsCard from '../TransactionsCard/TransactionsCard';
import UnverifiedStatus from '../UnverifiedStatus/UnverifiedStatus';

import UserStore from '../../../stores/UserStore';

import useGetUserPendingTransactions from '../../../hooks/useGetUserPendingTransactions';


const Transactions = () => {
    const navigation = useNavigation();
    const user = UserStore(state => state.user);

    // Get userToken stat for api call
    const token = UserStore(state => state.userToken)
    const setUserPendingTransactions = UserStore((state) => state.setUserPendingTransactions)
    const setUserCurrentTransactions = UserStore((state) => state.setUserCurrentTransactions)
    const setUserCompletedTransactions = UserStore((state) => state.setUserCompletedTransactions)

    // Hook for getting user's pending transactions
    const { pendingTransactions, loadingPendingTransactions } = useGetUserPendingTransactions();

    // Initialize display tabs
    const [activeTab, setActiveTab] = useState('Pending');
    const [currentData, setCurrentData] = useState(pendingTransactions);
    const [currentLoading, setCurrentLoading] = useState(loadingPendingTransactions);

    // Set pending transactions
    const handleSetPending = () => {
        setActiveTab('Pending')
        setCurrentLoading(true)
        axios({
            method: 'get',
            url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=PENDING',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            }).then((response) => {
                setCurrentData(response.data.results)
                setUserPendingTransactions(response.data.results)
                setCurrentLoading(false)
            }).catch(function (error) {
                setCurrentLoading(false)
                console.log(error)
        });
    }

    // Set current transactions
    const handleSetExisting = () => {
        setActiveTab('Existing')
        setCurrentLoading(true)
        axios({
            method: 'get',
            url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=CURRENT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            }).then((response) => {
                setCurrentData(response.data.results)
                setUserCurrentTransactions(response.data.results)
                setCurrentLoading(false)
            }).catch(function (error) {
                setCurrentLoading(false)
                console.log(error)
        });
    }

    // Set completed transactions
    const handleSetCompleted = () => {
        setActiveTab('Completed')
        setCurrentLoading(true)
        axios({
            method: 'get',
            url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=COMPLETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            }).then((response) => {
                setCurrentData(response.data.results)
                setUserCompletedTransactions(response.data.results)
                setCurrentLoading(false)
            }).catch(function (error) {
                setCurrentLoading(false)
                console.log(error)
        });
    }

    // Handling TransactionsCardMenuModal
    const [isMenuVisible, setMenuVisible] = useState(false);
    const showMenu = () => {
        setMenuVisible(true);
      };
    const hideMenu = () => {
        setMenuVisible(false);
    };
    const handleNavigateTransactionDetails = (id, type) =>
        navigation.navigate("Transactions", {
            screen: "TransactionDetails",
            params: {
                transactionID: id,
                transactionType: type,
            }
    });
    const handleNavigateTransactionPayments = (id, type) =>
        navigation.navigate("Transactions", {
            screen: "TransactionPayments",
            params: {
                transactionID: id,
                transactionType: type,
            }
    });
    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            setMenuVisible(false);
        });
    
        return unsubscribeFocus;
      }, [navigation]);

    return (
        <TransactionsContainer>
            <TransactionsTitleContainer>
                <TransactionsTitleText>Transactions</TransactionsTitleText>
            </TransactionsTitleContainer>
            <SelectorContainer>
                <SelectorButtonsContainer onPress={handleSetPending} active={activeTab === 'Pending'} disabled={!user.buyAuthorized}>
                    <SelectorButtonText active={activeTab === 'Pending'}>Pending</SelectorButtonText>
                </SelectorButtonsContainer>
                <SelectorButtonsContainer onPress={handleSetExisting} active={activeTab === 'Existing'} disabled={!user.buyAuthorized}>
                    <SelectorButtonText active={activeTab === 'Existing'}>Existing</SelectorButtonText>
                </SelectorButtonsContainer>
                <SelectorButtonsContainer onPress={handleSetCompleted} active={activeTab === 'Completed'} disabled={!user.buyAuthorized}>
                    <SelectorButtonText active={activeTab === 'Completed'}>Completed</SelectorButtonText>
                </SelectorButtonsContainer>
            </SelectorContainer>
            {
                !user.buyAuthorized ? (
                    <TransactionScrollContainer>
                        <UnverifiedStatus />
                    </TransactionScrollContainer>
                ) : ( 
                    <TransactionScrollContainer>
                        {
                            currentLoading === true ? (
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                                    <ActivityIndicator size="large" color="#FF873A"/>
                                </View>
                            ) : (
                                currentData.length !== 0 ? (
                                    currentData.map((item, index) => (
                                        <TransactionsCard
                                            key={item.id}
                                            id={item.id}
                                            onPressDetails={() => { handleNavigateTransactionDetails(item.id, activeTab); }}
                                            onPressPayments={() => { handleNavigateTransactionPayments(item.id, activeTab); }}
                                            onPressDocuments={() => navigation.navigate('Transactions',{screen: "TransactionDocuments"})}
                                        />
                                    ))
                                ) : (
                                    <TransactionsListTextContainer>
                                        <TransactionsListText>There are no transactions listed.</TransactionsListText>
                                    </TransactionsListTextContainer>
                                )
                            )
                        }
                    </TransactionScrollContainer>
                )
            }
        </TransactionsContainer>
    )
}

export default Transactions