import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NumericFormat } from 'react-number-format';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { LeftText, MenuButtonContainer, RightText, RowContainer, StatusContainer, StatusText, TextRowContainer, TransactionsCardContainer } from './styles'

import { colors } from '../../../constants/Colors';
import useFormatDate from '../../../hooks/useFormatDate';
import UserStore from '../../../stores/UserStore';

const TransactionsCard = ({onPressDetails, onPressPayments, onPressDocuments, id}) => {    
    console.log('card', id)
    const transactions = UserStore(state => state.userCurrentTransactions);
    const targetTransaction = transactions.find(item => item.id === id)

    const [color, setColor] = useState('');
    const [isApproved, setIsApproved] = useState(false);
    const [label, setLabel] = useState('');

    useEffect(() => {
        switch (targetTransaction.status) {
            case 'Completed':
                setIsApproved(true)
                setLabel('Completed')
                break;
            case 'CURRENT':
                setColor(colors.secondary.secondary800)
                setIsApproved(false)
                setLabel('Existing')
                break;
            case 'Pending':
                setColor(colors.secondary.secondary700)
                setIsApproved(false)
                setLabel('Pending')
                break;
            default:
                break;
        }
    }, [targetTransaction.status])

    return (
        <TransactionsCardContainer>
            {/* <TextRowContainer>
                <LeftText>ID</LeftText>
                <RightText isHiglighted={true} isBold={true}>{id}</RightText>
            </TextRowContainer> */}
            <RowContainer>
                <StatusContainer statusColor={color} isApproved={isApproved}>
                    <StatusText isApproved={isApproved}>{label}</StatusText>
                </StatusContainer>
                <MenuButtonContainer>
                    <TouchableOpacity onPress={onPressDetails}>
                        <Ionicons name="ellipsis-vertical" size={20} color={colors.basic.basic500}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressPayments}>
                        <MaterialIcons name="payments" size={20} color={colors.basic.basic500}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressDocuments}>
                        <Entypo name="text-document" size={20} color={colors.basic.basic500} />
                    </TouchableOpacity>
                </MenuButtonContainer>
            </RowContainer>
            <TextRowContainer>
                <LeftText>Transaction Date</LeftText>
                <RightText isHiglighted={true} isBold={true}>{useFormatDate(targetTransaction.created, 'numbers')}</RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Merchant Name</LeftText>
                <RightText isHiglighted={true} isBold={true}>{targetTransaction.name}</RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Amount</LeftText>
                <RightText isHiglighted={true} isBold={true}>
                    <NumericFormat
                        value={targetTransaction.amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>Terms</LeftText>
                <RightText isHiglighted={true} isBold={true}>{targetTransaction.terms}</RightText>
            </TextRowContainer>
            <TextRowContainer>
                <LeftText>ID</LeftText>
                <RightText isHiglighted={true} isBold={true}>{targetTransaction.id}</RightText>
            </TextRowContainer>
        </TransactionsCardContainer>
    )
}

export default TransactionsCard