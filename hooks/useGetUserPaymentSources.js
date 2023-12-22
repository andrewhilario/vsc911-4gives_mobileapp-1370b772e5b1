import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserStore from '../stores/UserStore';

export default function useGetUserPaymentSources() {
    const [paymentSources, setPaymentSources] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = UserStore(state => state.userToken)
    const setUserPaymentSources = UserStore(state => state.setUserPaymentSources)
    useEffect(() => {
        async function fetchPaymentSources() {
            setLoading(true);
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/transactions/source',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    setPaymentSources(response.data.results)
                    setUserPaymentSources(response.data.results)
                    setLoading(false);
                }).catch(function (error) {
                    setLoading(false);
                    console.log(error)
                });
        }
        fetchPaymentSources();
    }, []);

    return { paymentSources, loading };
}
