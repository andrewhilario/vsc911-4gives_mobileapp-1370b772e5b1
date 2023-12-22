import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import { IconContainer, ReminderStatusContainer, ReminderText, ReminderTextContainer } from './styles'

const ReminderStatus = ({reminderNote}) => {
    return (
        <ReminderStatusContainer>
            <IconContainer>
                <FontAwesome name="warning" size={25} color="#FF873A" />
            </IconContainer>
            <ReminderTextContainer>
                <ReminderText>Note: {reminderNote}</ReminderText>
            </ReminderTextContainer>
        </ReminderStatusContainer>
    )
}

export default ReminderStatus