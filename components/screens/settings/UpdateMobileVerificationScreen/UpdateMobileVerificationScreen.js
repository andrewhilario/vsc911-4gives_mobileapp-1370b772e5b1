import React, { useState, useRef, useEffect  } from 'react'
import { Entypo } from '@expo/vector-icons';

import { ButtonContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, Logo, LogoContainer, OtpInput, OtpInputContainer, TimerText, UpdateMobileVerificationContainer } from './styles'

import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';

const UpdateMobileVerificationScreen = ({ navigation }) => {
    const userToken = UserStore(state => state.userToken);
    const updatedNumber = UserStore(state => state.updatedNumber);
    const sessionID = UserStore(state => state.sessionID);
    const verifyUpdatedMobileNumber = UserStore((state) => state.verifyUpdatedMobileNumber);
    const isUpdateNumberVerified = UserStore(state => state.isUpdateNumberVerified)

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
    const [attempts, setAttempts] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);
    const handleOtpChange = (index, value) => {
        setOtp((prevOtp) => {
        const newOtp = prevOtp.split('');
        newOtp[index] = value;
        return newOtp.join('');
        });
        if (value && index < 5) {
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
                case 3:
                inputRef5.current.focus();
                break;
                case 4:
                inputRef6.current.focus();
                break;
                default:
                break;
            }
        }
    };

    const resetOtpInputs = () => {
        inputRef1.current.clear();
        inputRef2.current.clear();
        inputRef3.current.clear();
        inputRef4.current.clear();
        inputRef5.current.clear();
        inputRef6.current.clear();
        setOtp('');
    };

    //verify OTP for buyer proposals
    const handleOTPVerify = () => {
        // Assuming you have a verification logic here
        startLoading()
        if (otp === '123456') {
            verifyUpdatedMobileNumber({
                code: otp.toString(),
                token: userToken,
                sessionID: sessionID,
                updatedNumber: updatedNumber
            })
            resetOtpInputs();
            // setIsVerified(true)
            // showAlert("Success", 'Mobile Number updated and verified.')
            stopLoading()
        } else {
            // Wrong OTP
            setAttempts((prevAttempts) => prevAttempts + 1);
            if (attempts + 1 === 4) {
              // Limit reached, you can implement additional logic here
              showAlert('Error', 'Maximum attempts reached');
              setIsDisabled(true)
              resetOtpInputs();
              setAttempts(0);
              stopLoading();
            } else {
                showAlert('Error', 'Wrong OTP');
                resetOtpInputs();
                stopLoading();
            }
        }
    };

    //handle close alert
    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }

    //for navigating to next screen
    useEffect(() => {
        if (isUpdateNumberVerified === true) {
            const newKey = Math.random().toString();
            navigation.navigate("SettingsMenu", {
                key: newKey
            })
        }
    }, [isUpdateNumberVerified])

    return (
        <UpdateMobileVerificationContainer>
            <LogoContainer>
                <Logo source={OnboardingImage}/>
            </LogoContainer>
            <FormViewContainer>
                <HeaderContainer>
                    <HeaderText>Verification Code</HeaderText>
                    <HeaderSubText>We send the verification code in +631234567890</HeaderSubText>
                </HeaderContainer>
                <OtpInputContainer>
                    <OtpInput 
                        ref={inputRef1}
                        maxLength={1}
                        value={otp[0]}
                        onChangeText={(value) => handleOtpChange(0, value)}
                        keyboardType='numeric'
                        isFilled={otp[0]}
                    />
                    <OtpInput
                        ref={inputRef2}
                        maxLength={1}
                        value={otp[1]}
                        onChangeText={(value) => handleOtpChange(1, value)}
                        keyboardType='numeric'
                        isFilled={otp[1]}
                    />
                    <OtpInput
                        ref={inputRef3}
                        maxLength={1}
                        value={otp[2]}
                        onChangeText={(value) => handleOtpChange(2, value)}
                        keyboardType='numeric'
                        isFilled={otp[2]}
                    />
                    <OtpInput
                        ref={inputRef4}
                        maxLength={1}
                        value={otp[3]}
                        onChangeText={(value) => handleOtpChange(3, value)}
                        keyboardType='numeric'
                        isFilled={otp[3]}
                    />
                    <OtpInput
                        ref={inputRef5}
                        maxLength={1}
                        value={otp[4]}
                        onChangeText={(value) => handleOtpChange(4, value)}
                        keyboardType='numeric'
                        isFilled={otp[4]}
                    />
                    <OtpInput
                        ref={inputRef6}
                        maxLength={1}
                        value={otp[5]}
                        onChangeText={(value) => handleOtpChange(5, value)}
                        keyboardType='numeric'
                        isFilled={otp[5]}
                    />
                </OtpInputContainer>
                <TimerText>Enter your code (00:59)</TimerText>
                <ButtonContainer>
                {
                    isDisabled === true ? (
                        <TimerText>You have reached maximum attempts. You can't submit an OTP right now.</TimerText>
                    ) : (
                        <ButtonText width='80%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Submit' textSize='18'
                            onPress={handleOTPVerify}/>
                    )
                }
                </ButtonContainer>
                { isDisabled === false && <TimerText>Remaining attempts: {4 - attempts}</TimerText> }
            </FormViewContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </UpdateMobileVerificationContainer>
    )
}

export default UpdateMobileVerificationScreen