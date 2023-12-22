import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetCompanies() {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        async function fetchCompanies() {
            axios({
                method: 'get',
                url: 'https://dev.api.4gives.me/api/v1/companies/',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                }).then((response) => {
                    setCompanies(response.data.results)
                }).catch(function (error) {
                    console.log(error)
                });
        }

        fetchCompanies();
        }, []);

    return { companies };
}