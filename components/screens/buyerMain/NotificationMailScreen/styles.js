import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const NotificationMailContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.basic.white50};
`;

export const HeaderContainer = styled.View`
    width: 90%;
    margin-top: 50px;
`;

export const NotificationsTitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const NotificationsTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const CloseContainer = styled.View`
    justify-content: center;
    margin-bottom: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
`;


export const SelectorContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const SelectorButtonsContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-bottom-width: ${({ active }) => (active ? '2px' : '0')};
    border-bottom-color: ${({ active }) => (active ? colors.primary.primary500 : 'transparent')};
`;

export const SelectorButtonText = styled.Text`
    font-size: 16px;
    font-family: ${fonts.MEDIUM};
    color: ${({ active }) => (active ? colors.primary.primary500 : colors.basic.basic200)};
    text-align: center;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
`;