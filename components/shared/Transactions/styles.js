import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const TransactionsContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
    flex: 1;
`;

export const TransactionsTitleContainer = styled.View`
    width: 100%;
    padding-bottom: 5px;
`;

export const TransactionsTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const SelectorContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const SelectorButtonsContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px 3px 5px 3px;
    border-bottom-width: ${({ active }) => (active ? '2px' : '0')};
    border-bottom-color: ${({ active }) => (active ? colors.primary.primary700 : 'transparent')};
`;

export const SelectorButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    text-align: center;
    color: ${({ active }) => (active ? colors.primary.primary700 : colors.basic.basic400)};
    padding: 5px;
`;

export const TransactionScrollContainer = styled.ScrollView`
    width: 100%;
    flex: 1;
`;

export const TransactionsListTextContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const TransactionsListText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
    text-align: center;
`;