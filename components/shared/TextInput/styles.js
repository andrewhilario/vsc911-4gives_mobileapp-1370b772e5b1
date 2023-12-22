import styled, { css } from "styled-components/native";

import { fonts } from "../../../constants/Fonts";
import { colors } from "../../../constants/Colors";

export const CustomInputContainer = styled.View`
    width: ${({ width }) => width};
    margin-bottom: 15px;
`;

export const InputContainer = styled.View`
    width: 100%;
    border-radius: 8px;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px;

    ${({ variant }) => {
    switch (variant) {
        case 'non-filled':
            return css`
            background-color: ${({ isLoginDisabled }) => isLoginDisabled ? '#fef1e9' : 'white'};
            border-width: 2px;
            border-color: ${({ isFilled, isLoginDisabled }) => 
                isLoginDisabled 
                    ? colors.primary.primary700 
                    : isFilled 
                    ? colors.basic.basic900 
                    : colors.basic.basic300};
            `;
        case 'bottom-border':
            return css`
            border-width: 0;
            border-bottom-width: 1px;
            border-color: ${colors.basic.basic300};
            `;
        case 'filled':
            return css`
            background-color: ${colors.primary.primary500};
            `;
        default:
            return css`
            background-color: transparent;
            `;
        }
    }}
`;

export const Input = styled.TextInput`
    padding: 8px;
    width: ${({ isPassword }) => (isPassword ? '80%' : '100%')};
    font-family: ${fonts.REGULAR};
    font-size: ${({ inputFontSize }) => (inputFontSize ? `${inputFontSize}px` : "14px")};
`;

export const ButtonContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
`;

export const NumberContainer = styled.View`
    align-items: center;
    margin-left: 5px;
    border-right-width: 1px;
    padding-right: 10px;
    border-right-color: ${colors.basic.basic900};
`;

export const NumberText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
    color: ${colors.basic.basic900};
`;

export const CustomText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${({ isLoginDisabled }) => isLoginDisabled ? colors.primary.primary700 : colors.basic.basic900};
`;

export const StatusContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const StatusSubText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 12px;
    color: ${colors.basic.basic900};
`;

export const StatusColoredSubText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 12px;
    color: ${colors.primary.primary500};
`;