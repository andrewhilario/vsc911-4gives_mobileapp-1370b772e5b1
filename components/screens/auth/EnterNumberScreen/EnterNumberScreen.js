import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useFormik } from "formik";

import { ButtonContainer, EnterNumberContainer, FormContainer, HeaderContainer, HeaderIconContainer, HeaderText, HeaderTitle, HolderContainer } from './styles'

import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

const EnterNumberScreen = ({navigation}) => {
    //formik
    const initialValues = { number: "" };
    const handleFormikSubmit = (values, { resetForm }) => {
        const [alertVisible, setAlertVisible] = useState(false);
        const closeAlert = () => {
            setAlertVisible(false);
        };

        try{
            if (values.number === "" && values.number.length() === 11) {
                setAlertVisible(true);
                <CustomAlert 
                    visible={alertVisible}
                    title="Incomplete Input"
                    message="Please enter your number. Must be 11 digits."
                    onClose={closeAlert}
                />
            } else {
                //enter number
                resetForm();
            };
        }
        catch(error){
            setAlertVisible(true);
            <CustomAlert 
                visible={alertVisible}
                title="Error"
                message="There was an error submitting your number."
                onClose={closeAlert}
            />
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    return (
        <EnterNumberContainer>
            <HolderContainer />
            <ScreenHeader title='Number'/>
            <HeaderContainer>
                <HeaderIconContainer>
                    <Ionicons name="person" size={24} color="white" />
                </HeaderIconContainer>
                <HeaderTitle>Number Verification</HeaderTitle>
            </HeaderContainer>
            <HeaderText>Please enter your phone number</HeaderText>
            <FormContainer>
                <TextInput inputProps={{
                        keyboardType: 'number-pad',
                        onChangeText: formik.handleChange("number"),
                        value: formik.values.number,
                    }}
                    customLabel="Phone Number"
                    labelTextSize = '14px'
                    variant='non-filled'
                />
            </FormContainer>
            <ButtonContainer>
                <ButtonText width='300px' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Submit' textSize='18'
                onPress={() => {
                    navigation.navigate("OTPVerification", {
                        type: 'accountOTP'
                    });
                }}
                />
            </ButtonContainer>
        </EnterNumberContainer>
    )
}

export default EnterNumberScreen