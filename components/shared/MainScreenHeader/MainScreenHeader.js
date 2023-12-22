import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { HeaderContainer, IconContainer, LeftButton, LogoContainer, RightButton, Logo, RightButtonContainer, LeftButtonContainer, LeftText, LeftTextContainer } from './styles'

import PlaceholderProfilePhoto from '../../../assets/images/stock-profile-photo.jpg'
import UserStore from '../../../stores/UserStore';

const MainScreenHeader = ({ profilePhoto, leftText, leftOnPress, firstRightButtonOnPress, secondRightButtonOnPress, isDisabled=false}) => {
    return (
        <HeaderContainer>
            <LeftButtonContainer>
                <LeftButton onPress={leftOnPress} disabled={isDisabled}>
                    <LogoContainer>
                        <Logo source={PlaceholderProfilePhoto}/>
                    </LogoContainer>
                </LeftButton>
                <LeftTextContainer>
                    <LeftText>{leftText}</LeftText>
                </LeftTextContainer>
            </LeftButtonContainer>
            
            <RightButtonContainer>
                <RightButton onPress={firstRightButtonOnPress} disabled={isDisabled}>
                    <Ionicons name="notifications" size={24} color="white" />
                </RightButton>
                <RightButton onPress={secondRightButtonOnPress} disabled={isDisabled}>
                    <Ionicons name="mail" size={24} color="white" />
                </RightButton>
            </RightButtonContainer>
        </HeaderContainer>
    )
}

export default MainScreenHeader