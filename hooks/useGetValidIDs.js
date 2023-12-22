import React, { useEffect, useState } from 'react'
import UserStore from '../stores/UserStore';

export default function useGetValidIDs() {
    // const [validIDs, setValidIDs] = useState(null);

    const setValidIDs = UserStore(state => state.setValidIDs)
    
    useEffect(() => {
        async function fetchIDs() {
            try{
                const response = await fetch("https://dev.api.4gives.me/api/v1/users/id_types", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },

                })
                const data = await response.json();
                // setValidIDs(data)
                setValidIDs(data)
                console.log('Fetched interest rate and transaction fee.', data)
            }catch(error){
                console.log(error)
            }
        }
        fetchIDs();
    }, []);

    // return { validIDs };
}
