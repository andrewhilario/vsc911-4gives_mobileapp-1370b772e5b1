import React, { useRef, useState } from 'react'
import { Modal, Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

import { ButtonContainer, CameraContainer, ImageContainer, Overlay, UploadSelfieByCameraModalBodyContainer, UploadSelfieByCameraModalContainer, UploadSelfieByCameraModalTitleContainer, UploadSelfieByCameraModalTitleText } from './styles'

import { colors } from '../../../constants/Colors';
import ButtonText from '../ButtonText/ButtonText';
import BuyerAuthStore from '../../../stores/BuyerAuthStore';

const UploadSelfieByCameraModal = ({visible, onCancel, command, screen}) => {
    const cameraRef = useRef(null);
    const type = CameraType.front;
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);
    
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

            // saving info
            imageFile = { uri: compressedSource.uri, file_name: fileName, file_size: fileSize, base64: base64Uri }
            setCapturedImage(imageFile);
            console.log('captured image:',imageFile)
        }
    };

    const setPrimaryIDSelfieURI = BuyerAuthStore(state => state.setPrimaryIDSelfieURI)
    const setSecondaryIDSelfieURI = BuyerAuthStore(state => state.setSecondaryIDSelfieURI)
    // submit image
    const handleSubmitImage = () => {
        if(screen === 'SignUpDocuments'){
            switch (command) {
                case 'primary-id-selfie':
                    setPrimaryIDSelfieURI(capturedImage)
                    break;
                case 'secondary-id-selfie':
                    setSecondaryIDSelfieURI(capturedImage)
                    break;
                default:
                    break;
            }
        } else{
            switch (command) {
                case 'primary-id-selfie':
                    setPrimaryIDFrontURI(capturedImage)
                    break;
                case 'secondary-id-selfie':
                    setSecondaryFrontURI(capturedImage)
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
                <UploadSelfieByCameraModalContainer>
                    <UploadSelfieByCameraModalTitleContainer>
                        <UploadSelfieByCameraModalTitleText size={18} color={colors.basic.basic900}>Get ready to take a selfie</UploadSelfieByCameraModalTitleText>
                        <UploadSelfieByCameraModalTitleText size={12} color={colors.basic.basic500}>Frame your face in the frame, {'\n'}press “I am ready” and move closer</UploadSelfieByCameraModalTitleText>
                    </UploadSelfieByCameraModalTitleContainer>
                    <UploadSelfieByCameraModalBodyContainer>
                    {
                        !permission?.granted ? (
                            <>
                                <UploadSelfieByCameraModalTitleContainer>
                                    <UploadSelfieByCameraModalTitleText size={14} color={colors.basic.basic900} margin={15}>We need your permission to show the camera</UploadSelfieByCameraModalTitleText>
                                </UploadSelfieByCameraModalTitleContainer>
                                <ButtonText width='80%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Grant Permission' textSize='18'
                                    onPress={requestPermission}/>
                            </>
                            
                        ) : (
                            capturedImage ? (
                                <>
                                    <ImageContainer>
                                        <Image source={{uri: capturedImage.uri}} style={{flex: 1}}/>
                                    </ImageContainer>
                                    <ButtonContainer>
                                        <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Retake photo' textSize='18'
                                            onPress={() => setCapturedImage(null)}
                                        />
                                    </ButtonContainer>
                                    <ButtonContainer>
                                        <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='18'
                                            onPress={handleSubmitImage}
                                        />
                                    </ButtonContainer>
                                </>
                            ) : (
                                <>
                                    <CameraContainer>
                                        <Camera type={type} ref={cameraRef} style={{flex: 1}}/>
                                    </CameraContainer>
                                    <ButtonContainer>
                                        <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='filled' text='I am ready' textSize='18'
                                            onPress={takePicture}
                                        />
                                    </ButtonContainer>
                                    <ButtonContainer>
                                        <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Cancel' textSize='18'
                                            onPress={onCancel}/>
                                    </ButtonContainer>
                                </>
                            )
                        )
                    }
                    </UploadSelfieByCameraModalBodyContainer>
                </UploadSelfieByCameraModalContainer>
            </Overlay>
        </Modal>
    )
}

export default UploadSelfieByCameraModal