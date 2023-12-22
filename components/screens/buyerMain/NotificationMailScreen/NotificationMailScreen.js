import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import EventSource from "react-native-sse";

import { BottomBorder, CloseButton, CloseContainer, HeaderContainer, HolderContainer, NotificationMailContainer, NotificationsTitleContainer, NotificationsTitleText, ScrollContainer, SelectorButtonText, SelectorButtonsContainer, SelectorContainer } from './styles'

import { SampleMail, SampleNotifications } from '../../../../constants/SampleData';
import { colors } from '../../../../constants/Colors';
import NotificationMailPreview from '../../../shared/NotificationMailPreview/NotificationMailPreview';

import UserStore from '../../../../stores/UserStore';

import useGetUserNotifications from '../../../../hooks/useGetUserNotifications';

const NotificationMailScreen = ({route, navigation}) => {
    // params
    const { type } = route.params
    console.log(type)

    // tabs
    const [activeTab, setActiveTab] = useState('All');

    const [notifications, setNotifications] = useState([]);
    const token = UserStore(state => state.userToken)

    useEffect(() => {
        // Fetch notifications from API
        const fetchNotifications = async () => {
        try {
            const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/notifications/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },

            })
            const data = await response.json();
            setNotifications(data.results)
            console.log('Fetched notifications.', data.results)
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
        };
        // Call the fetchNotifications function
        fetchNotifications();
        // You can set up a timer to poll the API regularly or use other mechanisms
        const intervalId = setInterval(fetchNotifications, 60000); // Refresh every 60 seconds
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // SSEs
    const user = UserStore(state => state.user)
    const es = new EventSource(`https://dev.api.4gives.me/events/notifications/${user.id}`);

    es.addEventListener("open", (event) => {
    console.log("Open SSE connection.");
    });
    es.addEventListener("message", (event) => {
    console.log("New message event:", event.data);
    });
    es.addEventListener("error", (event) => {
    if (event.type === "error") {
        console.error("Connection error:", event.message);
    } else if (event.type === "exception") {
        console.error("Error:", event.message, event.error);
    }
    });
    es.addEventListener("close", (event) => {
    console.log("Close SSE connection.");
    });

    return (
        <NotificationMailContainer>
            <HeaderContainer>
                <NotificationsTitleContainer>
                    <NotificationsTitleText>Notifications</NotificationsTitleText>
                    <CloseContainer>
                        <CloseButton onPress={() => navigation.goBack()}>
                            <Feather name="x" size={24} color={colors.primary.primary500} />
                        </CloseButton>
                    </CloseContainer>
                </NotificationsTitleContainer>
                <SelectorContainer>
                    <SelectorButtonsContainer onPress={() => setActiveTab('All')} active={activeTab === 'All'}>
                        <SelectorButtonText active={activeTab === 'All'}>ALL</SelectorButtonText>
                    </SelectorButtonsContainer>
                    <SelectorButtonsContainer onPress={() => setActiveTab('Unread')} active={activeTab === 'Unread'}>
                        <SelectorButtonText active={activeTab === 'Unread'}>UNREAD</SelectorButtonText>
                    </SelectorButtonsContainer>
                </SelectorContainer>
            </HeaderContainer>
            <ScrollContainer>
                {
                    type === 'Notifications' ? (
                        <NotificationMailPreview data={notifications} sortUnread={activeTab === 'Unread'}/>
                    ): (
                        <NotificationMailPreview data={SampleMail} sortUnread={activeTab === 'Unread'}/>
                    )
                }
            </ScrollContainer>
            
        </NotificationMailContainer>
    )
}

export default NotificationMailScreen