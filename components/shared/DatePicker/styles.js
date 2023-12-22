import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const DatePickerContainer = styled.View`
    width: 48%; 
    margin-bottom: 15px;
`;

export const DatePickerTitle = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
`;

export const RowContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const DateButtonContainer = styled.View`
    width: 100%;
`;

export const DateTextContainer = styled.View`
    width: 50%;
    margin: 5px;
    align-items: center;
    justify-content: center;
`;

export const DateText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic900};
    margin-bottom: 10px;
`;