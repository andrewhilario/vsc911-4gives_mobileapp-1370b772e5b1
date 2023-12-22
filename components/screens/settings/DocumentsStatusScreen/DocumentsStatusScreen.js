import React from 'react'
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, DocumentsStatusContainer, DocumentsStatusTitleContainer, DocumentsStatusTitleText, FormContainer, FormText, FormTextContainer, Logo, LogoContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import DocumentsIllustration from '../../../../assets/images/onboarding/documents-illustration.png';

const DocumentsStatusScreen = ({navigation}) => {
  return (
    <DocumentsStatusContainer>
        <DocumentsStatusTitleContainer>
            <BackContainer>
                <BackButton onPress={() => navigation.navigate('DocumentsMain')}>
                    <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                </BackButton>
            </BackContainer>
            <DocumentsStatusTitleText>Documents</DocumentsStatusTitleText>
            <BackContainer>
                <BackButton>
                    <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                </BackButton>
            </BackContainer>
        </DocumentsStatusTitleContainer>
        <FormContainer>
            <LogoContainer>
                <Logo source={DocumentsIllustration}/>
            </LogoContainer>
            <FormTextContainer>
                <FormText size={18} color={colors.basic.basic900}>Thank you!</FormText>
                <FormText size={12} color={colors.basic.basic500}>Your data is being processed and you can already {'\n'}enjoy all features of the application</FormText>
            </FormTextContainer>
        </FormContainer>
    </DocumentsStatusContainer>
  )
}

export default DocumentsStatusScreen