import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import { BackgroundColor1, PaymentSourceContainer, ScrollContainer } from './styles'
import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader';
import PaymentSource from '../../../shared/PaymentSource/PaymentSource';

import UserStore from '../../../../stores/UserStore';
import useGetUserPaymentSources from '../../../../hooks/useGetUserPaymentSources';

const PaymentSourceScreen = ({navigation}) => {
    //handling first name display
    const user = UserStore(state => state.user);
    const header = `Hi, ${user.first_name}!`;

    const { paymentSources, loading } = useGetUserPaymentSources();
    // useGetUserPaymentSources();

    return (
        <PaymentSourceContainer>
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
                <PaymentSource paymentSourceData={paymentSources} isLoading={loading}/>
            </ScrollContainer>
        </PaymentSourceContainer>
    )
}

export default PaymentSourceScreen