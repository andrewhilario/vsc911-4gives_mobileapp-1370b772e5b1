import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { useFormik } from "formik";

import { ButtonContainer, FooterColoredSubText, FooterContainer, FooterSubText, FormViewContainer, HeaderContainer, HeaderSubText, HeaderText, HolderContainer, Logo, LogoContainer, ScrollContainer, SignUpContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import OnboardingImage from '../../../../assets/images/onboarding/onboarding-image-1.png'
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import BuyerAuthStore from '../../../../stores/BuyerAuthStore';

const SignUpScreen = ({navigation}) => {
  //zustand state management stores
  const signUpUpdateUser = BuyerAuthStore((state) => state.signUpUpdateUser)
  const isContactNumberRegistered = BuyerAuthStore((state => state.isContactNumberRegistered))

  const isLoading = LoaderStore(state => state.isLoading);
  const startLoading = LoaderStore((state) => state.startLoading);
  const stopLoading = LoaderStore((state) => state.stopLoading);

  const isAlertVisible = AlertStore(state => state.isAlertVisible);
  const alertTitle = AlertStore(state => state.alertTitle);
  const alertMessage = AlertStore(state => state.alertMessage);
  const showAlert = AlertStore((state) => state.showAlert);
  const hideAlert = AlertStore((state) => state.hideAlert);
  
  //formik
  const initialValues = {  
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  };
  const handleFormikSubmit = (values, { resetForm }) => {
    try{
      startLoading()
      if (values.email === "" || values.password === "") {
        stopLoading()
        showAlert("Incomplete input", "Please enter your email and password.")
      } else if (values.password !== values.confirmPassword){
        stopLoading()
        showAlert("Incorrect password", "The passwords you entered are not the same.")
      } else {
          signUpUpdateUser({
            email: values.email,
            password: values.password,
            contactNumber: `+63${values.contactNumber}`,
          })
          resetForm();
      };
    }
    catch(error){
      // showAlert("Error", error)
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


  //handle close alert
  const handleAlertClose = () => {
    stopLoading()
    hideAlert()
  }

  //for navigating to next screen
  useEffect(() => {
    if (isContactNumberRegistered) {
      navigation.navigate("BuyerOTPVerification");
    }
  }, [isContactNumberRegistered]);

  return (
    <SignUpContainer>
      <LogoContainer>
        <Logo source={OnboardingImage}/>
      </LogoContainer>
      <FormViewContainer>
        <HeaderContainer>
          <HeaderText>Create account</HeaderText>
          <HeaderSubText>Kindly complete the details below.</HeaderSubText>
        </HeaderContainer>
        <ScrollContainer>
          <TextInput 
            inputProps={{
              placeholder: "Enter your active email",
              keyboardType: 'email-address',
              onChangeText: formik.handleChange("email"),
              value: formik.values.email,
            }}
            customLabel='Email'
            variant='non-filled'
            isFilled={formik.values.email !== ''}
          />
          <TextInput 
            inputProps={{
              placeholder: "Enter your active mobile number",
              keyboardType: 'numeric',
              maxLength: 10,
              onChangeText: formik.handleChange("contactNumber"),
              value: formik.values.contactNumber,
            }}
            customLabel='Mobile Number'
            variant='non-filled'
            isMobileNumber={true}
            isFilled={formik.values.contactNumber !== ''}
          />
          <TextInput 
            inputProps={{
              placeholder: "Enter your password",
              onChangeText: formik.handleChange("password"),
              value: formik.values.password,
            }}
            customLabel='Password'
            variant='non-filled'
            isPassword={true}
            isFilled={formik.values.password !== ''}
          />
          <TextInput 
            inputProps={{
              placeholder: "Enter your confirm password",
              onChangeText: formik.handleChange("confirmPassword"),
              value: formik.values.confirmPassword,
            }}
            customLabel='Confirm Password'
            variant='non-filled'
            isPassword={true}
            isFilled={formik.values.confirmPassword !== ''}
          />
          <ButtonContainer>
            <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Sign Up' textSize='18'
            isDisabled={!isFormValid()} disabled={isFormValid()}
            onPress={formik.handleSubmit}/>
          </ButtonContainer>
          <FooterContainer>
            <FooterSubText>Already have an account?</FooterSubText>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FooterColoredSubText>Log In</FooterColoredSubText>
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
    </SignUpContainer>
  )
}

export default SignUpScreen