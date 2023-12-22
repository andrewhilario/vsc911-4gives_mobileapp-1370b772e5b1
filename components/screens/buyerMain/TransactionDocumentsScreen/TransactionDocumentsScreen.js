import React from 'react'
import { Feather } from '@expo/vector-icons';

import { BackgroundColor1, CloseButton, CloseContainer, ScrollContainer, TransactionDocumentsContainer, TransactionDocumentsTitleContainer, TransactionDocumentsTitleText, TransactionDocumentsViewContainer } from './styles'

import { colors } from '../../../../constants/Colors';
import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader'

import UserStore from '../../../../stores/UserStore';
import TransactionDownloads from '../../../shared/TransactionDownloads/TransactionDownloads';

const TransactionDocumentsScreen = ({navigation}) => {
    //handling first name display
    const user = UserStore(state => state.user);
    const header = `Hi, ${user.first_name}!`;

    return (
        <TransactionDocumentsContainer>
            <BackgroundColor1 />
            <MainScreenHeader leftText={header}
                leftOnPress={() => navigation.navigate('Settings', {
                    screen: 'SettingsMenu',
                })}
                firstRightButtonOnPress={() => navigation.navigate('Settings', 
                {screen: 'UserNotificationMail', params: {type: 'Notifications', key: Math.random().toString()}})}
                secondRightButtonOnPress={() => navigation.navigate('Settings', 
                {screen: 'UserNotificationMail', params: {type: 'Mail', key: Math.random().toString()}})}
            />
            <ScrollContainer>
                <TransactionDocumentsViewContainer>
                    <TransactionDocumentsTitleContainer>
                        <TransactionDocumentsTitleText>Documents</TransactionDocumentsTitleText>
                        <CloseContainer>
                        <   CloseButton onPress={() => navigation.goBack()}>
                                <Feather name="x" size={24} color={colors.primary.primary500} />
                            </CloseButton>
                        </CloseContainer>
                    </TransactionDocumentsTitleContainer>
                    <TransactionDownloads />
                </TransactionDocumentsViewContainer>
            </ScrollContainer>
        </TransactionDocumentsContainer>
    )
}

export default TransactionDocumentsScreen