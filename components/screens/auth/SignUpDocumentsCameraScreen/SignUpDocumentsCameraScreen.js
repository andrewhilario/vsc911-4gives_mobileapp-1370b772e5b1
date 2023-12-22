import React, { useRef, useState } from 'react'
import { Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, ButtonContainer, CameraContainer, FormContainer, FormText, FormTextContainer, ImageContainer, SignUpDocumentsCameraContainer, SignUpDocumentsCameraTitleContainer, SignUpDocumentsCameraTitleText } from './styles';

import { colors } from '../../../../constants/Colors'
import ButtonText from '../../../shared/ButtonText/ButtonText';

const SignUpDocumentsCameraScreen = () => {
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
            console.log(source)
        }
    };
    
    return (
        <SignUpDocumentsCameraContainer>
            <SignUpDocumentsCameraTitleContainer>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <SignUpDocumentsCameraTitleText>Documents</SignUpDocumentsCameraTitleText>
                <BackContainer>
                    <BackButton disabled={true}>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </SignUpDocumentsCameraTitleContainer>
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
                                    <Image source={{uri: capturedImage}} style={{flex: 1}}/>
                                </ImageContainer>
                                <ButtonContainer>
                                    <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Retake photo' textSize='18'
                                        onPress={() => setCapturedImage(null)}
                                    />
                                </ButtonContainer>
                                <ButtonContainer>
                                    <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Submit' textSize='18'
                                        onPress={() => navigation.navigate('DocumentsStatus')}
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
                                    <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.primary.primary500} type='non-filled' text='Skip' textSize='18'
                                    />
                                </ButtonContainer>
                            </>
                        )
                    )
                }
            </FormContainer>
        </SignUpDocumentsCameraContainer>
    )
}

export default SignUpDocumentsCameraScreen