import { useCallback } from 'react';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { colors } from './constants/Colors';
import MainApp from './components/MainApp';

import FingerprintBiometricsScreen from './components/screens/test/FingerprintBiometricsScreen/FingerprintBiometricsScreen';
import PaymentOTPScreen from './components/screens/buyerMain/PaymentOTPScreen/PaymentOTPScreen';
import SignUpConfirmationScreen from './components/screens/auth/SignUpConfirmationScreen/SignUpConfirmationScreen';
import SignUpStatusScreen from './components/screens/auth/SignUpStatusScreen/SignUpStatusScreen';
import TransactionDetailsScreen from './components/screens/buyerMain/TransactionDetailsScreen/TransactionDetailsScreen';
import SetupProfileScreen from './components/screens/auth/SetupProfileScreen/SetupProfileScreen';
import SettingsMenuScreen from './components/screens/settings/SettingsMenuScreen/SettingsMenuScreen';
import ChangePasswordScreen from './components/screens/settings/ChangePasswordScreen/ChangePasswordScreen';
import UpdateMobileNumberScreen from './components/screens/settings/UpdateMobileNumberScreen/UpdateMobileNumberScreen';
import UpdateEmailScreen from './components/screens/settings/UpdateEmailScreen/UpdateEmailScreen';
import BasicInformationScreen from './components/screens/settings/BasicInformationScreen/BasicInformationScreen';
import AddressScreen from './components/screens/settings/AddressScreen/AddressScreen';
import AccountSecurityScreen from './components/screens/settings/AccountSecurityScreen/AccountSecurityScreen';
import AccountDetailsMenuScreen from './components/screens/settings/AccountDetailsMenuScreen/AccountDetailsMenuScreen';
import NotificationsSettingsScreen from './components/screens/settings/NotificationsSettingsScreen/NotificationsSettingsScreen';
import DocumentsMainScreen from './components/screens/settings/DocumentsMainScreen/DocumentsMainScreen';
import DocumentsCameraScreen from './components/screens/settings/DocumentsCameraScreen/DocumentsCameraScreen';
import DocumentsStatusScreen from './components/screens/settings/DocumentsStatusScreen/DocumentsStatusScreen';
import UpdateEmailVerificationScreen from './components/screens/settings/UpdateEmailVerificationScreen/UpdateEmailVerificationScreen';
import UpdateMobileVerificationScreen from './components/screens/settings/UpdateMobileVerificationScreen/UpdateMobileVerificationScreen';
import SignUpDocumentsMainScreen from './components/screens/auth/SignUpDocumentsMainScreen/SignUpDocumentsMainScreen';
import SignUpDocumentsCameraScreen from './components/screens/auth/SignUpDocumentsCameraScreen/SignUpDocumentsCameraScreen';
import SignUpDocumentsStatusScreen from './components/screens/auth/SignUpDocumentsStatusScreen/SignUpDocumentsStatusScreen';
import SignUpBiometricSetupScreen from './components/screens/auth/SignUpBiometricSetupScreen/SignUpBiometricSetupScreen';
import SignUpVerificationStatusScreen from './components/screens/auth/SignUpVerificationStatusScreen/SignUpVerificationStatusScreen';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  
  if (!fontsLoaded && !fontError) {
    console.log('Fonts failed to Load')
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor={colors.primary.primary500}/>
      <MainApp />
      {/* <SignUpDocumentsMainScreen /> */}
      {/* <DocumentsMainScreen /> */}
    </>
  );
}
