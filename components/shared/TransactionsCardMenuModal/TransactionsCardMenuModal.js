import React, { useEffect } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import { CloseContainer, OptionButton, OptionText, Overlay, TransactionsCardMenuModalContainer } from './styles'

import { colors } from '../../../constants/Colors';

const TransactionsCardMenuModal = ({ visible, exitOnPress, option1OnPress, option2OnPress, option3OnPress, navigation}) => {
    // Get userToken stat for api call
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <Overlay>
                <TransactionsCardMenuModalContainer>
                    <CloseContainer>
                        <TouchableOpacity onPress={exitOnPress}>
                            <Feather name="x" size={24} color={colors.primary.primary500} />
                        </TouchableOpacity>
                    </CloseContainer>
                    <OptionButton onPress={option1OnPress}>
                        <OptionText>Details</OptionText>
                    </OptionButton>
                    <OptionButton onPress={option2OnPress}>
                        <OptionText>Payments</OptionText>
                    </OptionButton>
                    <OptionButton onPress={option3OnPress}>
                        <OptionText>Documents</OptionText>
                    </OptionButton>
                </TransactionsCardMenuModalContainer>
            </Overlay>
        </Modal>
    )
}

export default TransactionsCardMenuModal