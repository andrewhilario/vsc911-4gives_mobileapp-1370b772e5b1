import React, { useState, useRef, useEffect  } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication';

import { ButtonContainer, FormContainer, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, HeaderTitle, HolderContainer, Logo, LogoContainer, OtpTitleContainer, OtpTitleText, OtpInput, OtpInputContainer, PaymentOTPContainer, ScrollContainer, TimerText, FooterContainer, FooterSubText, FooterColoredSubText, FormTextContainer, FormText } from './styles'

import { colors } from '../../../../constants/Colors'
import BiometricsIllustration from '../../../../assets/images/onboarding/biometrics-illustration.png'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';
import TransactionStore from '../../../../stores/TransactionStore';

const PaymentOTPScreen = ({navigation}) => {
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

    const [mode, setMode] = useState('fingerprint')
    //mode = 'otp','fingerprint'

    const [otpCorrect, setOtpCorrect] = useState(false)
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

    //verify OTP for account
    const handleOTPVerify = () => {
        console.log(otp)
        try{
            startLoading()
            if (otp === '123456') {
                // sendSMSCodeVerify({
                // code: otp.toString(),
                // token: signUpAuthenticationToken,
                // })
                resetOtpInputs();
                setOtpCorrect(true);
                showAlert("Payment Success", 'Monitor your loans such as payment schedules, and download contract at your convenience.')
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
        }
        catch(error){
            resetOtpInputs();
            showAlert("Error", `OTP is invalid. ${error}`)
            stopLoading()
        }
    };

    // useEffect(() => {
    //     if (otpCorrect === true) {
    //       navigation.navigate("BuyerMenu", {transferToTab: 'Transactions'});
    //     }
    // }, [otpCorrect]);

    //fingeprint biometric states
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [token, setToken] = useState(null);

    const userToken = UserStore(state => state.userToken)
    const verifyToken = TransactionStore((state) => state.verifyToken)
    //check if device supports biometrics
    useEffect(() => {
        (async() => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible)
        })
    })
    //returns to password auth if got error in biometrics
    const fallBackToAuth = () => {
        setMode('otp')
    }
    //custom alert components
    const alertComponent = (title, message, buttonText, buttonFunction) => {
        return Alert.alert(title, message, [
        {
            text: buttonText,
            onPress: buttonFunction,
        }
        ])
    }
    const twoButtonAlert = () => {
        Alert.alert('Welcome', 'Continue to app', [
        {
            text: 'Back', onPress: () => console.log('Cancel'), style: 'cancel'
        },
        {
            text: 'Ok', onPress: () => console.log('Ok'),
        }
        ])
    }
    //handle biometric auth operations
    const handleBiometricAuth = async() => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        if(!isBiometricAvailable){
            return alertComponent('Error', 'Biometrics hardware not found.', 'Ok', () => fallBackToAuth())
        }

        let supportedBiometrics;
        if(isBiometricAvailable){
        supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync()

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync()
        if(!savedBiometrics){
            return alertComponent('Error', 'Biometric record not found.', 'Ok', () => fallBackToAuth())
        }

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticated with biometrics',
            cancelLabel: 'cancel',
            disableDeviceFallback: true,
        })

        if(biometricAuth.success === true){
            const response = await fetch("https://dev.api.4gives.me/api/v1/core/biometrics-token-request/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${userToken}`,
                },
            })
            const data = await response.json();
            console.log('Fetched request token', data)

            if(data){
                verifyToken(data.token)
            }else{
                console.log('token cant be found')
            }
        }
        console.log('Is biometric available:',isBiometricAvailable)
        console.log('Device supported biometrics:',supportedBiometrics)
        console.log('Device saved biometrics:',savedBiometrics)
        console.log('Is biometric authenticated:',biometricAuth)
        }
    }

    const isTokenValid = TransactionStore(state => state.isTokenValid)
    const isTokenInvalid = TransactionStore(state => state.isTokenInvalid)
    //for navigating to next screen
    useEffect(() => {
        if (isTokenValid === true) {
            navigation.navigate('Transactions', {
                screen: 'TransactionsMain', 
            })
        }
        if (isTokenInvalid === true) {
            navigation.navigate('Buyer', {
                screen: 'BuyerDashboard', 
            })
        }
    }, [isTokenValid, isTokenInvalid]);

    return (
        <PaymentOTPContainer>
            <ScreenHeader variant='cancel' onRightPress={() => navigation.goBack()}/>
            <ScrollContainer>
                <FormContainer>
                    {
                        mode === 'otp' ? (
                            <>
                                <OtpTitleContainer>
                                    <OtpTitleText>Verification Code</OtpTitleText>
                                </OtpTitleContainer>
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
                                <FooterContainer>
                                    <FooterSubText>Didn’t receive the code?</FooterSubText>
                                    <TouchableOpacity>
                                        <FooterColoredSubText>Resend OTP</FooterColoredSubText>
                                    </TouchableOpacity>
                                </FooterContainer>
                            </>
                        ) : (
                            <>
                                <LogoContainer>
                                    <Logo source={BiometricsIllustration}/>
                                </LogoContainer>
                                <FormTextContainer>
                                    <FormText size={18} color={colors.basic.basic900}>Fingerprint Verification</FormText>
                                    <FormText size={12} color={colors.basic.basic500}>Verify payment process using fingerprint biometrics</FormText>
                                </FormTextContainer>
                                <ButtonContainer>
                                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Get Started' textSize='18'
                                    onPress={handleBiometricAuth}/>
                                </ButtonContainer>
                            </>
                        )
                    }
                    
                </FormContainer>
            </ScrollContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </PaymentOTPContainer>
    )
}

export default PaymentOTPScreen