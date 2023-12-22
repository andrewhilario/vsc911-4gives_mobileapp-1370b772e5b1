import React from 'react'
import { Text } from 'react-native'
import { NumericFormat } from 'react-number-format';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { DashboardMenuButtonContainer, DashboardMenuButtonText, DashboardMenuContainer, DashboardMenuIcon, LeftContainer, LeftSubText, LeftText, RightContainer, RightSubText, RightText, RowContainer } from './styles'

import { colors } from '../../../constants/Colors';

const DashboardMenu = ({availableCreditValue, creditLimitValue, firstButtonOnPress, secondButtonOnPress, 
    thirdButtonOnPress, fourthButtonOnPress , isDisabled=false}) => {
  return (
    <DashboardMenuContainer>
        <RowContainer>
            <LeftContainer>
                <LeftSubText>Available Credit</LeftSubText>
                <LeftText>
                    <NumericFormat
                        value={availableCreditValue ? availableCreditValue : 0}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </LeftText>
            </LeftContainer>
            <RightContainer>
                <RightSubText>Credit Limit</RightSubText>
                <RightText>
                    <NumericFormat
                        value={creditLimitValue ? creditLimitValue : 0}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₱ '}
                        decimalScale={2}
                        renderText={value => <Text>{value}</Text>}
                    />
                </RightText>
            </RightContainer>
        </RowContainer>
        <RowContainer>
            <DashboardMenuButtonContainer onPress={firstButtonOnPress}>
                <DashboardMenuIcon>
                    <MaterialCommunityIcons name="calculator-variant" size={40} color={colors.primary.primary500} />
                </DashboardMenuIcon>
                <DashboardMenuButtonText>Calculator</DashboardMenuButtonText>
            </DashboardMenuButtonContainer>
            <DashboardMenuButtonContainer onPress={secondButtonOnPress} disabled={isDisabled}>
                <DashboardMenuIcon>
                    <MaterialIcons name="payment" size={40} color={isDisabled ? colors.basic.basic400 : colors.primary.primary500} />
                </DashboardMenuIcon>
                <DashboardMenuButtonText>Create Payment</DashboardMenuButtonText>
            </DashboardMenuButtonContainer>
            <DashboardMenuButtonContainer onPress={thirdButtonOnPress} disabled={isDisabled}>
                <DashboardMenuIcon>
                    <FontAwesome5 name="store" size={38} color={isDisabled ? colors.basic.basic400 : colors.primary.primary500} />
                </DashboardMenuIcon>
                <DashboardMenuButtonText>Merchants</DashboardMenuButtonText>
            </DashboardMenuButtonContainer>
            <DashboardMenuButtonContainer>
                <DashboardMenuIcon>
                    <FontAwesome5 name="piggy-bank" size={38} color={colors.primary.primary500} />
                </DashboardMenuIcon>
                <DashboardMenuButtonText>Paluwagan</DashboardMenuButtonText>
            </DashboardMenuButtonContainer>
        </RowContainer>
    </DashboardMenuContainer>
  )
}

export default DashboardMenu