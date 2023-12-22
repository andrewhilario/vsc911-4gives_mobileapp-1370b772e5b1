import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";

import { ButtonContainer, FooterColoredSubText, FooterContainer, FooterSubText, ForgotPasswordText, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, LoginContainer, Logo, LogoContainer, PreviewImage, PreviewImageContainer, ScrollContainer } from './styles'

import { colors } from '../../../../constants/Colors';

import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-2.png'
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import BuyerAuthStore from '../../../../stores/BuyerAuthStore';

const LoginScreen = () => {
  const navigation = useNavigation();

  //zustand state management stores
  const logInUser = BuyerAuthStore((state) =>  state.logInUser);
  const contactNumber = BuyerAuthStore(state => state.contactNumber);
  const isSignedUp = BuyerAuthStore(state => state.isSignedUp);
  const isLoginDisabled = BuyerAuthStore(state => state.isLoginDisabled);
  const isEmailConfirmedInLogin = BuyerAuthStore(state => state.isEmailConfirmedInLogin);

  const isLoading = LoaderStore(state => state.isLoading);
  const startLoading = LoaderStore((state) => state.startLoading);
  const stopLoading = LoaderStore((state) => state.stopLoading);

  const isAlertVisible = AlertStore(state => state.isAlertVisible);
  const alertTitle = AlertStore(state => state.alertTitle);
  const alertMessage = AlertStore(state => state.alertMessage);
  const showAlert = AlertStore((state) => state.showAlert);
  const hideAlert = AlertStore((state) => state.hideAlert);

  //formik
  const initialValues = { email: "", password: "" };

  const handleFormikSubmit = (values, { resetForm }) => {
    console.log(values)
    try{
      startLoading()
      if (values.email === "" || values.password === "") {
        showAlert("Incomplete input", "Please enter your email and password.")
        stopLoading()
      } else {
        logInUser({
          email: values.email,
          password: values.password,
          contactNumber: contactNumber,
        })
        resetForm();
      };
    }
    catch(error){
      showAlert("Error", error)
      stopLoading()
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleFormikSubmit,
  });

  //checking fields
  const isFormValid = () => {
    // Check if all fields have non-empty values
    return Object.values(formik.values).every((value) => value !== '');
  };

  const handleAlertClose = () => {
    stopLoading()
    hideAlert()
  }

  //for navigating to next screen
  useEffect(() => {
    if (isSignedUp) {
      navigation.navigate("BuyerOTPVerification");
    }

    if (isLoginDisabled){
      navigation.navigate("LoginStatus");
    }

    if (!isEmailConfirmedInLogin){
      navigation.navigate("UpdateEmailVerify")
    }
  }, [isSignedUp, isLoginDisabled, isEmailConfirmedInLogin]);

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo source={OnboardingImage}/>
      </LogoContainer>
      <FormViewContainer>
        <ScrollContainer>
          <HeaderContainer>
            <HeaderText>Hello,{"\n"}Welcome back</HeaderText>
            <HeaderSubText>Enter your credentials to start shopping!</HeaderSubText>
          </HeaderContainer>
          <TextInput 
            inputProps={{
              placeholder: "Enter your registered email",
              keyboardType: 'email-address',
              onChangeText: formik.handleChange("email"),
              value: formik.values.email,
              editable: !isLoginDisabled
            }}
            customLabel='Email'
            variant='non-filled'
            isFilled={formik.values.email !== ''}
            isLoginDisabled={isLoginDisabled}
          />
          <TextInput 
            inputProps={{
                placeholder: "Enter your password",
                onChangeText: formik.handleChange("password"),
                value: formik.values.password,
                editable: !isLoginDisabled
            }}
            customLabel='Password'
            variant='non-filled'
            isPassword={true}
            isFilled={formik.values.password !== ''}
            isLoginDisabled={isLoginDisabled}
          />
          <TouchableOpacity>
            <ForgotPasswordText>Forgot username and/or password?</ForgotPasswordText>
          </TouchableOpacity>
          <ButtonContainer>
            <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Sign In' textSize='20'
              isDisabled={!isFormValid() || isLoginDisabled} disabled={isFormValid() || isLoginDisabled}
              onPress={formik.handleSubmit}/>
          </ButtonContainer>
          <FooterContainer>
            <FooterSubText>Don't have an account?</FooterSubText>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <FooterColoredSubText>Sign Up</FooterColoredSubText>
            </TouchableOpacity>
          </FooterContainer>
        </ScrollContainer>
      </FormViewContainer>
      <CustomLoader visible={isLoading}/>
      <CustomAlert 
        visible={isAlertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={handleAlertClose}
      />
    </LoginContainer>
  )
}

export default LoginScreen