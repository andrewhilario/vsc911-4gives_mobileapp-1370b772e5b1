import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useFormik } from "formik";

import { AddressContainer, AddressTitleContainer, AddressTitleText, BackButton, BackContainer, ButtonContainer, FormContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import { newProvinces } from '../../../../constants/Provinces';
import { citiesData } from '../../../../constants/Cities';
import TextInput from '../../../shared/TextInput/TextInput';
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

import UserStore from '../../../../stores/UserStore';
import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';


const AddressScreen = ({navigation}) => {
    //fetching user state
    const user = UserStore(state => state.user);
    const userToken = UserStore(state => state.userToken)
    const isUpdatedAddressEntered = UserStore(state => state.isUpdatedAddressEntered)
    const updateAddress = UserStore((state) => state.updateAddress)

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

    // initialize keys to select provinces
    // initialize states
    const [selectedProvince, setSelectedProvince] = useState(null);

    useEffect(() => {
        const targetProvince = newProvinces.find(province => province.value === user.addresses[0].region);
        setSelectedProvince(targetProvince.value);
    }, [user]);

    //formik
    const initialValues = { 
        street: user.addresses[0].street, 
        barangay: user.addresses[0].barangay,
        city: user.addresses[0].city,
        // province: user.addresses[0].region,
        zipCode: user.addresses[0].zip_code, 
    };
    const handleFormikSubmit = (values, { resetForm }) => {
        console.log(values)
        try{
            startLoading()
            updateAddress({
                street: values.street,
                barangay: values.barangay,
                city: values.city,
                region: selectedProvince,
                zipCode: values.zipCode,
                token: userToken
            })
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

    
    //handling mode
    const [mode, setMode] = useState("details");
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
        <AddressContainer>
            <AddressTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <AddressTitleText>Address</AddressTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>   
            </AddressTitleContainer>
            <FormContainer>
                <TextInput
                    inputProps={{
                        onChangeText: formik.handleChange("street"),
                        value: formik.values.street,
                        multiline: true,
                        editable: mode === "edit"
                    }}
                    customLabel="House No., Unit No., Street, Village, Building, etc."
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                <TextInput
                    inputProps={{
                        onChangeText: formik.handleChange("barangay"),
                        value: formik.values.barangay,
                        editable: mode === "edit"
                    }}
                    customLabel="Barangay"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                <TextInput
                    inputProps={{
                        onChangeText: formik.handleChange("city"),
                        value: formik.values.city,
                        editable: mode === "edit"
                    }}
                    customLabel="City/Municipality"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                {/* <TextInput
                    inputProps={{
                        onChangeText: formik.handleChange("province"),
                        value: formik.values.province,
                        editable: mode === "edit"
                    }}
                    customLabel="Province"
                    labelTextSize = '12px'
                    variant='non-filled'
                /> */}
                <CustomDropdown 
                    data={newProvinces}
                    title={'Province'}
                    width='100%'
                    size={12}
                    customColor={colors.basic.basic200}
                    selectedValue={selectedProvince}
                    onValueChange={(value) => setSelectedProvince(value)}
                />
                <TextInput
                    inputProps={{
                        onChangeText: formik.handleChange("zipCode"),
                        value: formik.values.zipCode,
                        keyboardType: 'number-pad',
                        maxLength: 4,
                        editable: mode === "edit"
                    }}
                    customLabel="Zip Code"
                    labelTextSize = '12px'
                    variant='non-filled'
                />
                {/* <CustomDropdown 
                    data={sortedCitiesData}
                    title={'City'}
                    width='100%'
                    size={12}
                    customColor={colors.basic.basic200}
                    selectedValue={selectedCity}
                    onValueChange={(value) => setSelectedCity(value)}
                    haveDivisions={true}
                /> */}
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
        </AddressContainer>
    )
}

export default AddressScreen