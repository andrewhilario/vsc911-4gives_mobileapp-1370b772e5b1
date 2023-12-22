import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles';

import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const TransactionPaymentsContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.secondary.secondary500};
`;

export const BackgroundColor1 = styled.View`
    position: absolute;
    width: 600px;
    height: 236px;
    background-color: ${colors.primary.primary500};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
`;

export const TransactionPaymentsViewContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const TransactionPaymentsTitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const TransactionPaymentsTitleText = styled.Text`
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

export const PaymentItemContainer = styled.View`
    width: 92%;
    margin-bottom: 10px;
`;

export const PaymentDetailsTextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'space-between')};
`;

export const TitleLeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ isTotal }) => (isTotal ? '18px' : '16px')};
    color:  ${({ isTotal, isBlack }) => (isTotal || isBlack ? colors.basic.basic900 : colors.basic.basic400)};
`;
