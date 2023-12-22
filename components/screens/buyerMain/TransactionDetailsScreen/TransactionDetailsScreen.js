import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Text } from 'react-native'
import { NumericFormat } from 'react-number-format';
import { Feather } from '@expo/vector-icons';

import { BackgroundColor1, CloseButton, CloseContainer, OrderDetailsContainer, OrderDetailsTextContainer, OrderItemContainer, ScrollContainer, TitleLeftText, TitleRightText, TransactionDetailContainer, TransactionDetailTitleContainer, TransactionDetailTitleText, TransactionDetailViewContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader';

import UserStore from '../../../../stores/UserStore';

import useFormatDate from '../../../../hooks/useFormatDate';
import useGetUserTransaction from '../../../../hooks/useGetUserTransaction';

const TransactionDetailsScreen = ({route, navigation}) => {
    //handling first name display
    const user = UserStore(state => state.user);
    const header = `Hi, ${user.first_name}!`;

    const { transactionID, transactionType } = route.params;
    console.log('transaction id:',transactionID)
    console.log('transaction type:',transactionType)

    const transactions = UserStore(state => state.userCurrentTransactions);
    const targetTransaction = transactions.find(item => item.id === transactionID)

    return (
        <TransactionDetailContainer>
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
                <TransactionDetailViewContainer>
                    <TransactionDetailTitleContainer>
                        <TransactionDetailTitleText>Transaction Details</TransactionDetailTitleText>
                        <CloseContainer>
                            <CloseButton onPress={() => navigation.goBack()}>
                                <Feather name="x" size={24} color={colors.primary.primary500} />
                            </CloseButton>
                        </CloseContainer>
                    </TransactionDetailTitleContainer>
                    <OrderDetailsContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Transaction Date</TitleLeftText>
                            <TitleRightText isBlack={true}>{useFormatDate(targetTransaction.created, 'with-month')}</TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Reference No.</TitleLeftText>
                            <TitleRightText isBlack={true}>{targetTransaction.reference}</TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Merchant Name</TitleLeftText>
                            <TitleRightText isBlack={true}>{targetTransaction.merchant_name}</TitleRightText>
                        </OrderDetailsTextContainer>
                    </OrderDetailsContainer>
                    {/* <OrderDetailsContainer>
                        <OrderItemContainer>
                            <OrderDetailsTextContainer>
                                <TitleLeftText isBlack={true}>{order.quantity}x</TitleLeftText>
                                <TitleRightText isBlack={true}>
                                    <NumericFormat
                                        value={order.item_amount}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'₱'}
                                        decimalScale={2}
                                        renderText={value => <Text>{value}</Text>}
                                    />
                                </TitleRightText>
                            </OrderDetailsTextContainer>
                            <OrderDetailsTextContainer isLeft={true}>
                                <TitleLeftText isBlack={true}>{order.item_name}</TitleLeftText>
                            </OrderDetailsTextContainer>
                        </OrderItemContainer>
                    </OrderDetailsContainer> */}
                    <OrderDetailsContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Terms</TitleLeftText>
                            <TitleRightText isBlack={true}>{targetTransaction.terms}</TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Start Date</TitleLeftText>
                            <TitleRightText isBlack={true}>{targetTransaction.payments ? useFormatDate(targetTransaction.payments[0].interval_date, 'with-month') : 'None'}</TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>End Date</TitleLeftText>
                            <TitleRightText isBlack={true}>{useFormatDate(targetTransaction.end_date, 'with-month')}</TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText isBlack={true}>Monthly Amortization</TitleLeftText>
                            <TitleRightText isBlack={true}>
                                <NumericFormat
                                    value={targetTransaction.monthly}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₱ '}
                                    decimalScale={2}
                                    renderText={value => <Text>{value}</Text>}
                                />
                            </TitleRightText>
                        </OrderDetailsTextContainer>
                    </OrderDetailsContainer>
                    <OrderDetailsContainer>
                        <OrderDetailsTextContainer isLeft={true}>
                            <TitleLeftText>Payment Source</TitleLeftText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer isLeft={true}>
                            <TitleLeftText isBlack={true}>{targetTransaction.id}</TitleLeftText>
                        </OrderDetailsTextContainer>
                    </OrderDetailsContainer>
                </TransactionDetailViewContainer>
            </ScrollContainer>
        </TransactionDetailContainer>
    )
}

export default TransactionDetailsScreen