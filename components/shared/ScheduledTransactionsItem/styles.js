import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const TransactionPaymentContainer = styled.View`
    width: 100%;
    padding: 8px;
    margin: 5px;
`;

export const TransactionPaymentItemContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const AmountText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
`;

export const DateText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StatusContainer = styled.View`
    border-radius: 25px;
    padding: 4px 8px 4px 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({isApproved, statusColor}) => (isApproved ? colors.basic.white50 : statusColor)};
    border-width: ${({isApproved}) => (isApproved ? '1px' : '0px')};
    border-color: ${({isApproved}) => (isApproved ? colors.secondary.secondary800 : colors.basic.white50)};
`;

export const StatusText = styled.Text`
    font-size: 10px;
    color: ${({isApproved}) => (isApproved ? colors.secondary.secondary800 : colors.basic.white50)};
`;

export const HelpButton = styled.TouchableOpacity`
    margin-left: 5px;
`;