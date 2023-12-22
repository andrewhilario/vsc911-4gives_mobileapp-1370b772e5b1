import React, { useRef, useState } from 'react'
import { Modal, Image, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

import { BodyText, BodyTextContainer, ButtonRowContainer, DocumentImageContainer, FooterContainer, Overlay, ProfileImageContainer, UploadFromCameraModalBodyContainer, UploadFromCameraModalContainer, UploadFromCameraModalTitleContainer, UploadFromCameraModalTitleText } from './styles'

import { colors } from '../../../constants/Colors';
import ButtonText from '../ButtonText/ButtonText';
import BuyerAuthStore from '../../../stores/BuyerAuthStore';
import UserStore from '../../../stores/UserStore';

const UploadFromCameraModal = ({visible, onCancel, imageType, command, screen}) => {
    const cameraRef = useRef(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    
    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 1, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.uri;

            let imageFile = null;
            const compressedSource = await manipulateAsync(
                source, [],
                { compress: 0.75, format: SaveFormat.JPEG, base64: true}
            );

            //make base64
            const base64String = await FileSystem.readAsStringAsync(compressedSource.uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const base64Uri = `data:image/png;base64,${base64String}`;

            // getting file name and file size
            const response = await FileSystem.getInfoAsync(compressedSource.uri);
            const fileName = response?.uri?.split('/').pop()
            const fileSizeKB = response?.size / 1024; // Convert to kilobytes
              let fileSize;
              if (fileSizeKB < 1024) {
                fileSize = `${fileSizeKB.toFixed(2)} KB`;
              } else {
                const fileSizeMB = fileSizeKB / 1024; // Convert to megabytes
                fileSize = `${fileSizeMB.toFixed(2)} MB`;
            }
            imageFile = { uri: compressedSource.uri, file_name: fileName, file_size: fileSize, base64: base64Uri }
            setCapturedImage(imageFile);
            console.log('captured image:',imageFile)
        }
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
                    setPrimaryIDFrontURI(capturedImage)
                    break;
                case 'primary-id-back':
                    setPrimaryIDBackURI(capturedImage)
                    break;
                case 'secondary-id-front':
                    setSecondaryFrontURI(capturedImage)
                    break;
                case 'secondary-id-back':
                    setSecondaryIDBackURI(capturedImage)
                    break;
                default:
                    break;
            }
        } else{
            switch (command) {
                case 'primary-id-front':
                    setPrimaryIDFrontURI_user(capturedImage)
                    break;
                case 'primary-id-back':
                    setPrimaryIDBackURI_user(capturedImage)
                    break;
                case 'secondary-id-front':
                    setSecondaryFrontURI_user(capturedImage)
                    break;
                case 'secondary-id-back':
                    setSecondaryIDBackURI_user(capturedImage)
                    break;
                default:
                    break;
            }
        }
        onCancel();
        setCapturedImage(null)
    };

    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <Overlay>
                <UploadFromCameraModalContainer>
                    <UploadFromCameraModalTitleContainer>
                        <UploadFromCameraModalTitleText>Capture photo using camera</UploadFromCameraModalTitleText>
                    </UploadFromCameraModalTitleContainer>
                    <UploadFromCameraModalBodyContainer>
                    {
                        !permission?.granted ? (
                            <>
                                <BodyTextContainer>
                                    <BodyText size={14} color={colors.basic.basic900} margin={15}>We need your permission to show the camera</BodyText>
                                    <ButtonText width='80%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Grant Permission' textSize='18'
                                        onPress={requestPermission}/>
                                </BodyTextContainer>
                            </>
                        ) : (
                            imageType === 'profile-photo' ? (
                                capturedImage ? (
                                    <>
                                        <ProfileImageContainer>
                                            <Image source={{uri: capturedImage}} style={{flex: 1}}/>
                                        </ProfileImageContainer>
                                        <ButtonRowContainer>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Retake photo' textSize='18' 
                                                onPress={() => setCapturedImage(null)}/>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='18' 
                                                />
                                        </ButtonRowContainer>
                                    </>
                                ) : (
                                    <>
                                        <ProfileImageContainer>
                                            <Camera type={type} ref={cameraRef} style={{flex: 1}}/>
                                        </ProfileImageContainer>
                                        <ButtonRowContainer>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Switch camera' textSize='18' 
                                                onPress={toggleCameraType}/>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Take photo' textSize='18' 
                                                onPress={takePicture}/>
                                        </ButtonRowContainer>
                                    </>
                                )
                            ) : (
                                capturedImage ? (
                                    <>
                                        <DocumentImageContainer>
                                            <Image source={{uri: capturedImage.uri}} style={{flex: 1}}/>
                                        </DocumentImageContainer>
                                        <ButtonRowContainer>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Retake photo' textSize='18' 
                                                onPress={() => setCapturedImage(null)}/>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='18' 
                                                onPress={handleSubmitImage}/>
                                        </ButtonRowContainer>
                                    </>
                                ) : (
                                    <>
                                        <DocumentImageContainer>
                                            <Camera type={type} ref={cameraRef} style={{flex: 1}}/>
                                        </DocumentImageContainer>
                                        <ButtonRowContainer>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Switch camera' textSize='18' 
                                                onPress={toggleCameraType}/>
                                            <ButtonText width='48%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Take photo' textSize='18' 
                                                onPress={takePicture}/>
                                        </ButtonRowContainer>
                                    </>
                                )
                            )
                        )
                    }
                    <FooterContainer>
                        <TouchableOpacity onPress={onCancel}>
                            <BodyText size={16} color={colors.primary.primary500}>Cancel</BodyText>
                        </TouchableOpacity>
                    </FooterContainer>
                    </UploadFromCameraModalBodyContainer>
                </UploadFromCameraModalContainer>
            </Overlay>
        </Modal>
    )
}

export default UploadFromCameraModal