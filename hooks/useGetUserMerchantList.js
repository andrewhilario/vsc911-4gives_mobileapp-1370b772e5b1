import React, { useEffect, useState } from 'react'
import UserStore from '../stores/UserStore';

export default function useGetUserMerchantList() {
    const [merchantList, setMerchantList] = useState(null);
    const token = UserStore(state => state.userToken)

    useEffect(() => {
        async function fetchMerchantList() {
            try{
                const response = await fetch("https://dev.api.4gives.me/api/v1/users/user/merchant/lists/?page=3", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${token}`,
                    },

                })
                const data = await response.json();
                setMerchantList(data.results)
                // console.log('Fetched interest rate and transaction fee.', data.results)
            }catch(error){
                console.log(error)
            }
        }
        fetchMerchantList();
    }, []);

    return { merchantList };
}
