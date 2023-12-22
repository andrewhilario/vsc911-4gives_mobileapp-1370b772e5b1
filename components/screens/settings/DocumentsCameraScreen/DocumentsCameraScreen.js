import React, { useRef, useState } from 'react'
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

import { BackButton, BackContainer, ButtonContainer, CameraContainer, DocumentsCameraContainer, DocumentsCameraTitleContainer, DocumentsCameraTitleText, FormContainer, FormText, FormTextContainer, ImageContainer } from './styles'

import { colors } from '../../../../constants/Colors'
import ButtonText from '../../../shared/ButtonText/ButtonText';
import UserStore from '../../../../stores/UserStore';

const DocumentsCameraScreen = ({route, navigation}) => {
    const cameraRef = useRef(null);
    const type = CameraType.front;
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);
    
    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 1, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.uri;
            setCapturedImage(source);
            
            const compressedSource = await manipulateAsync(
                source, [],
                { compress: 0.5, format: SaveFormat.JPEG }
            );
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
            imageFile = { uri: compressedSource.uri, file_name: fileName, file_size: fileSize }
            setCapturedImage(imageFile);
            console.log('captured image:',imageFile)
        }
    };

    const { idType } = route.params
    const setPrimaryIDSelfieURI = UserStore((state) => state.setPrimaryIDSelfieURI)
    const setSecondaryIDSelfieURI = UserStore((state) => state.setSecondaryIDSelfieURI)
    const handleSubmitImage = () => {
        if(capturedImage){
            if(idType === 'primary'){
                setPrimaryIDSelfieURI(capturedImage)
                navigation.navigate('DocumentsMain', {
                    key: Math.random().toString()
                })
            }else{
                setSecondaryIDSelfieURI(capturedImage)
                navigation.navigate('DocumentsMain', {
                    key: Math.random().toString()
                })
            }
        }
        setCapturedImage(null)
    };
    
    return (
        <DocumentsCameraContainer>
            <DocumentsCameraTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <DocumentsCameraTitleText>Documents</DocumentsCameraTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </DocumentsCameraTitleContainer>
            <FormContainer>
                <FormTextContainer>
                    <FormText size={18} color={colors.basic.basic900}>Get ready to take a selfie</FormText>
                    <FormText size={12} color={colors.basic.basic500}>Frame your face in the oval, {'\n'}press “I am ready” and move closer</FormText>
                </FormTextContainer>
                {
                    !permission?.granted ? (
                        <>
                            <FormTextContainer>
                                <FormText size={14} color={colors.basic.basic900} margin={15}>We need your permission to show the camera</FormText>
                            </FormTextContainer>
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
                                    <ButtonText width='100%' buttonColor='#FF873A' textColor='#FF873A' type='non-filled' text='Retake photo' textSize='18'
                                        onPress={() => setCapturedImage(null)}
                                    />
                                </ButtonContainer>
                                <ButtonContainer>
                                    <ButtonText width='100%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Submit' textSize='18'
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
                                    <ButtonText width='100%' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='I am ready' textSize='18'
                                        onPress={takePicture}
                                    />
                                </ButtonContainer>
                            </>
                        )
                    )
                }
            </FormContainer>
        </DocumentsCameraContainer>
    )
}

export default DocumentsCameraScreen