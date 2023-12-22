import React from 'react'
import { MerchantPromosContainer, MerchantPromosListContainer, MerchantPromosTitleContainer, MerchantPromosTitleText } from './styles'
import MerchantPromosItem from '../MerchantPromosItem/MerchantPromosItem'

const MerchantPromos = () => {
    return (
        <MerchantPromosContainer>
            <MerchantPromosTitleContainer>
                <MerchantPromosTitleText>Promos by Merchant</MerchantPromosTitleText>
            </MerchantPromosTitleContainer>
            <MerchantPromosListContainer>
                <MerchantPromosItem />
                <MerchantPromosItem />
                <MerchantPromosItem />
                <MerchantPromosItem />
            </MerchantPromosListContainer>
        </MerchantPromosContainer>
    )
}

export default MerchantPromos