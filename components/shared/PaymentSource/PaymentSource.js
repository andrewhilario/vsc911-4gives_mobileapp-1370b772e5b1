import React, { useRef, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AddPaymentSourceButton, AddPaymentSourceButtonText, AddPaymentSourceContainer, AddPaymentSourceIcon, BottomBorder, PaginationContainer, PaginationDot, PaymentSourceCardContainer, PaymentSourceContainer, PaymentSourceScrollContainer, PaymentSourceTitleContainer, PaymentSourceTitleText } from './styles'

import { SamplePaymentSources } from '../../../constants/SampleData';
import PaymentSourceCard from '../PaymentSourceCard/PaymentSourceCard';
import UnverifiedStatus from '../UnverifiedStatus/UnverifiedStatus';

import UserStore from '../../../stores/UserStore';

const PaymentSource = ({paymentSourceData, isLoading}) => {
    const user = UserStore(state => state.user);
    return (
        <PaymentSourceContainer>
            <PaymentSourceTitleContainer>
                <PaymentSourceTitleText>Payment Source</PaymentSourceTitleText>
                <AddPaymentSourceButton disabled={!user.buyAuthorized} isDisabled={!user.buyAuthorized}>
                    <AddPaymentSourceButtonText>Add</AddPaymentSourceButtonText>
                    <AddPaymentSourceIcon>
                        <Ionicons name="add-outline" size={20} color="white" />
                    </AddPaymentSourceIcon>
                </AddPaymentSourceButton>
            </PaymentSourceTitleContainer>
            {
                !user.buyAuthorized? (
                    <PaymentSourceScrollContainer>
                        <UnverifiedStatus />
                    </PaymentSourceScrollContainer>
                ) : (
                    <PaymentSourceScrollContainer>
                        {
                            isLoading === true ? (
                                <View style={{flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                                    <ActivityIndicator size="large" color="#FF873A"/>
                                </View>
                            ) : (
                                paymentSourceData.map((item, index) => (
                                    <PaymentSourceCard
                                        key={index}
                                        employerName={item.name}
                                        employerType={item.source_type}
                                        creditLimit={item.spendLimit}
                                        availableCredit={item.available_spend_limit}
                                        // status={item.status}
                                    />
                                ))
                                // null
                            )
                        }
                    </PaymentSourceScrollContainer>
                )
            }
        </PaymentSourceContainer>
  )
}

export default PaymentSource