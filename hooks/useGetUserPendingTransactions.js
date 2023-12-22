import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserStore from '../stores/UserStore';

export default function useGetUserPendingTransactions() {
    const [pendingTransactions, setPendingTransactions] = useState(null);
    const [loadingPendingTransactions, setLoadingPendingTransactions] = useState(true);

    const token = UserStore(state => state.userToken)
    const setUserPendingTransactions = UserStore(state => state.setUserPendingTransactions)

    useEffect(() => {
        async function fetchPendingTransactions() {
            setLoadingPendingTransactions(true);
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=PENDING',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    setPendingTransactions(response.data.results)
                    setUserPendingTransactions(response.data.results)
                    setLoadingPendingTransactions(false);
                }).catch(function (error) {
                    setLoadingPendingTransactions(false);
                    console.log(error)
                });
        }
        fetchPendingTransactions();
    }, []);

    return { pendingTransactions, loadingPendingTransactions };
}
