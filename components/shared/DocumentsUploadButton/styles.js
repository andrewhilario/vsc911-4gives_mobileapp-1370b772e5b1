import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const UploadContainer = styled.TouchableOpacity`
    width: 100%;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-width: 2px;
    border-radius: 8px;
    border-color: ${colors.basic.basic200};
    border-style: dotted;
    padding: 24px;
`;

export const PromptContainer = styled.View`
    width: 90%;
    flex-direction: row;
`;

export const PromptText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic200};
`;

export const PromptTextContainer = styled.View`
    width:  75%;
`;

export const PromptIconContainer = styled.View`
    width:  20%;
    align-items: center;
`;