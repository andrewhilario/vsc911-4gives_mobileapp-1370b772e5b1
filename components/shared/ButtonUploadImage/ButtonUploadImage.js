import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

import { ButtonText, ButtonUploadImageContainer, HolderContainer, ImageContainer, ProfileImage, ProfilePhotoContainer, StyledImage, Title, UploadButton } from './styles';

import { colors } from '../../../constants/Colors';

import AlertStore from '../../../stores/AlertStore';

const ButtonUploadImage = ({ type, title, onImageUpload, targetImage, isBold = false }) => {
    //zustand state management stores
    const showAlert = AlertStore((state) => state.showAlert);

    //component state
    const [image, setImage] = useState(null);

    //function to get file information, accepts uri and returns file information
    const getFileInfo = async (fileURI) => {
        const fileInfo = await FileSystem.getInfoAsync(fileURI)
        return fileInfo
    }

    //function that check if the image is less than the set file size
    const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
        const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB
        return isOk
    }
    
    //function that let the user pick an image
    const pickImage = async () => {
        //executes expo-image-picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            //calls the function getFileInfo to get the file information
            const fileInfo = await getFileInfo(result.assets[0].uri)
            //checks the file information's size
            if (!fileInfo?.size) {
                showAlert('Error',"Can't select this file as the size is unknown.")
            }
            //calls the function isLessThanTheMB to check file size
            const isFileSize = isLessThanTheMB(fileInfo.size, 3)
            if (isFileSize) {
                setImage(result.assets[0].uri);
                onImageUpload(result.assets[0].uri);
            }else{
                showAlert('Error',"Image size must be smaller than 15MB!")
            }
        }
    };

    return (
        <ButtonUploadImageContainer>
            { title && <Title isBold={isBold}>{title}</Title> }
            <HolderContainer>
            {
                type === "profile-photo" ? (
                    targetImage || image ? (
                        image ? (
                            <ProfilePhotoContainer onPress={pickImage}>
                                <ProfileImage source={{ uri: image }}/>
                            </ProfilePhotoContainer>
                        ) : (
                            <ProfilePhotoContainer onPress={pickImage}>
                                <ProfileImage source={targetImage}/>
                            </ProfilePhotoContainer>
                        )
                    ) : (
                        <ProfilePhotoContainer onPress={pickImage}>
                            <Ionicons name="add-circle" size={24} color={colors.basic.white50} />
                        </ProfilePhotoContainer>
                    )
                ) : (
                    <>
                        { targetImage || image && (
                            image ? (
                                <ImageContainer>
                                    <StyledImage source={{ uri: image }}/>
                                </ImageContainer>
                            ) : (
                                <ImageContainer>
                                    <StyledImage source={{ uri: targetImage }}/>
                                </ImageContainer>
                            )
                        )}
                        <UploadButton onPress={pickImage}>
                            { image ? <ButtonText>Change Image</ButtonText>
                                : <ButtonText>Upload Image</ButtonText>
                            }
                        </UploadButton>
                    </>
                    
                )
            }
            </HolderContainer>
        </ButtonUploadImageContainer>
    )
}

export default ButtonUploadImage