import React, { useState, useRef, useEffect  } from 'react'

import { ButtonContainer, FormContainer, HeaderTitle, HolderContainer, Logo, LogoContainer, OtpInput, OtpInputContainer, SettingsOTPVerificationContainer } from './styles';

import AppLogo from '../../../../assets/logos/4giveslogo.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';

const SettingsOTPVerificationScreen = ({ navigation }) => {
    const userToken = UserStore(state => state.userToken);
    const isUserSMSVerified = UserStore(state => state.isUserSMSVerified);
    const sendSMSCodeVerify = UserStore((state) => state.sendSMSCodeVerify);
    const selectedSettings = UserStore(state => state.selectedSettings);

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //handling OTP inputs
    const [otp, setOtp] = useState('');
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const handleOtpChange = (index, value) => {
        setOtp((prevOtp) => {
        const newOtp = prevOtp.split('');
        newOtp[index] = value;
        return newOtp.join('');
        });
        if (value && index < 3) {
        switch (index) {
            case 0:
            inputRef2.current.focus();
            break;
            case 1:
            inputRef3.current.focus();
            break;
            case 2:
            inputRef4.current.focus();
            break;
            default:
            break;
        }
        }
    };

    //verify OTP for buyer proposals
    const handleOTPVerify = () => {
        startLoading()
        if (otp === '1234') {
            sendSMSCodeVerify({
                code: otp.toString(),
                token: userToken,
            })
            inputRef1.current.clear();
            inputRef2.current.clear();
            inputRef3.current.clear();
            inputRef4.current.clear();
            showAlert("Success", 'Correct OTP')
            stopLoading()
        } else {
            showAlert("Error", 'Wrong OTP')
            stopLoading()
        }
    };

    //handle close alert
    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }

    //for navigating to next screen
    useEffect(() => {
        if (isUserSMSVerified) {
            switch (selectedSettings) {
                case 'updateEmail':
                    navigation.navigate("UpdateEmail");
                    break;
                case 'updateMobileNumber':
                    navigation.navigate("UpdateMobileNumber");
                    break;
                default:
                    break;
            }
        }
    }, [isUserSMSVerified, selectedSettings]);

    return (
        <SettingsOTPVerificationContainer>
            <HolderContainer />
            <ScreenHeader title='SMS Verification' onLeftPress={() => navigation.goBack()}/>
            <LogoContainer>
                <Logo source={AppLogo}/>
            </LogoContainer>
            <HeaderTitle>Please enter your 4-digit verification code</HeaderTitle>
            <FormContainer>
                <OtpInputContainer>
                    <OtpInput 
                        ref={inputRef1}
                        maxLength={1}
                        value={otp[0]}
                        onChangeText={(value) => handleOtpChange(0, value)}
                        keyboardType='number-pad'
                    />
                    <OtpInput
                        ref={inputRef2}
                        maxLength={1}
                        value={otp[1]}
                        onChangeText={(value) => handleOtpChange(1, value)}
                        keyboardType='number-pad'
                    />
                    <OtpInput
                        ref={inputRef3}
                        maxLength={1}
                        value={otp[2]}
                        onChangeText={(value) => handleOtpChange(2, value)}
                        keyboardType='number-pad'
                    />
                    <OtpInput
                        ref={inputRef4}
                        maxLength={1}
                        value={otp[3]}
                        onChangeText={(value) => handleOtpChange(3, value)}
                        keyboardType='number-pad'
                    />
                </OtpInputContainer>
            </FormContainer>
            <ButtonContainer>
                <ButtonText width='300px' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Submit' textSize='18'
                onPress={handleOTPVerify}/>
            </ButtonContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </SettingsOTPVerificationContainer>
    )
}

export default SettingsOTPVerificationScreen