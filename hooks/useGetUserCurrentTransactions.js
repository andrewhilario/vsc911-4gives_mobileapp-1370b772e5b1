import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserStore from '../stores/UserStore';

export default function useGetUserCurrentTransactions() {
    const [currentTransactions, setCurrentTransactions] = useState(null);
    const [loadingCurrentTransactions, setLoadingCurrentTransactions] = useState(true);

    const token = UserStore(state => state.userToken)
    const setUserCurrentTransactions = UserStore(state => state.setUserCurrentTransactions)
    useEffect(() => {
        async function fetchCurrentTransactions() {
            setLoadingCurrentTransactions(true);
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=CURRENT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    setCurrentTransactions(response.data.results)
                    setUserCurrentTransactions(response.data.results)
                    setLoadingCurrentTransactions(false);
                }).catch(function (error) {
                    setLoadingCurrentTransactions(false);
                    console.log(error)
                });
        }
        fetchCurrentTransactions();
        }, []);

    return { currentTransactions, loadingCurrentTransactions };
}
