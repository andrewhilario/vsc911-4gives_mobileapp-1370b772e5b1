import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useFormik } from "formik";

import { BackButton, BackContainer, BasicInformationContainer, BasicInformationTitleContainer, BasicInformationTitleText, ButtonContainer, FormContainer, FormRowContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import TextInput from '../../../shared/TextInput/TextInput'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import DatePicker from '../../../shared/DatePicker/DatePicker';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader'

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';
import useFormatDate from '../../../../hooks/useFormatDate';

const BasicInformationScreen = ({navigation}) => {
    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);
  
    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }

    //handling mode
    const [mode, setMode] = useState("details");

    // getting user state
    const user = UserStore(state => state.user)
    const userToken = UserStore(state => state.userToken)

    //handling birthday selection
    const [selectedBirthDate, setSelectedBirthDate] = useState(null);
    const handleBirthDateSelect = (birthdate) => {
        setSelectedBirthDate(birthdate);
    };
    //handling gender selection
    const gender = [{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}];
    const [selectedGender, setSelectedGender] = useState('');
    // fetch user info and set it to states
    useEffect(() => {
        const targetBirthDate = user.date_of_birth;
        setSelectedBirthDate(targetBirthDate);
        if(user.gender){
            const targetGender = gender.find(item => item.value === user.gender);
            setSelectedGender(targetGender.value)
        }
    }, [user]);

    console.log('gender',selectedGender)
    console.log('birthday', selectedBirthDate)

    //formik
    const initialValues = { 
        firstName: user.first_name ? user.first_name : 'N/A', 
        middleName: user.middle_name ? user.middle_name : 'N/A',
        lastName: user.last_name ? user.last_name : 'N/A',
        company: user.company ? user.company : 'N/A',
    };

    const updateBasicInformation = UserStore((state) => state.updateBasicInformation)
    const handleFormikSubmit = (values, { resetForm }) => {
        console.log('basic information:',values)
        try{
          startLoading()

          updateBasicInformation({
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            company: values.company,
            birthDate: selectedBirthDate,
            gender: selectedGender,
            token: userToken,
          })
        //   resetForm();
        }
        catch(error){
          showAlert("Error", "Cannot send values.")
          stopLoading()
        }
    };
    const formik = useFormik({
        initialValues,
        onSubmit: handleFormikSubmit,
    });

    // For navigating to next screen
    const isUpdatedBasicInformationUpdated = UserStore(state => state.isUpdatedBasicInformationUpdated)
    useEffect(() => {
        if (isUpdatedBasicInformationUpdated) {
            navigation.navigate("Settings", {
                screen: "SettingsMenu",
                key: Math.random().toString
            })
        }
    }, [isUpdatedBasicInformationUpdated]);

    const EditButtonGroup = () => (
        <>
            <ButtonText
                width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' 
                text='Submit' textSize='18' onPress={formik.handleSubmit}
            />
            <ButtonText
                width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' 
                text='Cancel' textSize='18' onPress={() => setMode("details")}
            />
        </>
    );

    return (
        <BasicInformationContainer>
            <BasicInformationTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <BasicInformationTitleText>Basic Information</BasicInformationTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </BasicInformationTitleContainer>
            <FormContainer>
                <FormRowContainer>
                    <TextInput 
                        inputProps={{
                            onChangeText: formik.handleChange("firstName"),
                            value: formik.values.firstName,
                            editable: mode === "edit"
                        }}
                        customLabel="First Name"
                        width='48%'
                        labelTextSize = '12px'
                        variant='non-filled'
                    />
                    <TextInput 
                        inputProps={{
                            onChangeText: formik.handleChange("middleName"),
                            value: formik.values.middleName,
                            editable: mode === "edit"
                        }}
                        customLabel="Middle Name"
                        width='48%'
                        labelTextSize = '12px'
                        variant='non-filled'
                    />
                </FormRowContainer>
                <TextInput 
                    inputProps={{
                        onChangeText: formik.handleChange("lastName"),
                        value: formik.values.lastName,
                        editable: mode === "edit"
                    }}
                    customLabel="Last Name"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                <TextInput 
                    inputProps={{
                        onChangeText: formik.handleChange("company"),
                        value: formik.values.company,
                        editable: mode === "edit"
                    }}
                    customLabel="Company"
                    labelTextSize = '14px'
                    variant='non-filled'
                />
                <FormRowContainer>
                    <DatePicker title='Birth Date' selectedDate={selectedBirthDate} onSelectDate={handleBirthDateSelect}
                    enteredDate={selectedBirthDate}/>
                    <CustomDropdown 
                        data={gender}
                        title={'Gender'}
                        width='48%'
                        size={12}
                        customColor={colors.basic.basic200}
                        selectedValue={selectedGender}
                        onValueChange={(value) => setSelectedGender(value)}
                    />
                </FormRowContainer>
                <ButtonContainer mode={mode}>
                    {mode === "edit" ? (
                        <EditButtonGroup />
                    ) : (
                        <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Edit' textSize='18'
                            onPress={() => setMode("edit")}
                        />
                    )}
                </ButtonContainer>
            </FormContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </BasicInformationContainer>
    )
}

export default BasicInformationScreen