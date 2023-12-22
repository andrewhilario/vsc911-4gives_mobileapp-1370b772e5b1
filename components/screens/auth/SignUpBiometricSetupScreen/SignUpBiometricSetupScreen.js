import React from 'react'
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, ButtonContainer, FormContainer, FormText, FormTextContainer, Logo, LogoContainer, SignUpBiometricSetupContainer, SignUpBiometricSetupTitleContainer, SignUpBiometricSetupTitleText } from './styles';

import { colors } from '../../../../constants/Colors';
import BiometricsIllustration from '../../../../assets/images/onboarding/biometrics-illustration.png'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import UserStore from '../../../../stores/UserStore';

const SignUpBiometricSetupScreen = ({navigation}) => {
    const setLoggedIn = UserStore((state) => state.setLoggedIn)
    return (
        <SignUpBiometricSetupContainer>
            <SignUpBiometricSetupTitleContainer>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
                <SignUpBiometricSetupTitleText>Biometric Setup</SignUpBiometricSetupTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </SignUpBiometricSetupTitleContainer>
            <FormContainer>
                <LogoContainer>
                    <Logo source={BiometricsIllustration}/>
                </LogoContainer>
                <FormTextContainer>
                    <FormText size={18} color={colors.basic.basic900}>Fingerprint Recognition</FormText>
                    <FormText size={12} color={colors.basic.basic500}>Enhance the security of your mobile app{'\n'}with the latest in biometric technology.</FormText>
                </FormTextContainer>
                <ButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Get Started' textSize='18'/>
                </ButtonContainer>
                <ButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Skip' textSize='18'
                        onPress={() => setLoggedIn()}/>
                </ButtonContainer>
            </FormContainer>
        </SignUpBiometricSetupContainer>
    )
}

export default SignUpBiometricSetupScreen