import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const UploadFromLibraryModalContainer = styled.View`
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

export const UploadFromLibraryModalTitleContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const UploadFromLibraryModalTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const UploadFromLibraryModalBodyContainer = styled.View`
    width: 100%;
`;

export const BodyText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
    text-align: center;
`;

export const ButtonRowContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const FooterContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;