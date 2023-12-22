import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const DocumentsMainContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary300};
`;

export const DocumentsMainTitleContainer = styled.View`
    width: 92%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 50px;
`;

export const DocumentsMainTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const BackContainer = styled.View`
    justify-content: center;
    margin-bottom: 5px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const SelectorContainer = styled.View`
    width: 92%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const SelectorButtonsContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px 3px 5px 3px;
    border-bottom-width: ${({ active }) => (active ? '2px' : '0')};
    border-bottom-color: ${({ active }) => (active ? colors.primary.primary500 : 'transparent')};
`;

export const SelectorButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    text-align: center;
    color: ${({ active }) => (active ? colors.primary.primary500 : colors.basic.basic400)};
    padding: 5px;
`;

export const FormContainer = styled.ScrollView`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 92%;
    flex: 1;
`;

export const FormTextContainer = styled.View`
    margin-bottom: 10px;
    width: 100%;
`;

export const FormBoldText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
`;

export const FormText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 12px;
    color: ${colors.basic.basic300};
`;
export const NavigationButtonContainer = styled.View`
    width: 100%;
    margin-top: 15px;
`;