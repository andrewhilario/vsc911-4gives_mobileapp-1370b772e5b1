import React, { useState } from 'react'
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton, BackContainer, FormContainer, NotificationSettingsContainer, NotificationSettingsTitleContainer, NotificationSettingsTitleText, NotificationsOptionContainer, NotificationsOptionText, NotificationsOptionTextContainer, NotificationsOptionToggleContainer } from './styles'

import { colors } from '../../../../constants/Colors';

const NotificationsSettingsScreen = ({navigation}) => {
    const [isDiscountDealsEnabled, setIsDiscountDealsEnabled] = useState(false);
    const toggleDiscountDealsSwitch = () => setIsDiscountDealsEnabled(previousState => !previousState);

    const [isApplicationUpdatesEnabled, setIsApplicationUpdatesEnabled] = useState(false);
    const toggleApplicationUpdatesSwitch = () => setIsApplicationUpdatesEnabled(previousState => !previousState);

    return (
        <NotificationSettingsContainer>
            <NotificationSettingsTitleContainer>
                <BackContainer>
                    <BackButton onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color={colors.primary.primary500} />
                    </BackButton>
                </BackContainer>
                <NotificationSettingsTitleText>Notifications</NotificationSettingsTitleText>
                <BackContainer>
                    <BackButton>
                        <Feather name="arrow-left" size={24} color={colors.secondary.secondary300} />
                    </BackButton>
                </BackContainer>
            </NotificationSettingsTitleContainer>
            <FormContainer>
                <NotificationsOptionContainer>
                    <NotificationsOptionTextContainer>
                        <NotificationsOptionText>Discount & Deals</NotificationsOptionText>
                    </NotificationsOptionTextContainer>
                    <NotificationsOptionToggleContainer>
                        <Switch 
                            trackColor={{false: colors.basic.basic200, true: colors.primary.primary500}}
                            thumbColor={colors.basic.white50}
                            onValueChange={toggleDiscountDealsSwitch}
                            value={isDiscountDealsEnabled}
                        />
                    </NotificationsOptionToggleContainer>
                </NotificationsOptionContainer>
                <NotificationsOptionContainer>
                    <NotificationsOptionTextContainer>
                        <NotificationsOptionText>Application Updates</NotificationsOptionText>
                    </NotificationsOptionTextContainer>
                    <NotificationsOptionToggleContainer>
                        <Switch 
                            trackColor={{false: colors.basic.basic200, true: colors.primary.primary500}}
                            thumbColor={colors.basic.white50}
                            onValueChange={toggleApplicationUpdatesSwitch}
                            value={isApplicationUpdatesEnabled}
                        />
                    </NotificationsOptionToggleContainer>
                </NotificationsOptionContainer>
            </FormContainer>
        </NotificationSettingsContainer>
    )
}

export default NotificationsSettingsScreen