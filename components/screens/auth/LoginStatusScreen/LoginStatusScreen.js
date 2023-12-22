import React from 'react'

import { ButtonContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, LogoContainer, ScrollContainer } from './styles'

import { colors } from '../../../../constants/Colors'
import ButtonText from '../../../shared/ButtonText/ButtonText'

const LoginStatusScreen = ({navigation}) => {
    return (
        <LoginStatusContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <FormViewContainer>
                <ScrollContainer>
                    <HeaderContainer>
                        <HeaderText>Locked account</HeaderText>
                        <HeaderSubText>You have reached the maximum limit of 5 attempts.</HeaderSubText>
                    </HeaderContainer>
                    <ButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Reset Password' textSize='18'
                    isDisabled={!isFormValid()} disabled={isFormValid()}
                    onPress={() => navigation.navigate('Login')}/>
                    </ButtonContainer>
                </ScrollContainer>
            </FormViewContainer>
        </LoginStatusContainer>
    )
}

export default LoginStatusScreen