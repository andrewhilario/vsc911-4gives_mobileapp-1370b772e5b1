import React, { useState } from 'react'

import { ButtonContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, Logo, LogoContainer, SignUpStatusContainer } from './styles'

import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'

import UserStore from '../../../../stores/UserStore'

const SignUpStatusScreen = ({navigation}) => {
    const setLoggedIn = UserStore((state) => state.setLoggedIn)
    const [mode, setMode] = useState('accountPending')
    //mode = accountExist, accountPending

    return (
        <SignUpStatusContainer>
            <LogoContainer>
                <Logo source={OnboardingImage}/>
            </LogoContainer>
            <FormViewContainer>
                {
                    mode === 'accountExist' ? (
                        <>
                            <HeaderContainer>
                                <HeaderText>Account already exist</HeaderText>
                                <HeaderSubText>It seems you already have an account.</HeaderSubText>
                            </HeaderContainer>
                            <ButtonContainer>
                                <ButtonText buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Return to Login' textSize='18'
                                onPress={() => navigation.navigate('Login')}/>
                            </ButtonContainer>
                        </>
                    ) : (
                        <>
                            <HeaderContainer>
                                <HeaderText>Your sign-up request cannot be accepted</HeaderText>
                                <HeaderSubText>We have created an account for you however, your company needs to verify your account to start using the application features.</HeaderSubText>
                            </HeaderContainer>
                            <ButtonContainer>
                                <ButtonText buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Return to Login' textSize='18'
                                onPress={() => navigation.navigate('Login')}/>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonText buttonColor='#FF873A' textColor='#FF873A' type='non-filled' text='Learn more' textSize='18'/>
                            </ButtonContainer>
                        </>
                    )
                }
            </FormViewContainer>
        </SignUpStatusContainer>
    )
}

export default SignUpStatusScreen