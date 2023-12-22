import React from 'react'

import { ButtonContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, Logo, LogoContainer, SignUpVerificationStatusContainer } from './styles'

import { colors } from '../../../../constants/Colors'
import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'

const SignUpVerificationStatusScreen = () => {
  return (
    <SignUpVerificationStatusContainer>
        <LogoContainer>
            <Logo source={OnboardingImage}/>
        </LogoContainer>
        <FormViewContainer>
            <HeaderContainer>
                <HeaderText>Verification Failed</HeaderText>
                <HeaderSubText>You have reached the maximum limit of 5 OTP requests. Please try again in an hour.</HeaderSubText>
            </HeaderContainer>
            <ButtonContainer>
                <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Return to Sign Up' textSize='18'/>
            </ButtonContainer>
        </FormViewContainer>
    </SignUpVerificationStatusContainer>
  )
}

export default SignUpVerificationStatusScreen