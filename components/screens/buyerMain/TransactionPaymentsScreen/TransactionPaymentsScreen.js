import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';

import { BackgroundColor1, CloseButton, CloseContainer, HelpButton, PaymentDetailsTextContainer, PaymentItemContainer, ScrollContainer, Status, StatusContainer, TitleLeftText, TransactionPaymentsContainer, TransactionPaymentsTitleContainer, TransactionPaymentsTitleText, TransactionPaymentsViewContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader'
import TransactionPayment from '../../../shared/TransactionPayment/TransactionPayment';

import UserStore from '../../../../stores/UserStore';
import useFormatDate from '../../../../hooks/useFormatDate';

const TransactionPaymentsScreen = ({route, navigation}) => {
    //handling first name display
    const user = UserStore(state => state.user);
    const header = `Hi, ${user.first_name}!`;

    const { transactionID, transactionType } = route.params;
    console.log(transactionID)
    console.log(transactionType)

    const transactions = UserStore(state => state.userCurrentTransactions);
    const targetTransaction = transactions.find(item => item.id === transactionID)

    const payments = targetTransaction.payments
    
    return (
        <TransactionPaymentsContainer>
            <BackgroundColor1 />
            <MainScreenHeader leftText={header}
                leftOnPress={() => navigation.navigate('Settings', {
                    screen: 'SettingsMenu',
                })}
                firstRightButtonOnPress={() => navigation.navigate('Settings', 
                {screen: 'UserNotificationMail', params: {type: 'Notifications', key: Math.random().toString()}})}
                secondRightButtonOnPress={() => navigation.navigate('Settings', 
                {screen: 'UserNotificationMail', params: {type: 'Mail', key: Math.random().toString()}})}
            />
            <ScrollContainer>
                <TransactionPaymentsViewContainer>
                    <TransactionPaymentsTitleContainer>
                        <TransactionPaymentsTitleText>Payments {targetTransaction.id}</TransactionPaymentsTitleText>
                        <CloseContainer>
                            <CloseButton onPress={() => navigation.goBack()}>
                                <Feather name="x" size={24} color={colors.primary.primary500} />
                            </CloseButton>
                        </CloseContainer>
                    </TransactionPaymentsTitleContainer>
                    <PaymentItemContainer>
                        {
                            payments.map((item, index) => (
                                <TransactionPayment 
                                    key={index}
                                    amount={item.amount}
                                    date={useFormatDate(item.interval_date, 'numbers')}
                                    status={item.status}
                                />
                            ))
                        }
                    </PaymentItemContainer>
                </TransactionPaymentsViewContainer>
            </ScrollContainer>
        </TransactionPaymentsContainer>
    )
}

export default TransactionPaymentsScreen