import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const DashboardCreatePaymentContainer = styled.View`
    background-color: ${colors.tertiary.tertiary50};
    width: 92%;
    border-radius: 8px;
    padding: 16px;
    elevation: 5;
    align-items: center;
`;

export const Overlay = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #662F0EE5;
    justify-content: center;
    align-items: center;
`;

export const DashboardCreatePaymentTitleContainer = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color:  ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const DashboardCreatePaymentTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const DashboardCreatePaymentBodyContainer = styled.View`
    width: 100%;
`;

export const DashboardCreatePaymentBodyText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${({ color }) => (color ? color : colors.basic.basic400)};
`;

export const ButtonRowContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;