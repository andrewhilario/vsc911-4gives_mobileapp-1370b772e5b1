import React from 'react'
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, ButtonContainer, ChangePasswordContainer, ChangePasswordTitleContainer, ChangePasswordTitleText, ForgotPasswordText, FormContainer, HolderContainer } from './styles'

import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import { colors } from '../../../../constants/Colors';
import { TouchableOpacity } from 'react-native';

const ChangePasswordScreen = ({navigation}) => {
  return (
    <ChangePasswordContainer>
      <ChangePasswordTitleContainer>
        <BackContainer>
          <BackButton onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
          </BackButton>
        </BackContainer>
        <ChangePasswordTitleText>Account Password</ChangePasswordTitleText>
        <BackButton>
          <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
        </BackButton>
      </ChangePasswordTitleContainer>
      <FormContainer>
        <TextInput 
          inputProps={{
            placeholder: "Old Password",
            // onChangeText: formik.handleChange("email"),S
            // value: formik.values.email,
          }}
          customLabel="Enter old password"
          labelTextSize = '12px'
          variant='non-filled'
          isPassword={true}
        />
        <TextInput 
          inputProps={{
            placeholder: "New Password",
            // onChangeText: formik.handleChange("email"),
            // value: formik.values.email,
          }}
          customLabel="Enter new password"
          labelTextSize = '12px'
          variant='non-filled'
          isPassword={true}
        />
        <TextInput 
          inputProps={{
            placeholder: "Confirm Password",
            // onChangeText: formik.handleChange("email"),
            // value: formik.values.email,
          }}
          customLabel="Confirm new password"
          labelTextSize = '12px'
          variant='non-filled'
          isPassword={true}
        />
        <ButtonContainer>
          <ButtonText width='100%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Save' textSize='18'
              // onPress={() => {navigation.navigate("SaleProposal")}}
          />

        <TouchableOpacity>
          <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
        </TouchableOpacity>
        </ButtonContainer>
        
      </FormContainer>
    </ChangePasswordContainer>
  )
}

export default ChangePasswordScreen