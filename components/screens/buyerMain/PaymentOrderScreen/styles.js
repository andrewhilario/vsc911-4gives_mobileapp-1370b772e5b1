import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const PaymentOrderContainer = styled(Container)`
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

export const OrderContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const OrderTitleContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
`;

export const OrderTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const OrderDetailsContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
    border-radius: 6px;
    padding: 16px;
    background-color: ${colors.secondary.secondary100};
`;

export const OrderDetailsTextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'space-between')};
`;

export const TitleLeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ isTotal }) => (isTotal ? '18px' : '16px')};
    color:  ${({ isTotal }) => (isTotal ? colors.basic.basic900 : colors.basic.basic400)};
`;

export const TitleRightText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ isTotal }) => (isTotal ? '18px' : '16px')};
    color: ${({ isTotal }) => (isTotal ? colors.basic.basic900 : colors.basic.basic400)};
`;

export const FormContainer = styled.View`
    margin-top: 10px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px
`;