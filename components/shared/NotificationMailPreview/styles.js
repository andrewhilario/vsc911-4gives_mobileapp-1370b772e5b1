import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const NotificationMailPreviewContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
`;

export const NotificationMailItemHolder = styled.TouchableOpacity`
    height: 110px;
    width: 100%;
    border-radius: 8px;
    background-color: ${({ isUnread }) => (isUnread ? colors.tertiary.tertiary50 : 'white')};
    padding: 12px;
    margin: 5px;
`;

export const MessageText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
    color: ${colors.basic.basic900};
    margin-bottom: 5px;
`;

export const DateTimeContainer = styled.View`
    width: 40%;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Circle = styled.View`
    width: 3px;
    height: 3px;
    border-radius: 1000px;
    background-color: ${({ isUnread }) => (isUnread ? colors.tertiary.tertiary500 : colors.basic.basic200)};
`;

export const DateTimeText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${({ isUnread }) => (isUnread ? colors.tertiary.tertiary500 : colors.basic.basic200)};
`;