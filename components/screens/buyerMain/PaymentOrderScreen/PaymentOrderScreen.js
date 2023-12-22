import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { NumericFormat } from 'react-number-format';

import { ButtonContainer, FormContainer, OrderContainer, OrderDetailsContainer, OrderDetailsTextContainer, OrderTitleContainer, OrderTitleText, PaymentOrderContainer, ScrollContainer, TitleLeftText, TitleRightText } from './styles'

import { colors } from '../../../../constants/Colors';
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

import UserStore from '../../../../stores/UserStore';
import TransactionStore from '../../../../stores/TransactionStore';
import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';

import useGetUserPaymentSources from '../../../../hooks/useGetUserPaymentSources';

const PaymentOrderScreen = ({route, navigation}) => {
    const { proposalID } = route.params

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //handle close alert
    const handleAlertClose = () => {
        stopLoading()
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
                console.log('notif-data', data)
                setProposal(data)
            }catch(error){
                console.log('failed to get proposal details')
            }
          };
          
        // Call the fetchData function to fetch and set the data
        fetchData();
    }, []);

    //fetching user payment sources
    const { paymentSources, loading } = useGetUserPaymentSources();
    //handling selected payment type
    const [selectedPaymentSource, setSelectedPaymentSource] = useState(0);

    //fetching states that are set in previous screens
    const recentProposalDuration = TransactionStore(state => state.recentProposalDuration)
    const recentProposalAmount = TransactionStore(state => state.recentProposalAmount)
    //handling payment process submission
    const completePaymentProcess = TransactionStore((state) => state.completePaymentProcess)
    const handleSubmit = () => {
        console.log('buyer set terms:', recentProposalDuration)
        try{
            startLoading()
            completePaymentProcess({
                proposalID: proposalID,
                paymentSourceID: selectedPaymentSource,
                terms: recentProposalDuration,
                token: userToken,
            })
            //clear screen states
            setSelectedPaymentSource(0)
        }catch(error){
            showAlert("Error")
            stopLoading()
        }
    };

    const isPaymentProcessCompleted = TransactionStore(state => state.isPaymentProcessCompleted)
    //navigate to next screen
    useEffect(() => {
        if (isPaymentProcessCompleted) {
            navigation.navigate('Buyer', {
                screen: 'PaymentDocuments', 
            })
        }
      }, [isPaymentProcessCompleted]);

    return (
        <PaymentOrderContainer>
            <ScreenHeader variant='cancel' onRightPress={() => navigation.goBack()}/>
            <ScrollContainer>
                <OrderContainer>
                    <OrderTitleContainer>
                        <OrderTitleText>Payment Order</OrderTitleText>
                    </OrderTitleContainer>
                    <OrderDetailsContainer>
                        <OrderDetailsTextContainer isLeft={true}>
                            <TitleLeftText>Purchase Amount</TitleLeftText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer isLeft={true}>
                            <TitleLeftText>
                                <NumericFormat
                                    value={recentProposalAmount}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₱ '}
                                    decimalScale={2}
                                    renderText={value => <Text>{value}</Text>}
                                />
                            </TitleLeftText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Interest</TitleLeftText>
                            <TitleRightText>
                                <NumericFormat
                                    value={0}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₱ '}
                                    decimalScale={2}
                                    renderText={value => <Text>{value}</Text>}
                                />
                            </TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText>Transaction Fee</TitleLeftText>
                            <TitleRightText>
                                <NumericFormat
                                    value={0}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₱ '}
                                    decimalScale={2}
                                    renderText={value => <Text>{value}</Text>}
                                />
                            </TitleRightText>
                        </OrderDetailsTextContainer>
                        <OrderDetailsTextContainer>
                            <TitleLeftText isTotal={true}>Total</TitleLeftText>
                            <TitleRightText isTotal={true}>
                                <NumericFormat
                                    value={3000}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₱ '}
                                    decimalScale={2}
                                    renderText={value => <Text>{value}</Text>}
                                />
                            </TitleRightText>
                        </OrderDetailsTextContainer>
                    </OrderDetailsContainer>
                    <FormContainer>
                        <CustomDropdown
                            data={paymentSources}
                            title='Debit Schedule'
                            size={14}
                            customColor={colors.basic.basic200}
                            selectedValue={selectedPaymentSource}
                            onValueChange={(value) => setSelectedPaymentSource(value)}
                            variant='name-id'
                        />
                    </FormContainer>
                    <ButtonContainer>
                        <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='20'
                            isDisabled={selectedPaymentSource ? false : true} onPress={handleSubmit}/>
                    </ButtonContainer>
                </OrderContainer>
            </ScrollContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </PaymentOrderContainer>
    )
}

export default PaymentOrderScreen