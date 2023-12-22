import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from "formik";

import { ButtonContainer, EmailVerificationContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, Logo, LogoContainer, OtpInput, OtpInputContainer, TimerText } from './styles'

import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import TextInput from '../../../shared/TextInput/TextInput';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';

const UpdateEmailVerificationScreen = ({ navigation }) => {
    const userToken = UserStore(state => state.userToken);
    const updatedEmail = UserStore(state => state.updatedEmail);
    const verifyUpdatedEmail = UserStore((state) => state.verifyUpdatedEmail);
    const isUpdateEmailVerified = UserStore(state => state.isUpdateEmailVerified);

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    const [isVerified, setIsVerified] = useState(false);
    //formik
    const initialValues = { code: "" };
    const handleFormikSubmit = (values, {resetForm}) => {
        console.log('code',values.code)
        startLoading()
        try{
            if (values.code === "") {
                showAlert("Incomplete input", "Please enter code.")
                stopLoading()
            } else {
                verifyUpdatedEmail({
                    code: values.code,
                    token: userToken
                })
                // setIsVerified(true)
                // showAlert("Success", 'Email updated and verified.')
                stopLoading()
                resetForm()
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
    // useEffect(() => {
    //     if (isUpdateEmailVerified === true) {
    //     navigation.navigate("Auth",{
    //         screen: 'Login'
    //     });
    //     }
    // }, [isUpdateEmailVerified])

    return (
        <EmailVerificationContainer>
            <LogoContainer>
                <Logo source={OnboardingImage}/>
            </LogoContainer>
            <FormViewContainer>
                <HeaderContainer>
                    <HeaderText>Verification Code</HeaderText>
                    <HeaderSubText>A verification code is sent to your updated email {updatedEmail}</HeaderSubText>
                </HeaderContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "XXXXXXXXXXXX",
                        onChangeText: formik.handleChange("code"),
                        value: formik.values.code,
                    }}
                    customLabel="Enter verification code"
                    labelTextSize = '14px'
                    variant='non-filled'
                />
                <TimerText>Enter your code (00:59)</TimerText>
                <ButtonContainer>
                    <ButtonText width='80%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Submit' textSize='18'
                        onPress={formik.handleSubmit}/>
                </ButtonContainer>
            </FormViewContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </EmailVerificationContainer>
    )
}

export default UpdateEmailVerificationScreen