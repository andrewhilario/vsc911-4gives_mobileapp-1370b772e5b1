import React from 'react'

import { HeaderContainer, HeaderText, ImageContainer, StyledImage, UnverifiedStatusContainer } from './styles'

import { colors } from '../../../constants/Colors'
import UnverifiedImage from '../../../assets/images/main/UnverifiedImage.png'

const UnverifiedStatus = () => {
    return (
        <UnverifiedStatusContainer>
            <ImageContainer>
                <StyledImage source={UnverifiedImage}/>
            </ImageContainer>
            <HeaderContainer>
                <HeaderText color={colors.basic.basic900}>Complete your profile to get verified and earn credit.</HeaderText>
                <HeaderText color={colors.primary.primary300}>Complete profile now!</HeaderText>
            </HeaderContainer>
        </UnverifiedStatusContainer>
    )
}

export default UnverifiedStatus