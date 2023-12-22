import React, { useEffect, useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { DashboardCreatePaymentTitleContainer, DashboardCreatePaymentTitleText, DashboardCreatePaymentContainer, Overlay, DashboardCreatePaymentBodyContainer, DashboardCreatePaymentBodyText, ButtonRowContainer } from './styles'

import { colors } from '../../../constants/Colors'
import CustomDropdown from '../CustomDropdown/CustomDropdown'
import ButtonText from '../ButtonText/ButtonText'
import CustomLoader from '../CustomLoader/CustomLoader'
import CustomAlert from '../CustomAlert/CustomAlert'

import UserStore from '../../../stores/UserStore'
import TransactionStore from '../../../stores/TransactionStore'
import LoaderStore from '../../../stores/LoaderStore'
import AlertStore from '../../../stores/AlertStore'

import useGetUserMerchantList from '../../../hooks/useGetUserMerchantList'

const DashboardCreatePaymentModal = ({visible, onCancel}) => {
    const userToken = UserStore(state => state.userToken)
    const createPaymentRequest = TransactionStore((state) => state.createPaymentRequest)

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

    const { merchantList } = useGetUserMerchantList();
    //handling selected merchant
    const [selectedMerchant, setSelectedMerchant] = useState(null);

    //handling selected merchant id
    const [selectedMerchantID, setSelectedMerchantID] = useState(0);
    useEffect(() => {
        if (selectedMerchant) {
            const targetMerchant = merchantList.find(item => item.name === selectedMerchant)
            setSelectedMerchantID(targetMerchant.id)
        }
    }, [selectedMerchant]);
    console.log(selectedMerchantID)

    const handleSubmit = () => {
        try{
            startLoading()
            createPaymentRequest({
                merchantID: selectedMerchantID,
                token: userToken,
            })
            onCancel();
        }catch(error){
            showAlert("Error")
            stopLoading()
        }
    };

    return (
        <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onCancel}>
            <Overlay>
                <DashboardCreatePaymentContainer>
                    <DashboardCreatePaymentTitleContainer>
                        <DashboardCreatePaymentTitleText>Create Payment</DashboardCreatePaymentTitleText>
                    </DashboardCreatePaymentTitleContainer>
                    <DashboardCreatePaymentBodyContainer>
                        <DashboardCreatePaymentBodyText>Select merchant name to request payment link and QR code from the merchant.</DashboardCreatePaymentBodyText>
                        <TouchableOpacity>
                            <DashboardCreatePaymentBodyText color={colors.primary.primary300}>Learn More.</DashboardCreatePaymentBodyText>
                        </TouchableOpacity>
                    </DashboardCreatePaymentBodyContainer>
                    <CustomDropdown 
                        data={merchantList}
                        placeholderText={'Select merchant'}
                        size={12}
                        customColor={colors.basic.basic200}
                        selectedValue={selectedMerchant}
                        onValueChange={(value) => setSelectedMerchant(value)}
                        variant='non-label-value'
                    />
                    <ButtonRowContainer>
                        <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Send' textSize='20' 
                            isDisabled={!selectedMerchant} disabled={!selectedMerchant} onPress={handleSubmit}/>
                        <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Cancel' textSize='20' 
                            paddingSize='0px' onPress={onCancel}/>
                    </ButtonRowContainer>
                </DashboardCreatePaymentContainer>
                <CustomLoader visible={isLoading}/>
                <CustomAlert 
                    visible={isAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    onClose={handleAlertClose}
                />
            </Overlay>
        </Modal>
    )
}

export default DashboardCreatePaymentModal