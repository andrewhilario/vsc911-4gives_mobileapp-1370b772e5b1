import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { NumericFormat } from 'react-number-format';

import { LeftText, PaymentSourceCardContainer, RightText, StatusContainer, StatusText, TextRowContainer } from './styles'

import { colors } from '../../../constants/Colors';

const PaymentSourceCard = ({employerName, employerType, creditLimit, availableCredit, status}) => {
    const [color, setColor] = useState('');
    const [isApproved, setIsApproved] = useState(false);

    useEffect(() => {
        switch (status) {
            case 'Approved':
                setIsApproved(true)
                break;
            case 'Declined':
                setColor(colors.secondary.secondary800)
                setIsApproved(false)
                break;
            case 'Pending':
                setColor(colors.secondary.secondary700)
                setIsApproved(false)
                break;
            default:
                break;
        }
    }, [status])
    
    return (
        <PaymentSourceCardContainer>
            <StatusContainer statusColor={color} isApproved={isApproved}>
                <StatusText isApproved={isApproved}>{status}</StatusText>
            </StatusContainer>
            <TextRowContainer>
                <LeftText>Employer Type</LeftText>
                <RightText>{employerType ? employerType : 'Not indicated'}</RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Employer</LeftText>
                <RightText>{employerName ? employerName : 'Not indicated'}</RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Credit Limit</LeftText>
                <RightText>
                    <NumericFormat
                        value={creditLimit}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Available Credit</LeftText>
                <RightText>
                    <NumericFormat
                        value={availableCredit}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </RightText>
            </TextRowContainer>
        </PaymentSourceCardContainer>
    )
}

export default PaymentSourceCard