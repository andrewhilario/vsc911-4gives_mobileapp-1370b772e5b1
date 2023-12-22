import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';

import { HeaderContainer, IconContainer, Logo, LogoContainer, RightButton, RightButtonContainer, RightButtonText, RightIcon } from './styles';

import AppLogo from '../../../assets/logos/fourgiveswhite.png';

const ScreenHeader = ({ variant, onRightPress }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo source={AppLogo} />
            </LogoContainer>
            <RightButtonContainer>
                <RightButton onPress={onRightPress}>
                    { 
                        variant === 'back' ? (
                            <>
                                <RightIcon>
                                    <AntDesign name="arrowleft" size={20} color="white" />
                                </RightIcon>
                                <RightButtonText>Back</RightButtonText>
                            </>
                        ) : (
                            <>
                                <RightIcon>
                                    <Feather name="x" size={20} color="white" />
                                </RightIcon>
                                <RightButtonText>Cancel</RightButtonText>
                            </>
                        )
                    }
                </RightButton>
            </RightButtonContainer>
        </HeaderContainer>
    )
}

export default ScreenHeader