import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const MerchantPromosContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.tertiary.tertiary50};
`;

export const MerchantPromosTitleContainer = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color:  ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const MerchantPromosTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const MerchantPromosListContainer = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;