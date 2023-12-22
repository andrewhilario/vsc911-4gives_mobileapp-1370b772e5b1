import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const PaymentDocumentsContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.primary.primary500};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
`;

export const DocumentsContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
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
    margin: 10px;
    border-bottom-width: ${({ active }) => (active ? '2px' : '0')};
    border-bottom-color: ${({ active }) => (active ? colors.primary.primary500 : 'transparent')};
`;

export const SelectorButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${({ active }) => (active ? colors.primary.primary500 : colors.basic.basic200)};
`;

export const FormContainer = styled.View`
    width: 96%;
    padding: 16px;
    border-width: 1px;
    border-color: ${colors.basic.basic200};
    border-radius: 4px;
`;

export const InformationText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: ${({ isDocument }) => (isDocument ? '16px' : '10px')};
    color: ${colors.basic.basic900};
`;

export const InformationTextContainer = styled.View`
    width: 96%;
    justify-content: center;
    align-items: center;
    margin: 10px 0px 10px 0px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 96%;
    margin-bottom: 15px;
`;