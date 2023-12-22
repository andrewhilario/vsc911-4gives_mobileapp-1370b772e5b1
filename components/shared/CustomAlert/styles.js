import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const AlertContainer = styled.View`
    background-color: ${colors.basic.white50};
    width: 92%;
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
    background-color: #662F0EE5; /* 50% opacity black */
    justify-content: center;
    align-items: center;
`;

export const AlertTitle = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
    text-align: center;
    margin-bottom: 10px;
`;

export const AlertMessage = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic400};
    text-align: center;
    margin-bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
    padding: 10px 20px;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.primary.primary500};
    text-align: center;
`;