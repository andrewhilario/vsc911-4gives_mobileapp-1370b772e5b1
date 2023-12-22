import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const MenuButtonTextContainer = styled.View`
    width: 90%;
    justify-content: center;
    margin-left: 20px;
`;

export const MenuButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${({ color }) => color};
`;

export const IconContainer = styled.View`
    width: 10%;
    justify-content: center;
    align-items: center;
`;