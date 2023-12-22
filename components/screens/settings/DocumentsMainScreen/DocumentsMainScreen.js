import React, { useEffect, useRef, useState } from 'react'
import ActionSheet from "react-native-actions-sheet";
import { Feather, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

import { BackButton, BackContainer, DocumentsMainContainer, DocumentsMainTitleContainer, DocumentsMainTitleText, FormBoldText, FormContainer, FormText, FormTextContainer, NavigationButtonContainer, SelectorButtonText, SelectorButtonsContainer, SelectorContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import CustomDropdown from '../../../shared/CustomDropdown/CustomDropdown';
import DocumentsUploadButton from '../../../shared/DocumentsUploadButton/DocumentsUploadButton';
import UploadedFileCard from '../../../shared/UploadedFileCard/UploadedFileCard';
import ActionSheetMenuButton from '../../../shared/ActionSheetMenuButton/ActionSheetMenuButton';
import UploadFromLibraryModal from '../../../shared/UploadFromLibraryModal/UploadFromLibraryModal';
import UploadFromCameraModal from '../../../shared/UploadFromCameraModal/UploadFromCameraModal';

import UserStore from '../../../../stores/UserStore';

import useGetValidIDs from '../../../../hooks/useGetValidIDs';
import UploadSelfieByCameraModal from '../../../shared/UploadSelfieByCameraModal/UploadSelfieByCameraModal';
import ButtonText from '../../../shared/ButtonText/ButtonText';

const DocumentsMainScreen = ({navigation}) => {
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

    const [currentPrimaryIDFront, setCurrentPrimaryIDFront] = useState(null)
    const [currentPrimaryIDBack, setCurrentPrimaryIDBack] = useState(null)
    const [currentPrimarySelfie, setCurrentPrimarySelfie] = useState(null)
    const [currentSecondaryIDFront, setCurrentSecondaryIDFront] = useState(null)
    const [currentSecondaryIDBack, setCurrentSecondaryIDBack] = useState(null)
    const [currentSecondarySelfie, setCurrentSecondarySelfie] = useState(null)

    const user = UserStore(state => state.user)
    console.log('user credentials:', user)

    // const { validIDs } = useGetValidIDs();
    const validIDs = UserStore(state => state.validIDs)
    const [selectedPrimaryGovernmentID, setSelectedPrimaryGovernmentID] = useState(null)
    const [selectedSecondaryGovernmentID, setSelectedSecondaryGovernmentID] = useState(null)

    //fetch all states
    useEffect(() => {
        if(validIDs){
            const targetPrimaryGovernmentID = validIDs?.find(item => item.value === user.user_document_upload[0].primary_government_id_type);
            console.log('target', targetPrimaryGovernmentID)
            setSelectedPrimaryGovernmentID(targetPrimaryGovernmentID.value)
            const targetSecondaryGovernmentID = validIDs?.find(item => item.value === user.user_document_upload[0].secondary_government_id_type);
            console.log('target', targetSecondaryGovernmentID)
            setSelectedSecondaryGovernmentID(targetSecondaryGovernmentID.value)
        }

        setCurrentPrimaryIDFront(user.user_document_upload[0].primary_government_id_front)
        setCurrentPrimaryIDBack(user.user_document_upload[0].primary_government_id_back)
        setCurrentPrimarySelfie(user.user_document_upload[0].selfie_primary_id)
        setCurrentSecondaryIDFront(user.user_document_upload[0].secondary_government_id_front)
        setCurrentPrimaryIDBack(user.user_document_upload[0].secondary_government_id_back)
        setCurrentSecondarySelfie(user.user_document_upload[0].selfie_secondary_id)
    }, [user]);

    //Initialize documents states
    const primaryIDSelfieURI = UserStore(state => state.primaryIDSelfieURI)
    const primaryIDFrontURI = UserStore(state => state.primaryIDFrontURI)
    const primaryIDBackURI = UserStore(state => state.primaryIDBackURI)
    const secondaryIDSelfieURI = UserStore(state => state.secondaryIDSelfieURI)
    const secondaryIDFrontURI = UserStore(state => state.secondaryIDFrontURI)
    const secondaryIDBackURI = UserStore(state => state.secondaryIDBackURI)

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
    };
    const handlePrimarySelfieCameraModalClose = () => {
        setIsPrimarySelfieCameraModalVisible(false);
    };
    //handling secondary id selfie camera modal
    const [isSecondarySelfieCameraModalVisible, setIsSecondarySelfieCameraModalVisible] = useState(false);
    const handleSecondarySelfieCameraModalOpen = () => {
        setIsSecondarySelfieCameraModalVisible(true);
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

    const clearUpload = UserStore(state => state.clearUpload)
    const handleSubmit = () => {
        if (primaryIDFrontURI === null || primaryIDBackURI === null || primaryIDSelfieURI === null ||
            secondaryIDFrontURI === null || secondaryIDBackURI === null || secondaryIDSelfieURI  === null) {
                stopLoading()
                showAlert("Incomplete input", "Please upload the required documents.")
        } else {
            // uploadDocuments({
            //     primaryIDType: selectedPrimaryGovernmentID,
            //     primaryIDFrontURI: primaryIDFrontURI.base64,
            //     primaryIDBackURI: primaryIDBackURI.base64,
            //     primaryIDSelfieURI: primaryIDSelfieURI.base64,
            //     secondaryIDType: selectedSecondaryGovernmentID,
            //     secondaryIDFrontURI: secondaryIDFrontURI.base64,
            //     secondaryIDBackURI: secondaryIDBackURI.base64,
            //     secondaryIDSelfieURI: secondaryIDSelfieURI.base64,
            //     token: signUpAuthenticationToken
            // })
            clearUpload('all')
        }
    }

    return (
        <DocumentsMainContainer>
            <DocumentsMainTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <DocumentsMainTitleText>Documents</DocumentsMainTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </DocumentsMainTitleContainer>
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
                            { !primaryIDFrontURI && currentPrimaryIDFront === null ? (<DocumentsUploadButton text='Upload proof of ID (Front)' variant='documents' onPress={uploadPrimaryIDFront}/>)
                            : (<UploadedFileCard fileName={currentPrimaryIDFront ? currentPrimaryIDFront : primaryIDFrontURI.file_name} fileSize={currentPrimaryIDFront ? '' : primaryIDFrontURI.file_size} type='primary-id-front' 
                                onPress={() => setCurrentIDFront(null)}/>)}
                            { !primaryIDBackURI && currentPrimaryIDBack === null ? <DocumentsUploadButton text='Upload proof of ID (Back)' variant='documents' onPress={uploadPrimaryIDBack}/>
                            : <UploadedFileCard fileName={currentPrimaryIDBack ? currentPrimaryIDBack : primaryIDBackURI.file_name} fileSize={currentPrimaryIDBack ? '' : primaryIDBackURI.file_size} type='primary-id-back'
                                onPress={() => setCurrentIDBack(null)}/>}
                            <FormTextContainer>
                                <FormBoldText>Verification</FormBoldText>
                                <FormText>Take a selfie with your submitted IDs</FormText>
                            </FormTextContainer>
                            { !primaryIDSelfieURI && currentPrimarySelfie === null ? <DocumentsUploadButton text='Take a selfie with ID' variant='selfie' onPress={handlePrimarySelfieCameraModalOpen}/>
                            : <UploadedFileCard fileName={currentPrimarySelfie ? currentPrimarySelfie : primaryIDSelfieURI.file_name} fileSize={currentPrimarySelfie ? '' : primaryIDSelfieURI.file_size} type='primary-id-selfie'/>}
                            <ActionSheet containerStyle={{ padding: 32, borderTopLeftRadius: 16, borderBottomRightRadius: 16 }} overlayColor='#662F0E'
                                ref={primaryIDsMenuRef}>
                                <ActionSheetMenuButton text='Choose from library' variant='library' onPress={handlePrimaryIDsLibraryModalOpen}/>
                                <ActionSheetMenuButton text='Take photo' variant='camera' onPress={handlePrimaryIDsCameraModalOpen}/>
                                <ActionSheetMenuButton text='Cancel' variant='cancel' onPress={() => primaryIDsMenuRef.current?.hide()}/>
                            </ActionSheet>
                            <UploadFromLibraryModal visible={isPrimaryIDsLibraryModalVisible} onCancel={handlePrimaryIDsLibraryModalClose} command={command}/>
                            <UploadFromCameraModal visible={isPrimaryIDsCameraModalVisible} onCancel={handlePrimaryIDsCameraModalClose} command={command}/>
                            <UploadSelfieByCameraModal visible={isPrimarySelfieCameraModalVisible} onCancel={handlePrimarySelfieCameraModalClose} command={command}/>
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
                            { !secondaryIDFrontURI && currentSecondaryIDFront === null ? <DocumentsUploadButton text='Upload proof of ID (Front)' variant='documents' onPress={uploadSecondaryIDFront}/>
                            : <UploadedFileCard fileName={currentSecondaryIDFront ? currentSecondaryIDFront : secondaryIDFrontURI.file_name} fileSize={currentSecondaryIDFront ? '' : secondaryIDFrontURI.file_size} type='secondary-id-front'/>}
                            { !secondaryIDBackURI && currentSecondaryIDBack === null ? <DocumentsUploadButton text='Upload proof of ID (Back)' variant='documents' onPress={uploadSecondaryIDBack}/>
                            : <UploadedFileCard fileName={currentSecondaryIDBack ? currentSecondaryIDBack : secondaryIDBackURI.file_name} fileSize={currentSecondaryIDBack ? '' : secondaryIDBackURI.file_size} type='secondary-id-back'/>}
                            <FormTextContainer>
                                <FormBoldText>Verification</FormBoldText>
                                <FormText>Take a selfie with your submitted IDs</FormText>
                            </FormTextContainer>
                            { !secondaryIDSelfieURI && currentSecondarySelfie === null ? <DocumentsUploadButton text='Take a selfie with ID' variant='selfie' onPress={() => navigation.navigate('Settings', 
                                {screen: 'DocumentsCamera', params: { idType: 'secondary' }})}/>
                            : <UploadedFileCard fileName={currentSecondarySelfie ? currentSecondarySelfie : secondaryIDSelfieURI.file_name} fileSize={currentSecondarySelfie ? '' : secondaryIDSelfieURI.file_size} type='secondary-id-selfie'/>}
                            <ActionSheet containerStyle={{ padding: 32, borderTopLeftRadius: 16, borderBottomRightRadius: 16 }} overlayColor='#662F0E'
                                ref={secondaryIDsMenuRef}>
                                <ActionSheetMenuButton text='Choose from library' variant='library' onPress={handleSecondaryIDsLibraryModalOpen}/>
                                <ActionSheetMenuButton text='Take photo' variant='camera' onPress={handleSecondaryIDsCameraModalOpen}/>
                                <ActionSheetMenuButton text='Cancel' variant='cancel' onPress={() => secondaryIDsMenuRef.current?.hide()}/>
                            </ActionSheet>
                            <UploadFromLibraryModal visible={isSecondaryIDsLibraryModalVisible} onCancel={handleSecondaryIDsLibraryModalClose} command={command}/>
                            <UploadFromCameraModal visible={isSecondaryIDsCameraModalVisible} onCancel={handleSecondaryIDsCameraModalClose} command={command}/>
                            <UploadSelfieByCameraModal visible={isSecondarySelfieCameraModalVisible} onCancel={handleSecondarySelfieCameraModalClose} command={command}/>
                        </>
                    )
                }
                <NavigationButtonContainer>
                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='20'
                        onPress={handleSubmit}/>
                </NavigationButtonContainer>
            </FormContainer>
        </DocumentsMainContainer>
    )
}

export default DocumentsMainScreen