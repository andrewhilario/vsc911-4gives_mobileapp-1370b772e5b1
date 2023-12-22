import React from 'react'

import { MerchantPromosContainer, StyledImage } from './styles'

import SamplePromo from '../../../assets/images/SamplePromo.jpg'

const MerchantPromosItem = () => {
  return (
    <MerchantPromosContainer>
        <StyledImage source={SamplePromo}/>
    </MerchantPromosContainer>
  )
}

export default MerchantPromosItem