import React, { useEffect, useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import * as FileSystem from 'expo-file-system';

import { BodyText, ButtonRowContainer, FooterContainer, Overlay, UploadFromLibraryModalBodyContainer, UploadFromLibraryModalContainer, UploadFromLibraryModalTitleContainer, UploadFromLibraryModalTitleText } from './styles'

import { colors } from '../../../constants/Colors'
import ButtonUploadImage from '../ButtonUploadImage/ButtonUploadImage'
import ButtonText from '../ButtonText/ButtonText'
import BuyerAuthStore from '../../../stores/BuyerAuthStore'
import UserStore from '../../../stores/UserStore';

const UploadFromLibraryModal = ({visible, onCancel, command, screen}) => {
    //handling image upload from library
    const [image, setImage] = useState(null);
    const handleImageUpload = async(imageUrl) => {
        let imageFile = null;
        //make base64
        const base64String = await FileSystem.readAsStringAsync(imageUrl, {
            encoding: FileSystem.EncodingType.Base64,
        });
        const base64Uri = `data:image/png;base64,${base64String}`;

        const response = await FileSystem.getInfoAsync(imageUrl);
        const fileName = response?.uri?.split('/').pop()
        const fileSizeKB = response?.size / 1024; // Convert to kilobytes
            let fileSize;
            if (fileSizeKB < 1024) {
            fileSize = `${fileSizeKB.toFixed(2)} KB`;
            } else {
            const fileSizeMB = fileSizeKB / 1024; // Convert to megabytes
            fileSize = `${fileSizeMB.toFixed(2)} MB`;
        }
        imageFile = { uri: imageUrl, file_name: fileName, file_size: fileSize, base64: base64Uri }
        setImage(imageFile)
        console.log('uploaded image:', imageFile);
    };

    // initialize states
    const setPrimaryIDFrontURI = BuyerAuthStore((state) => state.setPrimaryIDFrontURI)
    const setPrimaryIDBackURI = BuyerAuthStore((state) => state.setPrimaryIDBackURI)
    const setSecondaryFrontURI = BuyerAuthStore((state) => state.setSecondaryFrontURI)
    const setSecondaryIDBackURI = BuyerAuthStore((state) => state.setSecondaryIDBackURI)

    const setPrimaryIDFrontURI_user = UserStore((state) => state.setPrimaryIDFrontURI)
    const setPrimaryIDBackURI_user  = UserStore((state) => state.setPrimaryIDBackURI)
    const setSecondaryFrontURI_user  = UserStore((state) => state.setSecondaryFrontURI)
    const setSecondaryIDBackURI_user  = UserStore((state) => state.setSecondaryIDBackURI)

    // submit image
    const handleSubmitImage = () => {
        if(screen === 'SignUpDocuments'){
            switch (command) {
                case 'primary-id-front':
                    setPrimaryIDFrontURI(image)
                    break;
                case 'primary-id-back':
                    setPrimaryIDBackURI(image)
                    break;
                case 'secondary-id-front':
                    setSecondaryFrontURI(image)
                    break;
                case 'secondary-id-back':
                    setSecondaryIDBackURI(image)
                    break;
                default:
                    break;
            }
        } else{
            switch (command) {
                case 'primary-id-front':
                    setPrimaryIDFrontURI_user(image)
                    break;
                case 'primary-id-back':
                    setPrimaryIDBackURI_user(image)
                    break;
                case 'secondary-id-front':
                    setSecondaryFrontURI_user(image)
                    break;
                case 'secondary-id-back':
                    setSecondaryIDBackURI_user(image)
                    break;
                default:
                    break;
            }
        }
        onCancel();
        setImage(null)
    };


    return (
        <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onCancel}>
            <Overlay>
                <UploadFromLibraryModalContainer>
                    <UploadFromLibraryModalTitleContainer>
                        <UploadFromLibraryModalTitleText>Choose photo from library</UploadFromLibraryModalTitleText>
                    </UploadFromLibraryModalTitleContainer>
                    <UploadFromLibraryModalBodyContainer>
                        <ButtonUploadImage onImageUpload={handleImageUpload}/>
                        {
                            image &&
                            <ButtonRowContainer>
                                <ButtonText width='80%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='18' 
                                    onPress={handleSubmitImage}/>
                            </ButtonRowContainer>
                        }
                        <FooterContainer>
                            <TouchableOpacity onPress={onCancel}>
                                <BodyText size={16} color={colors.primary.primary500}>Cancel</BodyText>
                            </TouchableOpacity>
                        </FooterContainer>
                    </UploadFromLibraryModalBodyContainer>
                </UploadFromLibraryModalContainer>
            </Overlay>
        </Modal>
    )
}

export default UploadFromLibraryModal