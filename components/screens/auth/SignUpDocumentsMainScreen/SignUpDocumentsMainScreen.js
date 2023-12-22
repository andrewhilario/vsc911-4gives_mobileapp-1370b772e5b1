import React, { useEffect, useRef, useState } from 'react'
import ActionSheet from "react-native-actions-sheet";
import { Feather, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

import { BackButton, BackContainer, ButtonContainer, MenuButtonText, MenuButtonTextContainer, FileContainer, FileIconContainer, FileItemsContainer, FileNameText, FileSizeText, FileTextContainer, FormBoldText, FormContainer, FormText, FormTextContainer, IconContainer, NavigationButtonContainer, PromptContainer, PromptIconContainer, PromptText, PromptTextContainer, SelectorButtonText, SelectorButtonsContainer, SelectorContainer, SignUpDocumentsMainContainer, SignUpDocumentsMainTitleContainer, SignUpDocumentsMainTitleText, UploadContainer } from './styles'

import { colors } from '../../../../constants/Colors'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import ActionSheetMenuButton from '../../../shared/ActionSheetMenuButton/ActionSheetMenuButton';
import DocumentsUploadButton from '../../../shared/DocumentsUploadButton/DocumentsUploadButton';
import UploadedFileCard from '../../../shared/UploadedFileCard/UploadedFileCard';
import UploadFromLibraryModal from '../../../shared/UploadFromLibraryModal/UploadFromLibraryModal';
import UploadFromCameraModal from '../../../shared/UploadFromCameraModal/UploadFromCameraModal';

import BuyerAuthStore from '../../../../stores/BuyerAuthStore';
import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';

import useGetValidIDs from '../../../../hooks/useGetValidIDs';
import UploadSelfieByCameraModal from '../../../shared/UploadSelfieByCameraModal/UploadSelfieByCameraModal';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

const SignUpDocumentsMainScreen = ({navigation}) => {
    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);
  
    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //handle close alert
    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }
    
    //Initialize documents states
    const primaryIDSelfieURI = BuyerAuthStore(state => state.primaryIDSelfieURI)
    const primaryIDFrontURI = BuyerAuthStore(state => state.primaryIDFrontURI)
    const primaryIDBackURI = BuyerAuthStore(state => state.primaryIDBackURI)
    const secondaryIDSelfieURI = BuyerAuthStore(state => state.secondaryIDSelfieURI)
    const secondaryIDFrontURI = BuyerAuthStore(state => state.secondaryIDFrontURI)
    const secondaryIDBackURI = BuyerAuthStore(state => state.secondaryIDBackURI)

    // Initialize uploaded documents
    const [hasUploaded, setHasUploaded] = useState(false);

    // Initialize display tabs
    const [activeTab, setActiveTab] = useState('Primary');
    // Set primary
    const handleSetPrimary = () => {
        setActiveTab('Primary')
    }
    // Set secondary
    const handleSetSecondary = () => {
        setActiveTab('Secondary')
    }

    const { validIDs } = useGetValidIDs();
    const [selectedPrimaryGovernmentID, setSelectedPrimaryGovernmentID] = useState(null)
    const [selectedSecondaryGovernmentID, setSelectedSecondaryGovernmentID] = useState(null)

    //handling upload primary IDs
    const primaryIDsMenuRef = useRef(null)
    //handling primary IDs library modal
    const [isPrimaryIDsLibraryModalVisible, setIsPrimaryIDsLibraryModalVisible] = useState(false);
    const handlePrimaryIDsLibraryModalOpen = () => {
        setIsPrimaryIDsLibraryModalVisible(true);
        primaryIDsMenuRef.current?.hide()
    };
    const handlePrimaryIDsLibraryModalClose = () => {
        setIsPrimaryIDsLibraryModalVisible(false);
    };
    //handling primary IDs camera modal
    const [isPrimaryIDsCameraModalVisible, setIsPrimaryIDsCameraModalVisible] = useState(false);
    const handlePrimaryIDsCameraModalOpen = () => {
        setIsPrimaryIDsCameraModalVisible(true);
        primaryIDsMenuRef.current?.hide()
    };
    const handlePrimaryIDsCameraModalClose = () => {
        setIsPrimaryIDsCameraModalVisible(false);
    };

    //handling upload primary IDs
    const secondaryIDsMenuRef = useRef(null)
    //handling secondary IDs library modal
    const [isSecondaryIDsLibraryModalVisible, setIsSecondaryIDsLibraryModalVisible] = useState(false);
    const handleSecondaryIDsLibraryModalOpen = () => {
        setIsSecondaryIDsLibraryModalVisible(true);
        secondaryIDsMenuRef.current?.hide()
    };
    const handleSecondaryIDsLibraryModalClose = () => {
        setIsSecondaryIDsLibraryModalVisible(false);
    };
    //handling secondary IDs camera modal
    const [isSecondaryIDsCameraModalVisible, setIsSecondaryIDsCameraModalVisible] = useState(false);
    const handleSecondaryIDsCameraModalOpen = () => {
        setIsSecondaryIDsCameraModalVisible(true);
        secondaryIDsMenuRef.current?.hide()
    };
    const handleSecondaryIDsCameraModalClose = () => {
        setIsSecondaryIDsCameraModalVisible(false);
    };
    //handling primary id selfie camera modal
    const [isPrimarySelfieCameraModalVisible, setIsPrimarySelfieCameraModalVisible] = useState(false);
    const handlePrimarySelfieCameraModalOpen = () => {
        setIsPrimarySelfieCameraModalVisible(true);
        setCommand('primary-id-selfie')
    };
    const handlePrimarySelfieCameraModalClose = () => {
        setIsPrimarySelfieCameraModalVisible(false);
    };
    //handling secondary id selfie camera modal
    const [isSecondarySelfieCameraModalVisible, setIsSecondarySelfieCameraModalVisible] = useState(false);
    const handleSecondarySelfieCameraModalOpen = () => {
        setIsSecondarySelfieCameraModalVisible(true);
        setCommand('secondary-id-selfie')
    };
    const handleSecondarySelfieCameraModalClose = () => {
        setIsSecondarySelfieCameraModalVisible(false);
    };

    //unique commands to satisfy reusable upload modals
    const [command, setCommand] = useState(null)
    const uploadPrimaryIDFront = () => {
        primaryIDsMenuRef.current?.show()
        setCommand('primary-id-front')
    };
    const uploadPrimaryIDBack = () => {
        primaryIDsMenuRef.current?.show()
        setCommand('primary-id-back')
    };
    const uploadSecondaryIDFront = () => {
        secondaryIDsMenuRef.current?.show()
        setCommand('secondary-id-front')
    };
    const uploadSecondaryIDBack = () => {
        secondaryIDsMenuRef.current?.show()
        setCommand('secondary-id-back')
    };

    const signUpAuthenticationToken = BuyerAuthStore(state => state.signUpAuthenticationToken)
    const isDocumentsUploaded = BuyerAuthStore(state => state.isDocumentsUploaded)
    const uploadDocuments = BuyerAuthStore((state) => state.uploadDocuments)
    const clearUpload = BuyerAuthStore((state) => state.clearUpload)
    const handleSubmit = () => {
        if (primaryIDFrontURI === null || primaryIDBackURI === null || primaryIDSelfieURI === null ||
            secondaryIDFrontURI === null || secondaryIDBackURI === null || secondaryIDSelfieURI  === null) {
                stopLoading()
                showAlert("Incomplete input", "Please upload the required documents.")
        } else {
            uploadDocuments({
                primaryIDType: selectedPrimaryGovernmentID,
                primaryIDFrontURI: primaryIDFrontURI.base64,
                primaryIDBackURI: primaryIDBackURI.base64,
                primaryIDSelfieURI: primaryIDSelfieURI.base64,
                secondaryIDType: selectedSecondaryGovernmentID,
                secondaryIDFrontURI: secondaryIDFrontURI.base64,
                secondaryIDBackURI: secondaryIDBackURI.base64,
                secondaryIDSelfieURI: secondaryIDSelfieURI.base64,
                token: signUpAuthenticationToken
            })
            clearUpload('all')
        }
    }
    const handleSkip = () => {
        clearUpload('all')
        navigation.navigate('SignUpBiometricSetup')
    }

    //for navigating to next screen
    useEffect(() => {
        if (isDocumentsUploaded) {
        navigation.navigate("SignUpDocumentsStatus");
        }
    }, [isDocumentsUploaded]);

    return (
        <SignUpDocumentsMainContainer>
            <SignUpDocumentsMainTitleContainer>
                <BackContainer>
                    <BackButton disabled={true}>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
                <SignUpDocumentsMainTitleText>Documents</SignUpDocumentsMainTitleText>
                <BackContainer>
                    <BackButton disabled={true}>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </SignUpDocumentsMainTitleContainer>
            <SelectorContainer>
                <SelectorButtonsContainer onPress={handleSetPrimary} active={activeTab === 'Primary'}>
                    <SelectorButtonText active={activeTab === 'Primary'}>Primary ID</SelectorButtonText>
                </SelectorButtonsContainer>
                <SelectorButtonsContainer onPress={handleSetSecondary} active={activeTab === 'Secondary'}>
                    <SelectorButtonText active={activeTab === 'Secondary'}>Secondary ID</SelectorButtonText>
                </SelectorButtonsContainer>
            </SelectorContainer>
            <FormContainer>
                {
                    activeTab === 'Primary' ? (
                        <>
                            <FormTextContainer>
                                <FormText>{hasUploaded ? 'Attachments' : 'Max. file size: 3 MB'}</FormText>
                                <FormText>{hasUploaded ? 'Maximum of 2 Valid ID' : 'Supported format: JPG, PNG or PDF'}</FormText>
                            </FormTextContainer>
                            <CustomDropdown 
                                data={validIDs}
                                width='100%'
                                size={12}
                                customColor={colors.basic.basic200}
                                selectedValue={selectedPrimaryGovernmentID}
                                onValueChange={(value) => setSelectedPrimaryGovernmentID(value)}
                            />
                            { !primaryIDFrontURI ? <DocumentsUploadButton text='Upload proof of ID (Front)' variant='documents' onPress={uploadPrimaryIDFront}/>
                            : <UploadedFileCard fileName={primaryIDFrontURI.file_name} fileSize={primaryIDFrontURI.file_size} type='primary-id-front' screen={'SignUpDocuments'}/>}
                            { !primaryIDBackURI ? <DocumentsUploadButton text='Upload proof of ID (Back)' variant='documents' onPress={uploadPrimaryIDBack}/>
                            : <UploadedFileCard fileName={primaryIDBackURI.file_name} fileSize={primaryIDBackURI.file_size} type='primary-id-back' screen={'SignUpDocuments'}/>}
                            <FormTextContainer>
                                <FormBoldText>Verification</FormBoldText>
                                <FormText>Take a selfie with your submitted IDs</FormText>
                            </FormTextContainer>
                            { !primaryIDSelfieURI ? <DocumentsUploadButton text='Take a selfie with ID' variant='selfie' onPress={handlePrimarySelfieCameraModalOpen}/>
                            : <UploadedFileCard fileName={primaryIDSelfieURI.file_name} fileSize={primaryIDSelfieURI.file_size} type='primary-id-selfie' screen={'SignUpDocuments'}/>}
                            <ActionSheet containerStyle={{ padding: 32, borderTopLeftRadius: 16, borderBottomRightRadius: 16 }} overlayColor='#662F0E'
                                ref={primaryIDsMenuRef}>
                                <ActionSheetMenuButton text='Choose from library' variant='library' onPress={handlePrimaryIDsLibraryModalOpen}/>
                                <ActionSheetMenuButton text='Take photo' variant='camera' onPress={handlePrimaryIDsCameraModalOpen}/>
                                <ActionSheetMenuButton text='Cancel' variant='cancel' onPress={() => primaryIDsMenuRef.current?.hide()}/>
                            </ActionSheet>
                            <UploadFromLibraryModal visible={isPrimaryIDsLibraryModalVisible} onCancel={handlePrimaryIDsLibraryModalClose} command={command} screen={'SignUpDocuments'}/>
                            <UploadFromCameraModal visible={isPrimaryIDsCameraModalVisible} onCancel={handlePrimaryIDsCameraModalClose} command={command} screen={'SignUpDocuments'}/>
                            <UploadSelfieByCameraModal visible={isPrimarySelfieCameraModalVisible} onCancel={handlePrimarySelfieCameraModalClose} command={command} screen={'SignUpDocuments'}/>
                        </>
                    ) : (
                        <>
                            <FormTextContainer>
                                <FormText>{hasUploaded ? 'Attachments' : 'Max. file size: 3 MB'}</FormText>
                                <FormText>{hasUploaded ? 'Maximum of 2 Valid ID' : 'Supported format: JPG, PNG or PDF'}</FormText>
                            </FormTextContainer>
                            <CustomDropdown 
                                data={validIDs}
                                width='100%'
                                size={12}
                                customColor={colors.basic.basic200}
                                selectedValue={selectedSecondaryGovernmentID}
                                onValueChange={(value) => setSelectedSecondaryGovernmentID(value)}
                            />
                            { !secondaryIDFrontURI ? <DocumentsUploadButton text='Upload proof of ID (Front)' variant='documents' onPress={uploadSecondaryIDFront}/>
                            : <UploadedFileCard fileName={secondaryIDFrontURI.file_name} fileSize={secondaryIDFrontURI.file_size} type='secondary-id-front' screen={'SignUpDocuments'}/>}
                            { !secondaryIDBackURI ? <DocumentsUploadButton text='Upload proof of ID (Back)' variant='documents' onPress={uploadSecondaryIDBack}/>
                            : <UploadedFileCard fileName={secondaryIDBackURI.file_name} fileSize={secondaryIDBackURI.file_size} type='secondary-id-back' screen={'SignUpDocuments'}/>}
                            <FormTextContainer>
                                <FormBoldText>Verification</FormBoldText>
                                <FormText>Take a selfie with your submitted IDs</FormText>
                            </FormTextContainer>
                            { !secondaryIDSelfieURI ? <DocumentsUploadButton text='Take a selfie with ID' variant='selfie' onPress={handleSecondarySelfieCameraModalOpen}/>
                            : <UploadedFileCard fileName={secondaryIDSelfieURI.file_name} fileSize={secondaryIDSelfieURI.file_size} type='secondary-id-selfie' screen={'SignUpDocuments'}/>}
                            <ActionSheet containerStyle={{ padding: 32, borderTopLeftRadius: 16, borderBottomRightRadius: 16 }} overlayColor='#662F0E'
                                ref={secondaryIDsMenuRef}>
                                <ActionSheetMenuButton text='Choose from library' variant='library' onPress={handleSecondaryIDsLibraryModalOpen}/>
                                <ActionSheetMenuButton text='Take photo' variant='camera' onPress={handleSecondaryIDsCameraModalOpen}/>
                                <ActionSheetMenuButton text='Cancel' variant='cancel' onPress={() => secondaryIDsMenuRef.current?.hide()}/>
                            </ActionSheet>
                            <UploadFromLibraryModal visible={isSecondaryIDsLibraryModalVisible} onCancel={handleSecondaryIDsLibraryModalClose} command={command} screen={'SignUpDocuments'}/>
                            <UploadFromCameraModal visible={isSecondaryIDsCameraModalVisible} onCancel={handleSecondaryIDsCameraModalClose} command={command} screen={'SignUpDocuments'}/>
                            <UploadSelfieByCameraModal visible={isSecondarySelfieCameraModalVisible} onCancel={handleSecondarySelfieCameraModalClose} command={command} screen={'SignUpDocuments'}/>
                        </>
                    )
                }
                <NavigationButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='20'
                        onPress={handleSubmit}/>
                </NavigationButtonContainer>
                <NavigationButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Skip' textSize='20'
                        onPress={handleSkip}/>
                </NavigationButtonContainer>
            </FormContainer>
            <CustomLoader visible={isLoading}/>
            <CustomAlert
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </SignUpDocumentsMainContainer>
    )
}

export default SignUpDocumentsMainScreen