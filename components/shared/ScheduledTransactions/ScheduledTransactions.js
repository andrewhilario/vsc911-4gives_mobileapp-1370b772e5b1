import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';

import { AmountText, DateText, HelpButton, ScheduledTransactionsContainer, ScheduledTransactionsListContainer, ScheduledTransactionsListText, ScheduledTransactionsListTextContainer, ScheduledTransactionsTitleContainer, ScheduledTransactionsTitleText, Status, StatusContainer, StatusText, TransactionPaymentContainer, TransactionPaymentItemContainer } from './styles'

import { SampleScheduledTransactions } from '../../../constants/SampleData';
import ScheduledTransactionsItem from '../ScheduledTransactionsItem/ScheduledTransactionsItem';

const ScheduledTransactions = ({scheduledTransactions, isLoading}) => {
  return (
    <ScheduledTransactionsContainer>
      <ScheduledTransactionsTitleContainer>
        <ScheduledTransactionsTitleText>Scheduled Transactions</ScheduledTransactionsTitleText>
      </ScheduledTransactionsTitleContainer>
      {
        isLoading === true ? (
          <View style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
            <ActivityIndicator size="large" color="#FF873A"/>
          </View>
        ) : (
          scheduledTransactions?.length !== 0 ? (
            scheduledTransactions?.map((item, index) => (
              <ScheduledTransactionsItem 
                key={index}
                transactionDate={item.interval_date}
                merchantName={item.name}
                amount={item.amount}
                status={item.status}
              />
            ))
          ) : (
            <ScheduledTransactionsListTextContainer>
              <ScheduledTransactionsListText>There are no scheduled transactions listed.</ScheduledTransactionsListText>
            </ScheduledTransactionsListTextContainer>
          )
        )
      }
    </ScheduledTransactionsContainer>
  )
}

export default ScheduledTransactions