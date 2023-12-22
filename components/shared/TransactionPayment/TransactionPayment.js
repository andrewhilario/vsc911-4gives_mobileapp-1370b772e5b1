import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import { HelpButton, PaymentDetailsTextContainer, Status, StatusContainer, StatusText, TitleLeftText, TransactionContainer } from './styles'

import { colors } from '../../../constants/Colors';

const TransactionPayment = ({amount, date, status}) => {
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
        <TransactionContainer>
            <PaymentDetailsTextContainer isLeft={true}>
                <TitleLeftText isBlack={true}>{amount}</TitleLeftText>
            </PaymentDetailsTextContainer>
            <PaymentDetailsTextContainer>
                <TitleLeftText isBlack={true}>{date}</TitleLeftText>
                <Status>
                    <StatusContainer statusColor={color} isApproved={isApproved}>
                        <StatusText isApproved={isApproved}>{label}</StatusText>
                    </StatusContainer>
                    <HelpButton>
                        <Ionicons name="information-circle-outline" size={22} color={colors.secondary.secondary800}/>
                    </HelpButton>
                </Status>
            </PaymentDetailsTextContainer>
        </TransactionContainer>
    ) 
}

export default TransactionPayment