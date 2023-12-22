import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonContainer, FieldContainer, FieldLabelText, FieldTitleText, FieldsContainer, FooterColoredSubText, FooterContainer, FooterSubText, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, Logo, LogoContainer, RowContainer, SignUpConfirmationContainer } from './styles'

import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'


const SignUpConfirmationScreen = ({navigation}) => {
  return (
    <SignUpConfirmationContainer>
        <LogoContainer>
            <Logo source={OnboardingImage}/>
        </LogoContainer>
        <FormViewContainer>
            <HeaderContainer>
                <HeaderText>Sign up</HeaderText>
                <HeaderSubText>Congratulations! Your company allowed you to create a 4Gives account. Kindly review the following information provided.</HeaderSubText>
            </HeaderContainer>
            <FieldsContainer>
                <FieldContainer width='100%'>
                    <FieldTitleText>Company</FieldTitleText>
                    <FieldLabelText>Stellar Technologies Inc.</FieldLabelText>
                </FieldContainer>
                <RowContainer>
                    <FieldContainer width='50%'>
                        <FieldTitleText>First Name</FieldTitleText>
                        <FieldLabelText>Juan</FieldLabelText>
                    </FieldContainer>
                    <FieldContainer width='50%'>
                        <FieldTitleText>Middle Name</FieldTitleText>
                        <FieldLabelText>Luna</FieldLabelText>
                    </FieldContainer>
                </RowContainer>
                <FieldContainer width='100%'>
                    <FieldTitleText>Last Name</FieldTitleText>
                    <FieldLabelText>Dela Cruz</FieldLabelText>
                </FieldContainer>
            </FieldsContainer>
            <ButtonContainer>
                <ButtonText buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Confirm' textSize='18'
                onPress={() => navigation.navigate('SignUpDocumentsMain')}/>
            </ButtonContainer>
            <FooterContainer>
                <FooterSubText>Already have an account?</FooterSubText>
                <TouchableOpacity>
                <FooterColoredSubText>Log In</FooterColoredSubText>
                </TouchableOpacity>
            </FooterContainer>
        </FormViewContainer>
    </SignUpConfirmationContainer>
  )
}

export default SignUpConfirmationScreen