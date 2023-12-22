import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useFormik } from "formik";

import { BackButton, BackContainer, ButtonContainer, FormContainer, HolderContainer, MobileNumberHeaderText, MobileNumberText, UpdateMobileNumberContainer, UpdateMobileNumberTitleContainer, UpdateMobileNumberTitleText } from './styles'

import { colors } from '../../../../constants/Colors';
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore'

const UpdateMobileNumberScreen = ({navigation}) => {
    // getting user state
    const user = UserStore(state => state.user)
    const userToken = UserStore(state => state.userToken)
    const sendOTPFromMobileNumber = UserStore((state) => state.sendOTPFromMobileNumber)
    const isNumberWaitingToBeUpdated = UserStore(state => state.isNumberWaitingToBeUpdated)

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //formik
    const initialValues = { updatedMobileNumber: "", };

    const handleFormikSubmit = (values, { resetForm }) => {
        console.log(values)
        try{
            startLoading()
            if (values.updatedMobileNumber === "") {
                showAlert("Incomplete input", "Please enter updated mobile number.")
                stopLoading()
            } else {
                sendOTPFromMobileNumber({
                    number: user.contact_number,
                    updatedMobileNumber: `+63${values.updatedMobileNumber}`,
                    token: userToken
                })
                stopLoading()
                resetForm();
            };
        }
        catch(error){
            showAlert("Error", `Failed to send information. ${error}`)
            stopLoading()
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }

    //for navigating to next screen
    useEffect(() => {
        if (isNumberWaitingToBeUpdated === true) {
        navigation.navigate("UpdateMobileNumberVerify");
        }
    }, [isNumberWaitingToBeUpdated])

    return (
        <UpdateMobileNumberContainer>
            <UpdateMobileNumberTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <UpdateMobileNumberTitleText>Mobile Number</UpdateMobileNumberTitleText>
                <BackButton>
                    <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                </BackButton>
            </UpdateMobileNumberTitleContainer>
            <FormContainer>
                <TextInput
                    inputProps={{
                    value: user.contact_number ? user.contact_number : 'N/A',
                    editable: false,
                    }}
                    customLabel="Current Mobile number"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                <TextInput
                    inputProps={{
                    placeholder: "Enter new mobile number",
                    keyboardType: 'number-pad',
                    maxLength: 10,
                    onChangeText: formik.handleChange("updatedMobileNumber"),
                    value: formik.values.updatedMobileNumber,
                    }}
                    customLabel="New Mobile Number"
                    labelTextSize = '12px'
                    variant='non-filled'
                    isMobileNumber={true}
                />
                <ButtonContainer>
                    <ButtonText width='100%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Save' textSize='18'
                        onPress={formik.handleSubmit}
                    />
                </ButtonContainer>
            </FormContainer>
            
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </UpdateMobileNumberContainer>
    )
}

export default UpdateMobileNumberScreen