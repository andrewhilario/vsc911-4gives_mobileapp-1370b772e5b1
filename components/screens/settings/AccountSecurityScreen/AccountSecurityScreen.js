import React, { useState } from 'react'
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AccountSecurityContainer, AccountSecurityTitleContainer, AccountSecurityTitleText, BackButton, BackContainer, FormContainer, SecurityOptionContainer, SecurityOptionText, SecurityOptionTextContainer, SecurityOptionToggleContainer } from './styles'

import { colors } from '../../../../constants/Colors';

const AccountSecurityScreen = ({navigation}) => {
    const [is4DigitPinEnabled, setIs4DigitPinEnabled] = useState(false);
    const toggle4DigitPinSwitch = () => setIs4DigitPinEnabled(previousState => !previousState);

    const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);
    const toggleFaceIDSwitch = () => setIsFaceIDEnabled(previousState => !previousState);

    const [isBiometricsEnabled, setIsBiometricsEnabled] = useState(false);
    const toggleBiometricsSwitch = () => setIsBiometricsEnabled(previousState => !previousState);
    
    return (
        <AccountSecurityContainer>
            <AccountSecurityTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <AccountSecurityTitleText>Account Security</AccountSecurityTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer> 
            </AccountSecurityTitleContainer>
            <FormContainer>
                <SecurityOptionContainer>
                    <SecurityOptionTextContainer>
                        <SecurityOptionText>4 Digit Pin</SecurityOptionText>
                    </SecurityOptionTextContainer>
                    <SecurityOptionToggleContainer>
                        <Switch 
                            trackColor={{false: colors.basic.basic200, true: colors.primary.primary500}}
                            thumbColor={colors.basic.white50}
                            onValueChange={toggle4DigitPinSwitch}
                            value={is4DigitPinEnabled}
                        />
                    </SecurityOptionToggleContainer>
                </SecurityOptionContainer>
                <SecurityOptionContainer>
                    <SecurityOptionTextContainer>
                        <SecurityOptionText>Face ID</SecurityOptionText>
                    </SecurityOptionTextContainer>
                    <SecurityOptionToggleContainer>
                        <Switch 
                            trackColor={{false: colors.basic.basic200, true: colors.primary.primary500}}
                            thumbColor={colors.basic.white50}
                            onValueChange={toggleFaceIDSwitch}
                            value={isFaceIDEnabled}
                        />
                    </SecurityOptionToggleContainer>
                </SecurityOptionContainer>
                <SecurityOptionContainer>
                    <SecurityOptionTextContainer>
                        <SecurityOptionText>Biometrics</SecurityOptionText>
                    </SecurityOptionTextContainer>
                    <SecurityOptionToggleContainer>
                        <Switch 
                            trackColor={{false: colors.basic.basic200, true: colors.primary.primary500}}
                            thumbColor={colors.basic.white50}
                            onValueChange={toggleBiometricsSwitch}
                            value={isBiometricsEnabled}
                        />
                    </SecurityOptionToggleContainer>
                </SecurityOptionContainer>
            </FormContainer>
        </AccountSecurityContainer>
    )
}

export default AccountSecurityScreen