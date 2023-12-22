import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const PaymentSourceContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const PaymentSourceTitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
`;

export const PaymentSourceTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const AddPaymentSourceContainer = styled.View`
    width: 100%;
    align-items: flex-end;
    margin-bottom: 15px;
`;

export const AddPaymentSourceButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ isDisabled }) => (isDisabled ? colors.basic.basic400 : colors.primary.primary500)};
    padding: 8px;
    border-radius: 8px;
`;

export const AddPaymentSourceButtonText= styled.Text`
    font-size: 14px;
    color: white;
    margin-left: 5px;
`;

export const AddPaymentSourceIcon = styled.View``;

export const PaymentSourceScrollContainer = styled.ScrollView`
    width: 100%;
    flex: 1;
    margin-bottom: 20px;
`;

export const BottomBorder = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #C2C7CB;
    margin-top: 5px;
`;