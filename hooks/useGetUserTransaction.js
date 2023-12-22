import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserStore from '../stores/UserStore';

export default function useGetUserTransaction(transactionID) {
    const [transactions, setTransactions] = useState(null);
    const token = UserStore(state => state.userToken)
    console.log('transactionID hook', transactionID)
    useEffect(() => {
        async function fetchCompeletedTransactions() {
            axios({
                method: 'get',
                url: `https://dev.api.4gives.me/api/v1/transactions/${transactionID}`,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                },
                }).then((response) => {
                    setTransactions(response.data)
                }).catch(function (error) {
                    console.log(error)
            });
        }
        fetchCompeletedTransactions();
        
    }, [transactionID]);

    return {transactions};
}
