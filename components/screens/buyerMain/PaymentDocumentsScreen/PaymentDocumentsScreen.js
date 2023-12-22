import React, { useState } from 'react'
import { BottomBorder, ButtonContainer, DocumentsContainer, FeatureRowContainer, FormContainer, HolderContainer, InformationText, InformationTextContainer, PaymentDocumentsContainer, ScrollContainer, SelectorButtonText, SelectorButtonsContainer, SelectorContainer, TransactionContainer } from './styles'

import { SampleDocumentText } from '../../../../constants/SampleData';
import { colors } from '../../../../constants/Colors';
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../../shared/ButtonText/ButtonText';


const PaymentDocumentsScreen = ({navigation}) => {
    const [activeTab, setActiveTab] = useState('Contract');
    return (
        <PaymentDocumentsContainer>
            <ScreenHeader variant='cancel' onRightPress={() => navigation.goBack()}/>
            <ScrollContainer>
                <DocumentsContainer>
                    <SelectorContainer>
                        <SelectorButtonsContainer onPress={() => setActiveTab('Contract')} active={activeTab === 'Contract'}>
                            <SelectorButtonText active={activeTab === 'Contract'}>Contract</SelectorButtonText>
                        </SelectorButtonsContainer>
                        <SelectorButtonsContainer onPress={() => setActiveTab('Promissory Note')} active={activeTab === 'Promissory Note'}>
                            <SelectorButtonText active={activeTab === 'Promissory Note'}>Promissory Note</SelectorButtonText>
                        </SelectorButtonsContainer>
                    </SelectorContainer>
                    <FormContainer>
                        {
                            activeTab === 'Contract' ? (
                                <InformationText isDocument={true}>
                                    {SampleDocumentText}
                                </InformationText>
                            ) : (
                                <InformationText isDocument={true}>
                                    {SampleDocumentText}
                                </InformationText>
                            )
                        }
                    </FormContainer>
                    <InformationTextContainer>
                        <InformationText>
                            By clicking accept, I confirm that I have read and understood this statement, and I accept and agree to all its conditions.
                        </InformationText>
                    </InformationTextContainer>
                    <ButtonContainer>
                        <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Accept' textSize='20'
                            onPress={() => navigation.navigate('Buyer', {screen: 'PaymentOTP'})}/>
                    </ButtonContainer>
                    {/* <ButtonContainer>
                        <ButtonText buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Change payment source' textSize='20'
                                onPress={() => navigation.goBack()}/>
                    </ButtonContainer> */}
                </DocumentsContainer>
            </ScrollContainer>
            
        </PaymentDocumentsContainer>
  )
}

export default PaymentDocumentsScreen