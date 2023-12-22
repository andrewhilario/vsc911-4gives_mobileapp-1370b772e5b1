import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ButtonContainer, DetailText, DetailsContainer, FormContainer, OfferContainer, OfferDetailContainer, OfferTitleContainer, OfferTitleText, OrderItemContainer, QuantityText, ScrollContainer, TextContainer, TitleLeftText, TitleRightText, TitleText } from './styles'

import { colors } from '../../../../constants/Colors';
import { debitScheduleData, installmentDurationData } from '../../../../constants/Data';
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

import TransactionStore from '../../../../stores/TransactionStore';
import UserStore from '../../../../stores/UserStore';
import AlertStore from '../../../../stores/AlertStore';

const OfferDetailScreen = ({route, navigation}) => {
    const { proposalID } = route.params

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //handle close alert
    const handleAlertClose = () => {
        hideAlert()
    }

    // fetching proposal details
    const userToken = UserStore(state => state.userToken)
    const [proposal, setProposal] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://dev.api.4gives.me/api/v1/transactions/proposal/${proposalID}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${userToken}`,
                    },
                })
                const data = await response.json()
                setProposal(data)
            }catch(error){
                console.log('failed to get proposal details')
            }
          };
          
        // Call the fetchData function to fetch and set the data
        fetchData();
    }, []);
    
    // State to store the selected installment duration
    const [selectedInstallmentDuration, setSelectedInstallmentDuration] = useState(0);
    // State to store the selected debit schedule
    const [selectedDebitSchedule, setSelectedDebitSchedule] = useState('');

    // Check if both values have some content
    const areValuesPresent = selectedInstallmentDuration !== '' && selectedDebitSchedule !== '';

    //initializing states
    const setRecentProposalDuration = TransactionStore((state) => state.setRecentProposalDuration)
    const setRecentProposalDebitSchedule = TransactionStore((state) => state.setRecentProposalDebitSchedule)
    const setRecentProposalAmount = TransactionStore((state) => state.setRecentProposalAmount)

    //submit form
    const handleSubmit = () => {
        if(selectedInstallmentDuration > 0){
            if(selectedInstallmentDuration < proposal.maximum_terms_shouldered_by_merchant){
                //set global state
                setRecentProposalDuration(selectedInstallmentDuration)
                setRecentProposalDebitSchedule(selectedDebitSchedule)
                setRecentProposalAmount(proposal.amount)
    
                //clear screen state
                setSelectedInstallmentDuration(0);
                setSelectedDebitSchedule('')
                //navigate to next screen
                navigation.navigate('Buyer', {
                    screen: 'PaymentOrder', 
                    params: {
                        proposalID: proposalID
                    }
                })
            }else{
                showAlert("Error", "The terms you have set cannot be greater than the maximum terms shouldered by the merchant")
            }
        }else{
            showAlert("Error", "You have not yet selected an installment term")
        }
    };

    return (
        <OfferDetailContainer>
            <ScreenHeader variant='back' onRightPress={() => navigation.goBack()}/>
            <ScrollContainer>
                <OfferContainer>
                    <OfferTitleContainer>
                        <OfferTitleText>Payment Details</OfferTitleText>
                    </OfferTitleContainer>
                    <DetailsContainer>
                        <TextContainer>
                            <TitleText>Merchant Name</TitleText>
                            <DetailText>{proposal?.merchant_name}</DetailText>
                        </TextContainer>
                        <FormContainer>
                            <CustomDropdown 
                                data={installmentDurationData}
                                title='Terms'
                                size={16}
                                customColor={colors.basic.basic200}
                                selectedValue={selectedInstallmentDuration}
                                onValueChange={(value) => setSelectedInstallmentDuration(value)}
                            />
                            <CustomDropdown 
                                data={debitScheduleData}
                                title='Debit Schedule'
                                size={16}
                                customColor={colors.basic.basic200}
                                selectedValue={selectedDebitSchedule}
                                onValueChange={(value) => setSelectedDebitSchedule(value)}
                            />
                        </FormContainer>
                        {/* <TextContainer isOrder={true}>
                            <TitleText>Your Order</TitleText>
                            <OrderItemContainer>
                                <QuantityText>1x</QuantityText>
                                <TitleRightText isHiglighted={true} isBold={true}>PHP 149.97</TitleRightText>
                            </OrderItemContainer>
                            <OrderItemContainer>
                                <TitleLeftText isHiglighted={true} isBold={true}>96W USB-C Power Adapter</TitleLeftText>
                            </OrderItemContainer>
                        </TextContainer> */}
                        <ButtonContainer>
                            <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Pay Now' textSize='20'
                                isDisabled={!areValuesPresent} disabled={areValuesPresent}
                                onPress={handleSubmit}/>
                        </ButtonContainer>
                    </DetailsContainer>
                </OfferContainer>
            </ScrollContainer>
            <CustomAlert
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </OfferDetailContainer>
    )
}

export default OfferDetailScreen