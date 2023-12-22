import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const UnverifiedStatusContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 30px;
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

export const StyledImage = styled.Image`
    width: 160px;
    height: 160px;
`;

export const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
`;

export const HeaderText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${({ color }) => color};
    text-align: center;
    margin-bottom: 10px;
`;