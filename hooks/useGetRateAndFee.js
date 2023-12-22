import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetRateAndFee() {
    const [interestRate, setInterestRate] = useState(null);
    const [transactionFee, setTransactionFee] = useState(null);

    useEffect(() => {
        async function fetchRateAndFee() {
            try{
                const response = await fetch("https://dev.api.4gives.me/api/v1/core/installment/variables", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },

                })
                const data = await response.json();
                setInterestRate(data.interest_rate)
                setTransactionFee(data.transaction_fee)
                console.log('Fetched interest rate and transaction fee.', data)
            }catch(error){
                console.log(error)
            }
        }
        fetchRateAndFee();
    }, []);

    return { interestRate, transactionFee };
}