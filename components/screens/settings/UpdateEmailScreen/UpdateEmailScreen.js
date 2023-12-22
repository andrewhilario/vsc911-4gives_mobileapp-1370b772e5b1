import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useFormik } from "formik";

import { BackButton, BackContainer, ButtonContainer, EmailHeaderText, EmailText, FormContainer, HolderContainer, UpdateEmailContainer, UpdateEmailTitleContainer, UpdateEmailTitleText } from './styles'

import { colors } from '../../../../constants/Colors';
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore'

const UpdateEmailScreen = ({navigation}) => {
    // getting user state
    const user = UserStore(state => state.user)
    const userToken = UserStore(state => state.userToken);
    const updateEmail = UserStore((state) => state.updateEmail)

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    const [isUpdated, setIsUpdated] = useState(false);

    //formik
    const initialValues = { updatedEmail: "", };

    const handleFormikSubmit = (values, { resetForm }) => {
        console.log(values)
        try{
            startLoading()
            if (values.updatedEmail === "") {
                showAlert("Incomplete input", "Please enter updated email.")
                stopLoading()
            } else {
                updateEmail({
                    updatedEmail: values.updatedEmail,
                    token: userToken
                })
                // setIsUpdated(true)
                // showAlert("Success", "Updated Email sent.")
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
        if (isUpdated === true) {
        navigation.navigate("UpdateEmailVerify");
        }
    }, [isUpdated]);

    return (
        <UpdateEmailContainer>
            <UpdateEmailTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <UpdateEmailTitleText>Email Address</UpdateEmailTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </UpdateEmailTitleContainer>
            <FormContainer>
                <TextInput 
                    inputProps={{
                        value: user.email,
                        editable: false
                    }}
                    customLabel="Current Email"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                <TextInput
                    inputProps={{
                    placeholder: "Enter new email",
                    onChangeText: formik.handleChange("updatedEmail"),
                    value: formik.values.updatedEmail,
                    }}
                    customLabel="New Email"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
            </FormContainer>
            <ButtonContainer>
                <ButtonText width='100%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Save' textSize='18'
                    onPress={formik.handleSubmit}
                />
            </ButtonContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </UpdateEmailContainer>
    )
}

export default UpdateEmailScreen