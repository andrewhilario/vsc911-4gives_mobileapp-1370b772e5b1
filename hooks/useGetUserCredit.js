import React, { useEffect, useState } from 'react'
import UserStore from '../stores/UserStore';

export default function useGetUserCredit() {
    const [creditLimit, setCreditLimit] = useState(null);
    const [creditScore, setCreditScore] = useState(null);

    const token = UserStore(state => state.userToken)

    useEffect(() => {
        async function fetchCredit() {
            try{
                const response = await fetch("https://dev.api.4gives.me/api/v1/core/credit-limit/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${token}`,
                    },

                })
                const data = await response.json();
                setCreditLimit(data.credit_limit);
                setCreditScore(data.credit_rating);
            }catch(error){
                console.log(error)
            }
        }
        fetchCredit();
        }, []);

    return { creditLimit, creditScore };
}
