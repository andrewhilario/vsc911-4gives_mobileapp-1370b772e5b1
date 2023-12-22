import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, ButtonContainer, FormContainer, FormText, FormTextContainer, Logo, LogoContainer, SignUpDocumentsStatusContainer, SignUpDocumentsStatusTitleContainer, SignUpDocumentsStatusTitleText } from './styles'

import { colors } from '../../../../constants/Colors';
import DocumentsIllustration from '../../../../assets/images/onboarding/documents-illustration.png'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import BuyerAuthStore from '../../../../stores/BuyerAuthStore';
const SignUpDocumentsStatusScreen = ({navigation}) => {
    //reset states
    const isDocumentsUploaded = BuyerAuthStore(state => state.isDocumentsUploaded)
    const setIsDocumentsUploadedFalse = BuyerAuthStore((state) => state.setIsDocumentsUploadedFalse)
    useEffect(() => {
        if(isDocumentsUploaded === true){
            setIsDocumentsUploadedFalse()
        }
    }, [isDocumentsUploaded])
    
    return (
        <SignUpDocumentsStatusContainer>
            <SignUpDocumentsStatusTitleContainer>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
                <SignUpDocumentsStatusTitleText>Documents</SignUpDocumentsStatusTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </SignUpDocumentsStatusTitleContainer>
            <FormContainer>
                <LogoContainer>
                    <Logo source={DocumentsIllustration}/>
                </LogoContainer>
                <FormTextContainer>
                    <FormText size={18} color={colors.basic.basic900}>Thank you!</FormText>
                    <FormText size={12} color={colors.basic.basic500}>Your data is being processed and you can already {'\n'}enjoy all features of the application</FormText>
                </FormTextContainer>
                <ButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Next' textSize='18'
                    onPress={() => navigation.navigate('SignUpBiometricSetup')}/>
                </ButtonContainer>
            </FormContainer>
        </SignUpDocumentsStatusContainer>
    )
}

export default SignUpDocumentsStatusScreen