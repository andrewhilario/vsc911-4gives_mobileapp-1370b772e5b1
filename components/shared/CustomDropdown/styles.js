import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const DropDownContainer = styled.View`
    width: ${({ width }) => width};
    margin-bottom: 15px;
`;

export const PickerContainer = styled.View`
    border-radius: 8px;
    background-color: white;
    border-width: 2px;
    border-color: ${({ customColor }) => customColor};
`;


export const DropdownTitle = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ size }) => size ? `${size}px` : '12px'};
    color: ${colors.basic.basic900};
`;

export const DivisionHeader = styled.Text`
    color: ${colors.primary.primary500};
    font-size: 12px;
    font-family: ${fonts.BOLD};
`;
