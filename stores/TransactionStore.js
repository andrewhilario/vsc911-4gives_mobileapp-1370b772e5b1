import { create } from 'zustand';

import useDecryptService from '../hooks/useDecryptService';

import LoaderStore from './LoaderStore'
import AlertStore from './AlertStore';

const Transaction = (set, get) => ({
    recentProposalDuration: 0,
    setRecentProposalDuration: (data) => set({ recentProposalDuration: data }),
    recentProposalDebitSchedule: '',
    setRecentProposalDebitSchedule: (data) => set({ recentProposalDebitSchedule: data }),
    recentProposalAmount: 0,
    setRecentProposalAmount: (data) => set({ recentProposalAmount: data }),

    isPaymentProcessCompleted: false,
    isTokenValid: false,
    setIsTokenValid: (data) => set({ isTokenValid: data }),
    isTokenInvalid: false,
    setIsTokenInvalid: (data) => set({ isTokenInvalid: data }),
    createPaymentRequest: async (paymentRequest) => {
        console.log('payment request info', paymentRequest)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/transactions/payment/payment-proposal/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${paymentRequest.token}`,
                    },
                    body: JSON.stringify({
                        merchant_id: paymentRequest.merchantID
                    }),
                })
            const data = await response.json()
            const decryptedData = useDecryptService(data.data, data.iv)
            if(decryptedData){
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Payment request created.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to create payment request.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to create payment request. ${error}`)
        }
    },
    completePaymentProcess: async (paymentProcess) => {
        console.log('payment process info', paymentProcess)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/transactions/payment/process/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Token ${paymentProcess.token}`,
                    },
                    body: JSON.stringify({
                        proposal_id: paymentProcess.proposalID,
                        payment_source_id: paymentProcess.paymentSourceID,
                        terms: paymentProcess.terms,
                    }),
                })
            const data = await response.json()
            console.log(data)
            if(data){
                set({isPaymentProcessCompleted: true, recentProposalDuration: 0, recentProposalDebitSchedule: ''})
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Payment process completed. Will proceed to next steps.');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to complete payment process.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to complete payment process. ${error}`)
        }
    },
    verifyToken: async (token) => {
        console.log('token to be verified', token)
        try{
            const response = await fetch("https://dev.api.4gives.me/api/v1/core/token-verify/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            console.log(data)
            if(data.message === 'Token is valid'){
                set({isTokenValid: true})
                //setting state of user feedback stores to initialize user feedback components
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Success', 'Verification complete. Proceed to bank payment');
            }else{
                LoaderStore.getState().stopLoading();
                AlertStore.getState().showAlert('Error', `Failed to verify.`)
            }
        }catch(error){
            //setting state of user feedback stores to initialize user feedback components
            set({isTokenInvalid: true})
            LoaderStore.getState().stopLoading();
            AlertStore.getState().showAlert('Error', `Failed to verify token. ${error}`)
        }
    },
});

const TransactionStore = create(Transaction);

export default TransactionStore;