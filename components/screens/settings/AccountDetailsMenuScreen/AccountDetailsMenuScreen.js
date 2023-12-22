import React from 'react'
import { Feather, Entypo } from '@expo/vector-icons';

import { AccountDetailsMenuContainer, AccountDetailsMenuTitleContainer, AccountDetailsMenuTitleText, BackButton, BackContainer, DetailsOptionButton, DetailsOptionButtonContainer, DetailsOptionContainer, DetailsOptionText, DetailsOptionTextContainer, FormContainer } from './styles'

import { colors } from '../../../../constants/Colors';

const AccountDetailsMenuScreen = ({navigation}) => {
  return (
    <AccountDetailsMenuContainer>
        <AccountDetailsMenuTitleContainer>
            <BackContainer>
                <BackButton onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                </BackButton>
            </BackContainer>
            <AccountDetailsMenuTitleText>Account Details</AccountDetailsMenuTitleText>
            <BackContainer>
                <BackButton>
                    <Feather name="arrow-left" size={24} color={colors.basic.white50} />
                </BackButton>
            </BackContainer>
        </AccountDetailsMenuTitleContainer>
        <FormContainer>
            <DetailsOptionContainer>
                <DetailsOptionTextContainer>
                    <DetailsOptionText>Basic Information</DetailsOptionText>
                </DetailsOptionTextContainer>
                <DetailsOptionButtonContainer>
                    <DetailsOptionButton onPress={() => navigation.navigate('BasicInformation')}>
                        <Entypo name="chevron-right" size={24} color={colors.primary.primary500} />
                    </DetailsOptionButton>
                </DetailsOptionButtonContainer>
            </DetailsOptionContainer>
            <DetailsOptionContainer>
                <DetailsOptionTextContainer>
                    <DetailsOptionText>Email Address</DetailsOptionText>
                </DetailsOptionTextContainer>
                <DetailsOptionButtonContainer>
                    <DetailsOptionButton onPress={() => navigation.navigate('UpdateEmail')}>
                        <Entypo name="chevron-right" size={24} color={colors.primary.primary500} />
                    </DetailsOptionButton>
                </DetailsOptionButtonContainer>
            </DetailsOptionContainer>
            <DetailsOptionContainer>
                <DetailsOptionTextContainer>
                    <DetailsOptionText>Mobile Number</DetailsOptionText>
                </DetailsOptionTextContainer>
                <DetailsOptionButtonContainer>
                    <DetailsOptionButton onPress={() => navigation.navigate('UpdateMobileNumber')}>
                        <Entypo name="chevron-right" size={24} color={colors.primary.primary500} />
                    </DetailsOptionButton>
                </DetailsOptionButtonContainer>
            </DetailsOptionContainer>
            <DetailsOptionContainer>
                <DetailsOptionTextContainer>
                    <DetailsOptionText>Address</DetailsOptionText>
                </DetailsOptionTextContainer>
                <DetailsOptionButtonContainer>
                    <DetailsOptionButton onPress={() => navigation.navigate('Address')}>
                        <Entypo name="chevron-right" size={24} color={colors.primary.primary500} />
                    </DetailsOptionButton>
                </DetailsOptionButtonContainer>
            </DetailsOptionContainer>
        </FormContainer>
    </AccountDetailsMenuContainer>
  )
}

export default AccountDetailsMenuScreen