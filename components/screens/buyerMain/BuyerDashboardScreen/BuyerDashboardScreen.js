import React, { useEffect, useState } from 'react'

import { BackgroundColor1, BuyerDashboardContainer, ScrollContainer } from './styles'

import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader'
import DashboardMenu from '../../../shared/DashboardMenu/DashboardMenu'
import CreditScore from '../../../shared/CreditScore/CreditScore'
import ScheduledTransactions from '../../../shared/ScheduledTransactions/ScheduledTransactions'
import MerchantPromos from '../../../shared/MerchantPromos/MerchantPromos'
import DashboardCreatePaymentModal from '../../../shared/DashboardCreatePaymentModal/DashboardCreatePaymentModal'
import DashboardUnverifiedStatus from '../../../shared/DashboardUnverifiedStatus/DashboardUnverifiedStatus'
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';

import LoaderStore from '../../../../stores/LoaderStore';
import AlertStore from '../../../../stores/AlertStore';
import UserStore from '../../../../stores/UserStore';
import TransactionStore from '../../../../stores/TransactionStore'

import useGetUserScheduledTransactions from '../../../../hooks/useGetUserScheduledTransactions'
import useGetUserCredit from '../../../../hooks/useGetUserCredit'
import useGetUserNotifications from '../../../../hooks/useGetUserNotifications'
import useGetValidIDs from '../../../../hooks/useGetValidIDs'

const BuyerDashboardScreen = ({navigation}) => {
    //handling first name display
    const user = UserStore(state => state.user);
    console.log(user)
    const header = `Hi, ${user.first_name}!`;

    const isLoading = LoaderStore(state => state.isLoading);
    const startLoading = LoaderStore((state) => state.startLoading);
    const stopLoading = LoaderStore((state) => state.stopLoading);

    const isAlertVisible = AlertStore(state => state.isAlertVisible);
    const alertTitle = AlertStore(state => state.alertTitle);
    const alertMessage = AlertStore(state => state.alertMessage);
    const showAlert = AlertStore((state) => state.showAlert);
    const hideAlert = AlertStore((state) => state.hideAlert);

    //handle close alert
    const handleAlertClose = () => {
        stopLoading()
        hideAlert()
    }

    //handling create payment modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleCreatePaymentModalOpen = () => {
        setIsModalVisible(true);
    };
    const handleCreatePaymentModalClose = () => {
        setIsModalVisible(false);
    };

    // Get scheduled transactions using useGetUserScheduledTransactions hook
    const { scheduledTransactions, loadingScheduledTransactions } = useGetUserScheduledTransactions();
    // Get credits using useGetUserCredit hook
    const { creditLimit, creditScore } = useGetUserCredit();
    // Get user notifications using useGetUserNotifications hook
    useGetUserNotifications();
    //Get valid ids
    useGetValidIDs();

    // reset states
    const isTokenInvalid = TransactionStore(state => state.isTokenInvalid)
    const setIsTokenInvalid = TransactionStore((state) => state.setIsTokenInvalid)
    useEffect(() => {
        if (isTokenInvalid === true) {
            setIsTokenInvalid(false)
        }
    }, [isTokenInvalid]);

    return (
        <BuyerDashboardContainer>
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
                { !user.buyAuthorized && <DashboardUnverifiedStatus /> }
                <DashboardMenu 
                    availableCreditValue={user.total_available_spend_limit}
                    creditLimitValue={creditLimit}
                    firstButtonOnPress={() => navigation.navigate('Dashboard', {screen: 'InstallmentCalculator'})}
                    secondButtonOnPress={handleCreatePaymentModalOpen}
                    thirdButtonOnPress={() => navigation.navigate('Dashboard', {screen: 'Merchants'})}
                    isDisabled={!user.buyAuthorized}
                />
                <CreditScore creditScoreValue={creditScore}/>
                <ScheduledTransactions scheduledTransactions={scheduledTransactions} isLoading={loadingScheduledTransactions}/>
                <MerchantPromos />
            </ScrollContainer>
            <DashboardCreatePaymentModal visible={isModalVisible} onCancel={handleCreatePaymentModalClose}/>
            <CustomLoader visible={isLoading}/>
            <CustomAlert 
                visible={isAlertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={handleAlertClose}
            />
        </BuyerDashboardContainer>
    )
}

export default BuyerDashboardScreen