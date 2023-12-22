import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const TransactionsCardMenuModalContainer = styled.View`
    background-color: ${colors.tertiary.tertiary50};
    width: 50%;
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

export const CloseContainer = styled.View`
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 15px;
`

export const OptionButton = styled.TouchableOpacity`
    width: 80%;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10px;
`;

export const OptionText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
    color: ${colors.basic.basic900};
`;