import React, { useCallback, useEffect, useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';

import { ButtonContainer, FingerBiometricsContainer, FormContainer, HolderContainer } from './styles'
import ScreenHeader from '../../../shared/ScreenHeader/ScreenHeader'
import ButtonText from '../../../shared/ButtonText/ButtonText'
import { Alert, Linking } from 'react-native';
import ReminderStatus from '../../../shared/ReminderStatus/ReminderStatus';
import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader';

const FingerprintBiometricsScreen = () => {
  //states
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  //check if device supports biometrics
  useEffect(() => {
    (async() => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible)
    })
  })

  //returns to password auth if got error in biometrics
  const fallBackToAuth = () => {
    console.log('fall back to password auth')
  }

  //custom alert components
  const alertComponent = (title, message, buttonText, buttonFunction) => {
    return Alert.alert(title, message, [
      {
        text: buttonText,
        onPress: buttonFunction,
      }
    ])
  }
  const twoButtonAlert = () => {
    Alert.alert('Welcome', 'Continue to app', [
      {
        text: 'Back', onPress: () => console.log('Cancel'), style: 'cancel'
      },
      {
        text: 'Ok', onPress: () => console.log('Ok'),
      }
    ])
  }

  //handle biometric auth operations
  const handleBiometricAuth = async() => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if(!isBiometricAvailable){
      return alertComponent('Error', 'Biometrics hardware not found.', 'Ok', () => fallBackToAuth())
    }

    let supportedBiometrics;
    if(isBiometricAvailable){
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync()

      const savedBiometrics = await LocalAuthentication.isEnrolledAsync()
      if(!savedBiometrics){
        return alertComponent('Error', 'Biometric record not found.', 'Ok', () => fallBackToAuth())
      }

      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticated with biometrics',
        cancelLabel: 'cancel',
        disableDeviceFallback: true,
      })

      if(biometricAuth){
        twoButtonAlert()
      }
      console.log('Is biometric available:',isBiometricAvailable)
      console.log('Device supported biometrics:',supportedBiometrics)
      console.log('Device saved biometrics:',savedBiometrics)
      console.log('Is biometric authenticated:',biometricAuth)
    }
  }

  //deeplinking to navigate to security settings if biometrics are available and disabled
  const handlePress = async () => {
    try {
      await Linking.sendIntent("android.settings.SECURITY_SETTINGS");
    } catch (e) {
      Alert.alert(e.message);
    }
  }

  return (
    <FingerBiometricsContainer>
      <HolderContainer />
      <ScreenHeader title='Fingerprint Biometrics'/>
      {
        isBiometricSupported ? (
          <ReminderStatus reminderNote='Your device is compatible with biometrics'/>
        ) : (
          <>
            <ReminderStatus reminderNote='Face and fingerprint scanner is available in this device'/>
            <ButtonContainer>
              <ButtonText width='300px' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Open Security Settings' textSize='18'
                onPress={handlePress}
              />
            </ButtonContainer>
          </>
        )
      }
      <FormContainer>
        <ButtonContainer>
          {
            isBiometricSupported && 
            <ButtonText width='300px' buttonColor='#FF873A' textColor='#FFFFFF' type='filled' text='Login with Biometrics' textSize='18'
              onPress={handleBiometricAuth}
            />
          }
        </ButtonContainer>
      </FormContainer>
    </FingerBiometricsContainer>
  )
}

export default FingerprintBiometricsScreen