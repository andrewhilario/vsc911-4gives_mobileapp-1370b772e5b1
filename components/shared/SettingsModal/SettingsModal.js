import React from 'react'
import { Modal } from 'react-native'

import { ButtonRowContainer, Overlay, SettingsModalBodyContainer, SettingsModalBodyText, SettingsModalContainer, SettingsModalTitleContainer, SettingsModalTitleText } from './styles'

import { colors } from '../../../constants/Colors'
import ButtonText from '../ButtonText/ButtonText'

const SettingsModal = ({visible, title, body, onCancel, onPress}) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <Overlay>
                <SettingsModalContainer>
                    <SettingsModalTitleContainer>
                        <SettingsModalTitleText>{title}</SettingsModalTitleText>
                    </SettingsModalTitleContainer>
                    <SettingsModalBodyContainer>
                        <SettingsModalBodyText>{body}</SettingsModalBodyText>
                    </SettingsModalBodyContainer>
                    <ButtonRowContainer>
                        <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Cancel' textSize='18' 
                            onPress={onCancel}/>
                        <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Logout' textSize='18' 
                            onPress={onPress}/>
                    </ButtonRowContainer>
                </SettingsModalContainer>
            </Overlay>
        </Modal>
    )
}

export default SettingsModal