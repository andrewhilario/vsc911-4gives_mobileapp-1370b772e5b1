import styled from "styled-components/native";

import { fonts } from "../../../constants/Fonts";
import { colors } from "../../../constants/Colors";

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    height: 60px;
    padding: ${({ paddingSize }) => (paddingSize ? `${paddingSize}` : '6px')};
    border-width: ${({ noBorder }) => (noBorder ? '0px' : '2px')};
    border-radius: 8px;
    background-color: ${({ type, buttonColor, isDisabled }) =>
        isDisabled ? colors.basic.basic300 : type === 'filled' ? buttonColor : 'transparent'};
    border-color: ${({ type, buttonColor }) =>
        type === 'filled' ? 'transparent' : buttonColor};
    opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
    justify-content: center;
    align-items: center;
`;

export const ButtonLabel = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ textSize }) => textSize}px;
    color: ${({ type, textColor, isDisabled }) =>
        isDisabled ? colors.basic.white50 : type === 'filled' ? colors.basic.white50 : textColor};
    text-align: center;
`;