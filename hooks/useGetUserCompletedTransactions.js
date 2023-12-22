import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserStore from '../stores/UserStore';

export default function useGetUserCompletedTransactions() {
    const [completedTransactions, setCompletedTransactions] = useState(null);
    const [loadingCompletedTransactions, setLoadingCompletedTransactions] = useState(true);

    const token = UserStore(state => state.userToken)
    const setUserCompletedTransactions = UserStore(state => state.setUserCompletedTransactions)

    useEffect(() => {
        async function fetchCompeletedTransactions() {
            setLoadingCompletedTransactions(true);
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=COMPLETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    setCompletedTransactions(response.data.results)
                    setUserCompletedTransactions(response.data.results)
                    setLoadingCompletedTransactions(false);
                }).catch(function (error) {
                    setLoadingCompletedTransactions(false);
                    console.log(error)
                });
        }
        fetchCompeletedTransactions();
    }, []);

    return { completedTransactions, loadingCompletedTransactions };
}
