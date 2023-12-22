import React from 'react'
import { Feather, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { ButtonContainer, IconContainer, MenuButtonText, MenuButtonTextContainer } from './styles';
import { colors } from '../../../constants/Colors'

const ActionSheetMenuButton = ({ text, variant, onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
        <IconContainer>
            {
                variant === 'library' ? (
                    <MaterialIcons name="photo" size={24} color={colors.primary.primary500} />
                ) : variant === 'camera' ? (
                    <MaterialIcons name="photo-camera" size={24} color={colors.primary.primary500} />
                ) : variant === 'cancel' ? (
                    <Feather name="x" size={24} color={colors.primary.primary500} />
                ) :  null
            }
        </IconContainer>
        <MenuButtonTextContainer>
            <MenuButtonText color={colors.basic.basic900}>{text}</MenuButtonText>
        </MenuButtonTextContainer>
    </ButtonContainer>
  )
}

export default ActionSheetMenuButton