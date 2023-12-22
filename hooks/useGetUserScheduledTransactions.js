import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserStore from '../stores/UserStore';

export default function useGetUserScheduledTransactions() {
    const [scheduledTransactions, setScheduledTransactions] = useState(null);
    const [loadingScheduledTransactions, setLoadingScheduledTransactions] = useState(true);

    const token = UserStore(state => state.userToken)

    useEffect(() => {
        async function fetchScheduledTransactions() {
            setLoadingScheduledTransactions(true);
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/transactions/?buyer_status=CURRENT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    const data = response.data.results
                    const allPayments = data.flatMap(transaction => transaction.payments);
                    const sortedPayments = allPayments.sort((a, b) => new Date(a.interval_date) - new Date(b.interval_date));
                    const currentDate = new Date();
                    const nearPayments = sortedPayments.filter(payment => {
                        const paymentDate = new Date(payment.interval_date);
                        const timeDifference = Math.abs(paymentDate - currentDate);
                        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                        return daysDifference <= 20;
                    });

                    setScheduledTransactions(nearPayments)
                    setLoadingScheduledTransactions(false);
                }).catch(function (error) {
                    setLoadingScheduledTransactions(false);
                    console.log(error)
                });
        }
        fetchScheduledTransactions();
        }, []);

    return { scheduledTransactions, loadingScheduledTransactions };
}
