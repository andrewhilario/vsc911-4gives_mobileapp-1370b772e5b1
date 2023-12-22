import React, { useEffect, useRef, useState } from 'react'
import ActionSheet from "react-native-actions-sheet";
import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomBorder, ButtonContainer, ButtonText, ButtonTextContainer, HeaderContainer, IconContainer, LeftButton, LeftContainer, LeftLogoContainer, LeftText, LeftTextContainer, Logo, LogoContainer, ScrollContainer, SettingsMenuContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import ProfilePlaceholder from '../../../../assets/images/stock-profile-photo.jpg'
import SettingsModal from '../../../shared/SettingsModal/SettingsModal';
import UploadFromLibraryModal from '../../../shared/UploadFromLibraryModal/UploadFromLibraryModal';
import UploadFromCameraModal from '../../../shared/UploadFromCameraModal/UploadFromCameraModal';

import UserStore from '../../../../stores/UserStore'

const SettingsMenuScreen = ({ navigation }) => {
    
    //fetching user state
    const user = UserStore(state => state.user);
    const name = user.first_name + ' ' + user.last_name;
    console.log(name)

    //handling change in profile photo
    const profilePhotoMenuRef = useRef(null);

    //handling profile photo library modal
    const [isProfilePhotoLibraryModalVisible, setIsProfilePhotoLibraryModalVisible] = useState(false);
    const handleProfilePhotoLibraryModalOpen = () => {
        setIsProfilePhotoLibraryModalVisible(true);
        profilePhotoMenuRef.current?.hide()
    };
    const handleProfilePhotoLibraryModalClose = () => {
        setIsProfilePhotoLibraryModalVisible(false);
    };
    //handling profile photo camera modal
    const [isProfilePhotoCameraModalVisible, setIsProfilePhotoCameraModalVisible] = useState(false);
    const handleProfilePhotoCameraModalOpen = () => {
        setIsProfilePhotoCameraModalVisible(true);
        profilePhotoMenuRef.current?.hide()
    };
    const handleProfilePhotoCameraModalClose = () => {
        setIsProfilePhotoCameraModalVisible(false);
    };

    //handling logout modal
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
    const handleIsLogoutModalOpen = () => {
        setIsLogoutModalVisible(true);
    };
    const handleIsLogoutModalClose = () => {
        setIsLogoutModalVisible(false);
    };
    //handle logout
    const logoutUser = UserStore(state => state.logoutUser);
    const handleLogout = () => {
        logoutUser();
    }

    //handle resets
    const isUpdatedBasicInformationUpdated = UserStore(state => state.isUpdatedBasicInformationUpdated)
    const setUpdatedBasicInformationUpdatedFalse = UserStore((state) => state.setUpdatedBasicInformationUpdatedFalse)
    const isUpdateNumberVerified = UserStore(state => state.isUpdateNumberVerified)
    const setUpdateNumberVerifiedFalse = UserStore((state) => state.setUpdateNumberVerifiedFalse)
    useEffect(() => {
        console.log('isUpdatedBasicInformationUpdated status:', isUpdatedBasicInformationUpdated)
        console.log('isUpdateNumberVerified status:', isUpdateNumberVerified)
        if (isUpdatedBasicInformationUpdated === true) {
            setUpdatedBasicInformationUpdatedFalse();
        }

        if(isUpdateNumberVerified === true){
            setUpdateNumberVerifiedFalse();
        }
    }, [isUpdatedBasicInformationUpdated, isUpdateNumberVerified]);

    return (
        <SettingsMenuContainer>
            <HeaderContainer>
                <LeftContainer>
                    <LeftLogoContainer onPress={() => profilePhotoMenuRef.current?.show()}>
                        <LogoContainer>
                            <Logo source={ProfilePlaceholder}/>
                        </LogoContainer>
                    </LeftLogoContainer>
                    <LeftTextContainer>
                        <LeftText>{name}</LeftText>
                    </LeftTextContainer>
                </LeftContainer>
            </HeaderContainer>
            <ScrollContainer>
                <ButtonContainer onPress={() => navigation.navigate('AccountDetailsMenu')}>
                    <IconContainer>
                        <FontAwesome name="user" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Account Details</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => navigation.navigate('ChangePassword')}>
                    <IconContainer>
                        <FontAwesome name="lock" size={26} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Account Password</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => navigation.navigate('AccountSecurity')}>
                    <IconContainer>
                        <FontAwesome5 name="shield-alt" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Account Security</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => navigation.navigate('DocumentsMain')}>
                    <IconContainer>
                        <Ionicons name="md-folder" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Documents</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => navigation.navigate('NotificationsSettings')}>
                    <IconContainer>
                        <Ionicons name="notifications" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Notifications</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <BottomBorder />
                <ButtonContainer >
                    <IconContainer>
                        <MaterialCommunityIcons name="shield-alert" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.primary.primary500}>Terms and Conditions</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer >
                    <IconContainer>
                        <MaterialIcons name="policy" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.primary.primary500}>Privacy Policy</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <BottomBorder />
                <ButtonContainer onPress={handleIsLogoutModalOpen}>
                    <IconContainer>
                        <MaterialCommunityIcons name="logout" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Log Out</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
            </ScrollContainer>
            <ActionSheet containerStyle={{ padding: 32, borderTopLeftRadius: 16, borderBottomRightRadius: 16 }} overlayColor='#662F0E'
                ref={profilePhotoMenuRef}>
                <ButtonContainer onPress={handleProfilePhotoLibraryModalOpen}>
                    <IconContainer>
                        <MaterialIcons name="photo" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Choose from library</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={handleProfilePhotoCameraModalOpen}>
                    <IconContainer>
                        <MaterialIcons name="photo-camera" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Take photo</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => navigation.navigate('AccountDetailsMenu')}>
                    <IconContainer>
                        <FontAwesome name="trash" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Remove current picture</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
                <ButtonContainer onPress={() => profilePhotoMenuRef.current?.hide()}>
                    <IconContainer>
                        <Feather name="x" size={24} color={colors.primary.primary500} />
                    </IconContainer>
                    <ButtonTextContainer>
                        <ButtonText color={colors.basic.basic900}>Cancel</ButtonText>
                    </ButtonTextContainer>
                </ButtonContainer>
            </ActionSheet>
            <UploadFromLibraryModal visible={isProfilePhotoLibraryModalVisible} onCancel={handleProfilePhotoLibraryModalClose}/>
            <UploadFromCameraModal visible={isProfilePhotoCameraModalVisible} onCancel={handleProfilePhotoCameraModalClose} imageType='profile-photo'/>
            <SettingsModal visible={isLogoutModalVisible} title='Log Out' body='Are you sure you want to log out?'
                onCancel={handleIsLogoutModalClose} onPress={handleLogout}
            />
        </SettingsMenuContainer>
    )
}

export default SettingsMenuScreen