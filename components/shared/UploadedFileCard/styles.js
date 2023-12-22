import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const FileContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`;

export const FileItemsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const FileTextContainer = styled.View`
    width: 80%;
    flex-direction: row;
    align-items: center;
`;

export const FileNameContainer = styled.View`
    width: 60%;
`;

export const FileNameText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 16px;
    color: ${colors.basic.basic900};
    margin-right: 20px;
`;

export const FileSizeContainer = styled.View`
    width: 40%;
`;

export const FileSizeText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 14px;
    color: ${colors.basic.basic200};
    text-align: center;
`;

export const FileIconContainer = styled.TouchableOpacity`
    width:  20%;
    align-items: center;
`;