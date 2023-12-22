import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const CreditScoreContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.tertiary.tertiary50};
`;

export const CreditScoreTitleContainer = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color: ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const CreditScoreTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const CreditScoreRowContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;`;

export const CreditScoreBodyContainer = styled.View`
    width: 48%;
`;

export const CreditScoreBodyText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${({ color }) => (color ? color : colors.basic.basic400)};
`;