import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import { ButtonContainer, CustomInputContainer, CustomText, Input, InputContainer, NumberContainer, NumberText, StatusColoredSubText, StatusContainer, StatusSubText } from './styles'

import { colors } from '../../../constants/Colors';
import { iconNames } from '../../../constants/IconNames';
import Icons from '../../../common/Icons';

const TextInput = ({
    width = "100%",
    customLabel,
    labelTextSize = '20px',
    variant,
    inputProps,
    inputFontSize,
    isPassword,
    isLoginDisabled,
    hasStatus = false,
    statusText,
    statusOnPress,
    statusOnPressText,
    isMobileNumber = false,
    isFilled = false,
}) => {
    // password states
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <CustomInputContainer width={width}>
            {customLabel && <CustomText labelTextSize={labelTextSize} isLoginDisabled={isLoginDisabled}>{customLabel}</CustomText>}
            {
                isMobileNumber === false ? (
                    <InputContainer variant={variant} isFilled={isFilled} isLoginDisabled={isLoginDisabled}>
                        <Input 
                            {...inputProps}
                            inputFontSize={inputFontSize}
                            secureTextEntry={isPassword && !isPasswordVisible}
                            isPassword={isPassword}
                        />
                        {
                            isPassword === true && 
                                <ButtonContainer>
                                    <TouchableOpacity onPress={togglePasswordVisibility}>
                                        {
                                            isPasswordVisible ? (
                                                <Entypo name="eye" size={24} color={isLoginDisabled ? colors.primary.primary700 
                                                    : isFilled ? colors.basic.basic900 : colors.basic.basic300} />
                                            ) : (
                                                <Entypo name="eye-with-line" size={24} color={isLoginDisabled ? colors.primary.primary700 
                                                    :isFilled ? colors.basic.basic900 : colors.basic.basic300} />
                                            )
                                        }
                                    </TouchableOpacity>
                                </ButtonContainer>
                        }
                    </InputContainer>
                ) : (
                    <InputContainer variant={variant} isFilled={isFilled}>
                        <NumberContainer>
                            <NumberText>+63</NumberText>
                        </NumberContainer>
                        <Input {...inputProps}/>
                    </InputContainer>
                )
            }
            
            {hasStatus === true && 
                <StatusContainer>
                    {statusText && 
                        <StatusSubText>{statusText}</StatusSubText>
                    }
                    {(statusOnPressText || statusOnPress) && 
                        <TouchableOpacity onPress={statusOnPress}>
                            <StatusColoredSubText>{statusOnPressText}</StatusColoredSubText>
                        </TouchableOpacity>
                    }
                </StatusContainer>
            }
        </CustomInputContainer>
    )
}

export default TextInput