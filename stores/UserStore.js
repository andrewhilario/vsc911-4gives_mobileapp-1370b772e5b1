import { create } from 'zustand';
import axios from 'axios';

import useDecryptService from '../hooks/useDecryptService';

import LoaderStore from './LoaderStore'
import AlertStore from './AlertStore';

const User = (set, get) => ({
    //general
    user: null, //user information
    userNotifications: null,
    userToken: null, //user token
    isLoggedIn: false, //state to check if user is logged in
    isUserSMSVerified: false,
    setUser: (data) => set({ user: data }), //set user state
    setUserNotifications: (data) => set({ userNotifications: data}),
    setLoggedIn: () => set({ isLoggedIn: true }),
    sendSMSCodeVerify: async (user) => {
        console.log(user.code)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/number/confirm/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${user.token}`,
                },
                body: JSON.stringify({
                    uid: "85103a68-6e71-4854-876e-acca007f2b2f",
                    code: user.code,
                }),
            })
             //response is to check the status
            console.log('SMS Status:', response.status)
            set({ isUserSMSVerified: true })
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Success', 'Your contact number is verified.');
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to verify number. ${error}`)
        }
    },
    logoutUser: () => {
        //sets the state to tell the user has logged out
        set({ isLoggedIn: false, user: null })
        //setting state of user feedback stores to initialize user feedback components
        AlertStore.getState().showAlert('Success', 'You have successfully logged out.')
    },

    //settings
    selectedSettings: null,
    setSelectedSettingsAsUpdateEmail: () => set({ selectedSettings: "updateEmail" }),
    setSelectedSettingsAsUpdateMobileNumber: () => set({ selectedSettings: "updateMobileNumber" }),

    //basic information states
    isUpdatedBasicInformationUpdated: false,
    setUpdatedBasicInformationUpdatedFalse: () => set({ isUpdatedBasicInformationUpdated: false}),
    updateBasicInformation: async (user) => {
        console.log('updateinfo', user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/update-basic-info/", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${user.token}`,
                    },
                    body: JSON.stringify({
                        first_name: user.firstName,
                        middle_name: user.middleName,
                        last_name: user.lastName,
                        date_of_birth: user.birthDate,
                        gender: user.gender
                    }),
                })
            const data = await response.json()
            console.log('updated:', data)
            if(data){
                set({ isUpdatedBasicInformationUpdated: true })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Basic information updated.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to update basic information.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to update basic information. ${error}`)
        }
    },

    //update email states
    updatedEmail: '',
    isUpdateEmailEntered: false,
    isUpdateEmailVerified: false,
    updateEmail: async (user) => {
        console.log('updated email', user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/update-email/", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${user.token}`,
                    },
                    body: JSON.stringify({
                        new_email: user.updatedEmail,
                    }),
                })
            const data = await response.json()
            console.log('updateEmail data:', data)
            if(data.emailConfirmed === false){
                set({ isLoggedIn: false, user: null })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Information entered. Awaiting verification User will be logged out.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to sent confirmation email.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to update email. ${error}`)
        }
    },
    verifyUpdatedEmail: async (user) => {
        console.log(user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/verify/", {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${user.token}`,
                    },
                    body: JSON.stringify({
                        confirmation_key: user.code,
                    }),
                })
            const data = await response.json()
            if(data){
                set({ isLoggedIn: true, user: data })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Email updated.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to verify email.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Email unverified wrong code. ${error}`)
        }
    },
    
    //update number states
    updatedNumber: null,
    isNumberWaitingToBeUpdated: false,
    isUpdateNumberVerified: false,
    setUpdateNumberVerifiedFalse: () => set({ isUpdateNumberVerified: false}),
    sessionID: null,
    sendOTPFromMobileNumber: async (user) => {
        console.log(user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/number/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${user.token}`,
                    },
                    body: JSON.stringify({
                        number: user.number
                    }),
                })
            const data = await response.json()
            const result = data.response
            console.log(result)
            if(result){
                set({ updatedNumber: user.updatedMobileNumber, isNumberWaitingToBeUpdated: true, sessionID: result.session_id })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Mobile number waiting to be updated.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to send number.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Number unavailable. ${error}`)
        }
    },
    // updateMobileNumber: async (user) => {
    //     try{
    //         const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/update-mobile-number/", {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Accept: 'application/json',
    //                     Authorization: `Token ${user.token}`,
    //                 },
    //                 body: JSON.stringify({
    //                     new_number: user.updatedMobileNumber,
    //                 }),
    //             })
    //         const data = await response.json()
    //         console.log('updateMobileNumber data:', data)
    //         set({ isUpdateNumberEntered: true })
    //         //setting state of user feedback stores to initialize user feedback components
    //         LoaderStore.getState().stopLoading();
    //         AlertStore.getState().showAlert('Success', 'Information entered. Awaiting verification.');
    //     }catch(error){
    //         //setting state of user feedback stores to initialize user feedback components
    //         LoaderStore.getState().stopLoading();
    //         AlertStore.getState().showAlert('Error', `Failed to update number. ${error}`)
    //     }
    // },
    verifyUpdatedMobileNumber: async (user) => {
        console.log(user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/number/confirm/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${user.token}`,
                },
                body: JSON.stringify({
                    session_id: user.sessionID,
                    otp: "123456"
                }),
            })
            const data = await response.json()
            // console.log(data)
            const result = data.response
            console.log(result)
            if(result.status === 'VERIFIED'){
                try{
                    const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/update-mobile-number/", {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: `Token ${user.token}`,
                        },
                        body: JSON.stringify({
                            new_number: user.updatedNumber,
                        }),
                    })
                    const data = await response.json()
                    console.log(data)
                    if(data){
                        set({ isUpdateNumberVerified: true })
                        //setting state of user feedback stores to initialize user feedback components
                        LoaderStore.getState().stopLoading();
                        AlertStore.getState().showAlert('Success', 'Mobile number updated and verified.');
                    }
                    // if(data.msg === 'Number successfully updated.'){
                    //     set({ isUpdateNumberVerified: true })
                    //     //setting state of user feedback stores to initialize user feedback components
                    //     LoaderStore.getState().stopLoading();
                    //     AlertStore.getState().showAlert('Success', 'Mobile number updated and verified.');
                    // }
                }catch(error){
                    //setting state of user feedback stores to initialize user feedback components
                    LoaderStore.getState().stopLoading();
                    AlertStore.getState().showAlert('Error', `Failed to update number. ${error}`)
                }
            } else if(result.status === 'WAITING'){
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to verify mobile number.${result.error}`)
            } else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', 'OTP is expired.')
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Mobile number unverified wrong code. ${error}`)
        }
    },

    //updatead address states
    isUpdatedAddressEntered: false,
    setUpdateAddressEnteredFalse: () => set({ isUpdatedAddressEntered: false}),
    updateAddress: async (user) => {
        console.log('update address:',user)
        let _street = user.street
        let _barangay = user.barangay
        let _city = user.city
        let _region = user.region
        let _zipcode = user.zipCode
        let _token = user.token

        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/update-address/", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${_token}`,
                    },
                    body: JSON.stringify({
                        street: 'street',
                        barangay: 'barangay',
                        city: 'city',
                        region: 'Bulacan',
                        zip_code: '2500',
                    }),
                })
            const data = await response.json()
            // const result = data.response
            console.log(data)
            // if(result){
            //     set({ updatedNumber: user.updatedMobileNumber, isNumberWaitingToBeUpdated: true, sessionID: result.session_id })
            //     //setting state of user feedback stores to initialize user feedback components
            //     LoaderStore.getState().stopLoading();
            //     AlertStore.getState().showAlert('Success', 'Mobile number waiting to be updated.');
            // }else{
            //     LoaderStore.getState().stopLoading();
            //     AlertStore.getState().showAlert('Error', `Failed to send number.`)
            // }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to update. ${error}`)
        }
    },

    //user transactions
    userCurrentTransactions: [],
    setUserCurrentTransactions: (data) => set({userCurrentTransactions: data}),
    userPendingTransactions: [],
    setUserPendingTransactions: (data) => set({userPendingTransactions: data}),
    userCompletedTransactions: [],
    setUserCompletedTransactions: (data) => set({userCompletedTransactions: data}),
    userPaymentSources: [],
    setUserPaymentSources: (data) => set({userPaymentSources: data}),

    validIDs: null,
    setValidIDs: (data) =>  set({ validIDs: data }),
    primaryIDSelfieURI: null,
    primaryIDFrontURI: null,
    primaryIDBackURI: null,
    setPrimaryIDSelfieURI: (data) =>  set({ primaryIDSelfieURI: data }),
    setPrimaryIDFrontURI: (data) =>  set({ primaryIDFrontURI: data }),
    setPrimaryIDBackURI: (data) =>  set({ primaryIDBackURI: data }),
    secondaryIDSelfieURI: null,
    secondaryIDFrontURI: null,
    secondaryIDBackURI: null,
    setSecondaryIDSelfieURI: (data) =>  set({ secondaryIDSelfieURI: data }),
    setSecondaryFrontURI: (data) =>  set({ secondaryIDFrontURI: data }),
    setSecondaryIDBackURI: (data) =>  set({ secondaryIDBackURI: data }),

    clearUpload: (type) => {
        switch (type) {
            case 'primary-id-front':
                set({primaryIDFrontURI: null})
                break;
            case 'primary-id-back':
                set({primaryIDBackURI: null})
                break;
            case 'primary-id-selfie':
                set({primaryIDSelfieURI: null})
                break;
            case 'secondary-id-front':
                set({secondaryIDFrontURI: null})
                break;
            case 'secondary-id-back':
                set({secondaryIDBackURI: null})
                break;
            case 'secondary-id-selfie':
                set({secondaryIDSelfieURI: null})
                break;
            case 'all':
                set({primaryIDFrontURI: null})
                set({primaryIDBackURI: null})
                set({primaryIDSelfieURI: null})
                set({secondaryIDFrontURI: null})
                set({secondaryIDBackURI: null})
                set({secondaryIDSelfieURI: null})
                break;
            default:
                break;
        }
    }
});

const UserStore = create(User);

export default UserStore;