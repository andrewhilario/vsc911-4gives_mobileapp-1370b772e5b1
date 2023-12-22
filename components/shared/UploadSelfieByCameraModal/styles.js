import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const UploadSelfieByCameraModalContainer = styled.View`
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
    background-color: #662F0EE5;
    justify-content: center;
    align-items: center;
`;

export const UploadSelfieByCameraModalTitleContainer = styled.View`
    width: 100%;
`;

export const UploadSelfieByCameraModalTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
    text-align: center;
`;

export const UploadSelfieByCameraModalBodyContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const CameraContainer = styled.View`
    width: 90%;
    height: 60%;
    border-radius: 24px;
    border-width: 8px;
    border-color: ${colors.primary.primary500};
    overflow: hidden;
    margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
    width: 90%;
    height: 60%;
    border-radius: 24px;
    border-width: 8px;
    border-color: ${colors.primary.primary500};
    overflow: hidden;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-bottom: 10px
`;