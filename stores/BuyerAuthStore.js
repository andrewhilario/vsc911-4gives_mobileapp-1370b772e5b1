import { create } from 'zustand';
import axios from 'axios';

import useDecryptService from '../hooks/useDecryptService';

import LoaderStore from './LoaderStore'
import AlertStore from './AlertStore';
import UserStore from './UserStore';

const apiUrl = 'https://dev.api.4gives.me/'

const BuyerAuth = (set, get) => ({
    isSignUpVerified: false, //state to check if signed up account is verified
    isSignedUp: false, //state to check if user is signed up
    isContactNumberRegistered: false,
    isContactNumberVerified: false, //state to check if number is verified
    isProfileEntered: false, //state to check if user has entered its profile information
    contactNumber: null, //state for sign up contactNumber
    signUpAuthenticationToken: null, //state for user token in signUpVerifyUser
    sessionID: null,
    accountStatus: null,
    signUpUpdateUser: async (user) => {
        console.log(user)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/buyer/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password,
                    confirm_password: user.password,
                    contact_number: user.contactNumber,
                }),
            })
            const data = await response.json();
            const decryptedData = useDecryptService(data.data, data.iv)
            console.log('user data', decryptedData)
            const parsedData = JSON.parse(decryptedData)
            UserStore.setState({user: parsedData});
            const token = parsedData.token
            if(token){
                set({ signUpAuthenticationToken: token })
                console.log('token', token)
                try{
                    const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/number/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                                Authorization: `Token ${token}`,
                            },
                            body: JSON.stringify({
                                number: user.contactNumber
                            }),
                        })
                    const data = await response.json()
                    const result = data.response
                    console.log(result)
                    if(result){
                        set({ isContactNumberRegistered: true, contactNumber: user.contactNumber, sessionID: result.session_id})
                        //setting state of user feedback stores to initialize user feedback components
                        LoaderStore.getState().stopLoading();
                        AlertStore.getState().showAlert('Success', 'Mobile number registered.');
                    }else{
                        LoaderStore.getState().stopLoading();
                        AlertStore.getState().showAlert('Error', `Failed to send number.`)
                    }
                }catch(error){
                    //setting state of user feedback stores to initialize user feedback components
                    LoaderStore.getState().stopLoading();
                    AlertStore.getState().showAlert('Error', `Number unavailable. ${error}`)
                }
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to register user. ${error}`)
            console.log(error)
        }
    },
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
                    session_id: user.sessionID,
                    otp: "123456"
                }),
            })
            //response is to check the status
            const data = await response.json()
            // console.log(data)
            const result = data.response
            console.log(result)
            if(result){
                set({ accountStatus: result.status })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Account registered. Please take the following steps.');
            }else{
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', 'Account fail to register.');
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to verify number. ${error}`)
        }
    },

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

    isDocumentsUploaded: false,
    setIsDocumentsUploadedFalse: () => set({ isDocumentsUploaded: false }),
    uploadDocuments: async (documents) => {
        try {
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/upload/documents/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${documents.token}`,
                },
                body: JSON.stringify({
                    selfie_primary_id: documents.primaryIDSelfieURI,
                    selfie_secondary_id: documents.secondaryIDSelfieURI,
                    primary_government_id_front: documents.primaryIDFrontURI,
                    secondary_government_id_front: documents.secondaryIDFrontURI,
                    primary_government_id_type: documents.primaryIDType,
                    secondary_government_id_type: documents.secondaryIDType,
                }),
            })
            //response is to check the status
            const data = await response.json()
            console.log(data)
            if(data.Message = "Thank you! Your data is being processed and you can already enjoy all features of the application"){
                set({ isDocumentsUploaded: true })
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', `'Documents uploaded. ${data.Message}`);
            } else {
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', 'Failed to upload documents.');
            }
        } catch (error) {
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to upload documents. ${error}`)
        }
    },
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
    },

    loginCounter: 0,
    isLoginDisabled: false,
    isEmailConfirmedInLogin: true,
    logInUser: async (verifyUser) => {
        //logIn state management processes
        //call login API through axios
        axios({
            method: 'post',
            url: 'https://dev.api.4gives.me/api/v1/rest-auth/login/',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: '',
            },
            data: {
                email: verifyUser.email,
                password: verifyUser.password
            }
        }).then(async (response) => {
            console.log('login response', response.data)
            UserStore.setState({userToken: response.data.key})
            //response will be a authorization key
            //call user API through axios
            console.log('login', response.data.key)
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/users/user/',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${response.data.key}`,
                },
            }).then((response) => {
                //response is a encrypted data and an iv
                //using decryption service hook
                const decryptedData = useDecryptService(response.data.data, response.data.iv)
                const parsedData = JSON.parse(decryptedData)
                //set states according to decryptedData
                //setting state of user feedback stores to initialize user feedback components
                if(parsedData.emailConfirmed === true){
                    LoaderStore.getState().stopLoading();
                    AlertStore.getState().showAlert('Success', 'You have successfully logged in.');
                    UserStore.setState({user: parsedData});
                    UserStore.setState({isLoggedIn: true});
                }else{
                    set({ isEmailConfirmedInLogin: false })
                    LoaderStore.getState().stopLoading();
                    AlertStore.getState().showAlert('Success', 'Please verify updated email.');
                }
                
            }).catch(function (error) {
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to log-in. ${error}`)
                set((state) => ({ loginCounter: state.loginCounter + 1 }));
                set((state) => ({ isLoginDisabled: state.loginCounter >= 5 }));
            });
        }).catch(function (error) {
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to log-in. ${error}`)
            set((state) => ({ loginCounter: state.loginCounter + 1 }));
            set((state) => ({ isLoginDisabled: state.loginCounter >= 5 }));
        });
    },

})

const BuyerAuthStore = create(BuyerAuth);

export default BuyerAuthStore;