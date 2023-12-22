import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const ScheduledTransactionsContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.tertiary.tertiary50};
`;

export const ScheduledTransactionsTitleContainer = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color:  ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const ScheduledTransactionsTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const ScheduledTransactionsListTextContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const ScheduledTransactionsListText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
    text-align: center;
`;