import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { NumericFormat } from 'react-number-format';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { AmountText, DateText, HelpButton, Status, StatusContainer, StatusText, TransactionPaymentContainer, TransactionPaymentItemContainer } from './styles'

import { colors } from '../../../constants/Colors';
import useFormatDate from '../../../hooks/useFormatDate';

const ScheduledTransactionsItem = ({transactionDate, merchantName, amount, status}) => {
    const navigation = useNavigation();
    
    const [color, setColor] = useState('');
    const [isApproved, setIsApproved] = useState(false);
    const [label, setLabel] = useState('');

    useEffect(() => {
        switch (status) {
            case 'COMPLETED':
                setIsApproved(true)
                setLabel('Completed')
                break;
            case 'CURRENT':
                setColor(colors.secondary.secondary800)
                setIsApproved(false)
                setLabel('Current')
                break;
            case 'PENDING':
                setColor(colors.secondary.secondary700)
                setIsApproved(false)
                setLabel('Pending')
                break;
            default:
                break;
        }
    }, [status])
  
    return (
        <TransactionPaymentContainer>
            <TransactionPaymentItemContainer>
                <AmountText>{merchantName}</AmountText>
                <AmountText>
                    <NumericFormat
                        value={amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </AmountText>
            </TransactionPaymentItemContainer>        
            <TransactionPaymentItemContainer>
                <DateText>{useFormatDate(transactionDate, 'numbers')}</DateText>
                <Status>
                    <StatusContainer statusColor={color} isApproved={isApproved}>
                        <StatusText isApproved={isApproved}>{label}</StatusText>
                    </StatusContainer>
                    {
                        label === 'Pending' ? (
                            <HelpButton>
                                <Ionicons name="information-circle-outline" size={22} color={colors.tertiary.tertiary800}/>
                            </HelpButton>
                        ) : null
                    }
                </Status>
            </TransactionPaymentItemContainer>
        </TransactionPaymentContainer>
    )
}

export default ScheduledTransactionsItem