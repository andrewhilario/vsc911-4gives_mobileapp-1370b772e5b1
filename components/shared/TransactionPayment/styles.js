import styled from 'styled-components/native';

import { fonts } from '../../../constants/Fonts';
import { colors } from '../../../constants/Colors';

export const TransactionContainer = styled.View`
    width: 100%;
    margin-bottom: 5px;
    border-bottom-width: 1px;
    padding-top: 5px;
    padding-bottom: 2px;
    border-color: ${colors.basic.basic400};
`;

export const PaymentItemContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const PaymentDetailsTextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'space-between')};
`;

export const TitleLeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ isTotal }) => (isTotal ? '18px' : '16px')};
    color:  ${({ isTotal, isBlack }) => (isTotal || isBlack ? colors.basic.basic900 : colors.basic.basic400)};
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
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
