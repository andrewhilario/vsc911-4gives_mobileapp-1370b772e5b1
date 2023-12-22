import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const MerchantPromosContainer = styled.View`
    width: 46%;
    height: 110px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    margin: 5px;
`;

export const StyledImage = styled.Image`
    width: 100%;
    height: 110px;
    object-fit: cover;
`;