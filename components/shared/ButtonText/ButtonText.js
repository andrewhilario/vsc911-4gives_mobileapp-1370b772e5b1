import React from 'react'
import { ButtonContainer, ButtonLabel } from './styles'

const ButtonText = ({ 
    width = "100%", 
    buttonColor, 
    type,
    text, 
    textSize, 
    textColor,
    paddingSize,
    isDisabled = false,
    onPress,}) => {
    return (
        <ButtonContainer  
            width={width} 
            buttonColor={buttonColor} 
            type={type}
            paddingSize={paddingSize}
            isDisabled={isDisabled}
            onPress={onPress}
            disabled={isDisabled}
        >
            <ButtonLabel  type={type} textSize={textSize} textColor={textColor} isDisabled={isDisabled}>{text}</ButtonLabel>
        </ButtonContainer>
    )
}

export default ButtonText