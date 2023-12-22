import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useFormik } from "formik";

import { FormContainer, GenderButton, GenderSelectorContainer, GenderText, GenderTitle, HeaderContainer, HeaderIconContainer, HeaderTitle, SetupProfileContainer, GenderContainer, GenderButtonContainer, HolderContainer, ButtonContainer, ScrollContainer } from './styles'

import { provinces } from '../../../../constants/Provinces';
import { colors } from '../../../../constants/Colors';

import TextInput from '../../../shared/TextInput/TextInput';
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader';
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import ButtonUploadImage from '../../../shared/ButtonUploadImage/ButtonUploadImage';
import DatePicker from '../../../shared/DatePicker/DatePicker';
import BuyerAuthStore from '../../../../stores/BuyerAuthStore';
import UserStore from '../../../../stores/UserStore';

const SetupProfileScreen = ({navigation}) => {
  //zustand state management stores
  const setupProfileUser = BuyerAuthStore((state) => state.setProfileUser);
  const userInfo = UserStore(state => state.user);
  const userToken = UserStore(state => state.userToken);
  const isProfileEntered = BuyerAuthStore(state => state.isProfileEntered);

  const isLoading = LoaderStore(state => state.isLoading);
  const startLoading = LoaderStore((state) => state.startLoading);
  const stopLoading = LoaderStore((state) => state.stopLoading);

  const isAlertVisible = AlertStore(state => state.isAlertVisible);
  const alertTitle = AlertStore(state => state.alertTitle);
  const alertMessage = AlertStore(state => state.alertMessage);
  const showAlert = AlertStore((state) => state.showAlert);
  const hideAlert = AlertStore((state) => state.hideAlert);

  //handling gender selection
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const handleBirthDateSelect = (birthdate) => {
    setSelectedBirthDate(birthdate);
    console.log('birhtday', selectedBirthDate)
  };

  //handling gender selection
  const [selectedGender, setSelectedGender] = useState(null);
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  //handling profile photo upload
  const [profilePhoto, setProfilePhoto] = useState(null);
  const handleProfilePhotoUpload = (imageUrl) => {
      setProfilePhoto(imageUrl)
      console.log('Uploaded profile photo:', imageUrl);
  };

  // initialize keys to select provinces
  const provincesData = Object.keys(provinces);
  // initialize states
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  //handling province selection
  const handleProvinceSelect = (item) => {
    setSelectedProvince(item);
  };

  // initialize data of cities when province has been selected
  const citiesData = provinces[selectedProvince]
  //handling city selection
  const handleCitySelect = (item) => {
    setSelectedCity(item);
  };

  //handling valid id upload
  const [validIdPhoto, setValidIdPhoto] = useState(null);
  const handleValidIdPhotoUpload = (imageUrl) => {
      setValidIdPhoto(imageUrl)
      console.log('Uploaded valid ID photo:', imageUrl);
  };

  //formik
  const initialValues = { 
    // firstName: userInfo.first_name ? userInfo.first_name : "", 
    // middleName: userInfo.middle_name ? userInfo.middle_name : "",
    // lastName: userInfo.last_name ? userInfo.last_name : "",
    firstName: 'test',
    middleName: 'test',
    lastName: 'test',
    address: "",
    barangay: "",
    zipCode: "",
  };
  const handleFormikSubmit = (values, { resetForm }) => {
    console.log(values)
    try{
      startLoading()
      if (values.address === "" || values.barangay === "" || values.zipCode === "") {
        showAlert("Incomplete input", "Please enter information.")
      } else {
          setupProfileUser({
            birthDate: selectedBirthDate,
            address: values.address,
            barangay: values.barangay,
            city: selectedCity,
            province: selectedProvince,
            zipCode: values.zipCode,
            token: userToken,
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
    return formik.values.address !== '' && formik.values.barangay !== '' && formik.values.zipCode !== ''
    // return Object.values(formik.values).every((value) => value !== '');
  };

  const handleAlertClose = () => {
    stopLoading()
    hideAlert()
  }

  // navigating to next screen
  useEffect(() => {
    if (isProfileEntered) {
      navigation.navigate("SignUpStatus");
    }
}, [isProfileEntered]);

  return (
    <SetupProfileContainer>
      <HolderContainer />
      <HeaderContainer>
          <HeaderTitle>Profile Details</HeaderTitle>
        </HeaderContainer>
        <FormContainer>
          <ButtonUploadImage type='profile-photo' title='Upload profile photo' onImageUpload={handleProfilePhotoUpload} isBold={true}/>
          <TextInput inputProps={{
              // placeholder: "Enter your first name",
              onChangeText: formik.handleChange("firstName"),
              value: formik.values.firstName,
              editable: false
            }}
            customLabel="First Name"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <TextInput inputProps={{
              // placeholder: "Enter your middle name",
              onChangeText: formik.handleChange("middleName"),
              value: formik.values.middleName,
              editable: false
            }}
            customLabel="Middle Name"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <TextInput inputProps={{
              // placeholder: "Enter your last name",
              onChangeText: formik.handleChange("lastName"),
              value: formik.values.lastName,
              editable: false
            }}
            customLabel="Last Name"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <DatePicker title='Enter birth date' selectedDate={selectedBirthDate} onSelectDate={handleBirthDateSelect}/>
          <GenderContainer>
            <GenderTitle>Sex</GenderTitle>
            <GenderSelectorContainer>
              <GenderButtonContainer>
              <GenderText>Male</GenderText>
              <GenderButton selected={selectedGender === 'male'} onPress={() => handleGenderSelect('male')} />
              </GenderButtonContainer>
              <GenderButtonContainer>
                <GenderText>Female</GenderText>
                <GenderButton selected={selectedGender === 'female'} onPress={() => handleGenderSelect('female')} />
              </GenderButtonContainer>
            </GenderSelectorContainer>
          </GenderContainer>
          <TextInput inputProps={{
              placeholder: "House No., Street, Village/Subdivision",
              onChangeText: formik.handleChange("address"),
              value: formik.values.address,
            }}
            customLabel="Address"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <TextInput inputProps={{
              placeholder: "Enter Barangay",
              onChangeText: formik.handleChange("barangay"),
              value: formik.values.barangay,
            }}
            customLabel="Barangay"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <CustomDropdown 
            data={provincesData}
            placeholderText={'Select province'}
            title='Choose Province'
            size='14px'
            customColor={colors.basic.basic400}
            onValueChange={handleProvinceSelect}
          />
          <CustomDropdown 
            data={citiesData}
            placeholderText={'Select city'}
            title='Choose City'
            size='14px'
            customColor={colors.basic.basic400}
            onValueChange={handleCitySelect}
          />
          <TextInput inputProps={{
              placeholder: "Enter Zip Code",
              keyboardType: 'number-pad',
              maxLength: 4,
              onChangeText: formik.handleChange("zipCode"),
              value: formik.values.zipCode,
            }}
            customLabel="Zip Code"
            labelTextSize = '14px'
            variant='non-filled'
          />
          <ButtonUploadImage title='Upload valid id' onImageUpload={handleValidIdPhotoUpload} isBold={true}/>
          <ButtonContainer>
            <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='20'
              isDisabled={!isFormValid()} disabled={isFormValid()} onPress={formik.handleSubmit}/>
          </ButtonContainer>
        </FormContainer>
      <CustomLoader visible={isLoading}/>
      <CustomAlert 
        visible={isAlertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={handleAlertClose}
      />
    </SetupProfileContainer>
  )
}

export default SetupProfileScreen