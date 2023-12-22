import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const UploadFromCameraModalContainer = styled.View`
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

export const UploadFromCameraModalTitleContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const UploadFromCameraModalTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const UploadFromCameraModalBodyContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const BodyTextContainer = styled.View`
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const BodyText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
    text-align: center;
`;

export const ProfileImageContainer = styled.View`
    width: 200px;
    height: 200px;
    border-radius: 1000px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const DocumentImageContainer = styled.View`
    width: 100%;
    height: 200px;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const ButtonRowContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const FooterContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;