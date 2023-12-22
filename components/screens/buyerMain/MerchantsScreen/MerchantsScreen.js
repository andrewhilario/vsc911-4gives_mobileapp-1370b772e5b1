import React, { useState } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { MerchantButtonContainer, MerchantButtonImageContainer, MerchantButtonText, MerchantContainer, MerchantListContainer, MerchantsContainer, MerchantsTitleContainer, MerchantsTitleText, ScrollContainer, SearchBarContainer, SearchBarInput, SearchIcon, StyledImage, ViewButton, ViewButtonText, ViewIcon } from './styles'

import { colors } from '../../../../constants/Colors';
import { SampleMerchants } from '../../../../constants/SampleData';
import SampleIcon from '../../../../assets/images/SampleCompanyIcon.png'
const MerchantsScreen = () => {
    //initializing search
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <MerchantsContainer>
            <ScrollContainer>
                <MerchantContainer>
                    <MerchantsTitleContainer>
                        <MerchantsTitleText>Merchants</MerchantsTitleText>
                        <ViewButton>
                            <ViewButtonText>View all</ViewButtonText>
                            <ViewIcon>
                                <AntDesign name="arrowright" size={18} color={colors.primary.primary500} />
                            </ViewIcon>
                        </ViewButton>
                    </MerchantsTitleContainer>
                    <SearchBarContainer>
                        
                        <SearchBarInput 
                            placeholder="Search for Merchant"
                            value={searchTerm}
                            onChangeText={(text) => setSearchTerm(text)}
                        />
                        <SearchIcon>
                            <FontAwesome name="search" size={16} color={colors.basic.basic200} />
                        </SearchIcon>
                    </SearchBarContainer>
                    <MerchantListContainer>
                        {
                            SampleMerchants.map((item, index) => (
                                <MerchantButtonContainer key={item.id}>
                                    <MerchantButtonImageContainer>
                                        <StyledImage source={SampleIcon}/>
                                    </MerchantButtonImageContainer>
                                    <MerchantButtonText>{item.merchantName}</MerchantButtonText>
                                </MerchantButtonContainer>
                            ))
                        }
                    </MerchantListContainer>
                </MerchantContainer>
            </ScrollContainer>
        </MerchantsContainer>
    )
}

export default MerchantsScreen