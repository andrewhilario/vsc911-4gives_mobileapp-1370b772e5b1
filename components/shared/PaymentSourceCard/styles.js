import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const PaymentSourceCardContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-width: 2px;
    border-color: ${colors.basic.basic500};
    border-radius: 8px;
`;

export const StatusContainer = styled.View`
    width: 25%;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    padding: 4px 8px 4px 8px;
    border-radius: 25px;
    background-color: ${({isApproved, statusColor}) => (isApproved ? colors.basic.white50 : statusColor)};
    border-width: ${({isApproved}) => (isApproved ? '1px' : '0px')};
    border-color: ${({isApproved}) => (isApproved ? colors.secondary.secondary800 : colors.basic.white50)};
`;

export const StatusText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${({isApproved}) => (isApproved ? colors.secondary.secondary800 : colors.basic.white50)};
`;

export const TextRowContainer = styled.View`
    width: 100%;
    margin-bottom: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 14px;
    color: ${colors.basic.basic200};
`;

export const RightText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 14px;
    color: ${colors.basic.basic900};
`;