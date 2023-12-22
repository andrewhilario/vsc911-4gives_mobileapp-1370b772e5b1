import React, { useEffect, useState } from 'react'
import UserStore from '../stores/UserStore';

export default function useGetUserNotifications() {
    const [notifications, setNotifications] = useState(null);
    const token = UserStore(state => state.userToken)

    const setUserNotifications = UserStore(state => state.setUserNotifications);

    useEffect(() => {
        async function fetchNotifications() {
            try{
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
                setUserNotifications(data.results)
                console.log('Fetched notifications.', data.results)
            }catch(error){
                console.log(error)
            }
        }
        fetchNotifications();
    }, []);

    return { notifications };
}
